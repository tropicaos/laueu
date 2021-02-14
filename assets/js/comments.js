const { firestore } = firebase

const initFirebase = () => {
  const config = {
    apiKey: "AIzaSyBlUPp3tRYHyu9SuvtrH_p2lSPdM4xSh5A",
    authDomain: "laueu-21cc4.firebaseapp.com",
    databaseURL: "https://laueu-21cc4-default-rtdb.firebaseio.com",
    projectId: "laueu-21cc4",
    storageBucket: "laueu-21cc4.appspot.com",
    messagingSenderId: "573075150808",
    appId: "1:573075150808:web:9397479444ab2d1df804ad"
  }

  firebase.initializeApp(config)
}

// When form is submitted
const onSubmitComment = (event) => {
  const { permalink } = event.target.dataset
  const form = event.target
  const inputs = form.querySelectorAll('input')
  const submit = form.querySelector('button')
  const submitText = submit.innerHTML
  const data = Object.fromEntries(new FormData(form))
  const comment = { ...data, permalink, time: new Date(), approved: false }

  inputs.forEach(input => input.disabled = true)
  submit.disabled = true
  submit.innerHTML = 'Enviando...'

  firestore()
    .collection(`comments`)
    .add(comment)
    .then(({ id }) => {
      form.classList.add('-is-submitted')
      inputs.forEach(input => input.value = '')

      fetch('/send-mail', {
        method: 'POST',
        body: JSON.stringify({
          name: comment.name,
          email: comment.email,
          permalink: comment.permalink,
          message: comment.message,
          commentId: id
        })
      })
    })
    .catch(err => {
      console.error('Error adding comment: ', err)
      console.alert('Ops... não foi possível enviar o comentário :(')
    })
    .finally(() => {
      inputs.forEach(input => input.disabled = false)
      submit.disabled = false
      submit.innerHTML = submitText
    })

  event.preventDefault()
}

// If there's a comment section, then load the comments
const onLoadComments = (container) => {
  const { permalink } = container.dataset

  const clearComments = () =>
    container.querySelectorAll('.comment')
      .forEach(comment => comment.remove())

  const formatDate = (timestamp) => {
    const date = timestamp.toDate()

    return `${date.toLocaleDateString('pt-BR')} às ${date.toLocaleTimeString('pt-BR')}`
  }

  const setComments = (comments) => {
    comments.forEach(comment => {
      const element = document.createElement('div')
      const template = `
        <div class="header">
          <span class="name">${comment.name}:</span>
          <span class="time">${formatDate(comment.time)}</span>
        </div>
        <span class="message">${comment.message}</span>
      `

      element.classList.add('comment')
      element.innerHTML = template

      container.appendChild(element)
    })
  }

  // Get comments
  firestore()
    .collection(`comments`)
    .onSnapshot(snapshot => {
      // Get approved comments with current permalink
      const comments = snapshot.docs
        .filter(doc => doc.data().approved && doc.data().permalink === permalink)
        .map(doc => ({ id: doc.id, ...doc.data() }))

      // Update comments
      clearComments()
      setComments(comments)

      // Handle css classes
      if (comments.length === 0)
        container.classList.add('-is-empty')
      container.classList.remove('-is-loading')
    })
}

const commentForm = document.querySelector('.comment-form')
const commentList = document.querySelector('.comment-list')

if (commentForm || commentList) initFirebase()
if (commentForm) commentForm.addEventListener('submit', onSubmitComment)
if (commentList) onLoadComments(commentList)
