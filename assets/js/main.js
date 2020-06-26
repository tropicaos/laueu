// Posts images
const images = document.querySelectorAll('.post p > img')

images.forEach(function(image) {
  const parent = image.parentNode
  const title = image.title
  const alignment = image.alt

  if (title) {
    const caption = document.createElement('span')
    caption.innerHTML = title

    parent.appendChild(caption)
    parent.classList.add('img')

    if (alignment)
      parent.classList.add(alignment)
  }
})
