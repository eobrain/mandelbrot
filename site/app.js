/* global galleryFigureElement, galleryImageElement, prevElement, exitElement, nextElement */

const HD_WIDTH_PX = 1920 * 2
const HD_HEIGHT_PX = 1080 * 2

// Credit: Dan https://stackoverflow.com/a/7557433/978525
const isElementInViewport = el => {
  const rect = el.getBoundingClientRect()
  const { innerHeight, innerWidth } = window
  const { clientHeight, clientWidth } = document.documentElement

  return (
    rect.bottom >= 0 &&
    rect.left >= 0 &&
    rect.top <= (innerHeight || clientHeight) &&
    rect.right <= (innerWidth || clientWidth)
  )
}

const showVisible = () => {
  document.querySelectorAll('img[data-defer]').forEach(el => {
    if (isElementInViewport(el)) {
      el.src = el.dataset.defer
      el.removeAttribute('data-defer')
    }
  })
  document.querySelectorAll('figure > .marginnote > video > source[data-defer]').forEach(el => {
    const video = el.parentElement
    const figure = video.parentElement.parentElement
    if (isElementInViewport(figure)) {
      el.src = el.dataset.defer
      el.removeAttribute('data-defer')
      video.load()
      video.play()
    }
  })
}

const px = x => `${x}px`

const setGalleryImageSize = (width, height) => {
  galleryImageElement.style.width = px(width)
  galleryImageElement.style.height = px(height)
}

let zoomed = false
galleryImageElement.onclick = ({ offsetX, offsetY }) => {
  const classes = galleryImageElement.classList
  const imageHeight = window.screen.width * HD_HEIGHT_PX / HD_WIDTH_PX
  if (zoomed) {
    classes.remove('zoom')
    setGalleryImageSize(window.screen.width, imageHeight)
    galleryImageElement.style.left = 0
    galleryImageElement.style.top = px((window.screen.height - imageHeight) / 2)
  } else {
    classes.add('zoom')
    setGalleryImageSize(HD_WIDTH_PX, HD_HEIGHT_PX)
    galleryImageElement.style.left = px(window.screen.width / 2 - HD_WIDTH_PX * offsetX / window.screen.width)
    galleryImageElement.style.top = px(window.screen.height / 2 - HD_HEIGHT_PX * offsetY / imageHeight)
  }
  zoomed = !zoomed
}

const showGallery = (hrefs, i) => {
  galleryFigureElement.classList.add('shown')
  document.body.classList.add('gallery-shown')
  exitElement.onclick = () => {
    galleryFigureElement.classList.remove('shown')
    document.body.classList.remove('gallery-shown')
  }
  galleryImageElement.setAttribute('src', hrefs[i])
  const imageHeight = window.screen.width * HD_HEIGHT_PX / HD_WIDTH_PX
  setGalleryImageSize(window.screen.width, imageHeight)
  galleryImageElement.style.left = 0
  galleryImageElement.style.top = px((window.screen.height - imageHeight) / 2)
  const n = hrefs.length
  prevElement.onclick = () => {
    const iPrev = (i + n - 1) % n
    // window.location = `#fig-${iPrev}`
    showGallery(hrefs, iPrev)
  }
  nextElement.onclick = () => {
    const iNext = (i + 1) % n
    // window.location = `#fig-${iNext}`
    showGallery(hrefs, iNext)
  }
}

document.body.onload = () => {
  showVisible()
  document.body.onscroll = showVisible

  const mediumImages = document.getElementsByClassName('medium-image')
  const n = mediumImages.length
  const hrefs = []
  for (let i = 0; i < n; ++i) {
    const aElement = mediumImages[i]
    hrefs.push(aElement.getAttribute('href'))
    aElement.setAttribute('href', '#')
    mediumImages[i].onclick = () => {
      window.location = `#fig-${i}`
      showGallery(hrefs, i)
    }
  }
}
