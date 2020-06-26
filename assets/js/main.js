// Posts images
const images = document.querySelectorAll('.post p > img')

images.forEach(function(element) {
  const parent = element.parentNode
  const title = element.title

  if (title) {
    const caption = document.createElement('span')
    caption.innerHTML = title

    parent.classList.add('img')
    parent.appendChild(caption)
  }
})
