/* global galleryFigureElement, galleryImageElement, prevElement, exitElement, nextElement */

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

const showGallery = (hrefs, i) => {
  galleryFigureElement.classList.add('shown')
  galleryImageElement.setAttribute('src', hrefs[i])
  const n = hrefs.length
  prevElement.onclick = () => {
    const iPrev = (i + n - 1) % n
    window.location = `#fig-${iPrev}`
    showGallery(hrefs, iPrev)
  }
  nextElement.onclick = () => {
    const iNext = (i + 1) % n
    window.location = `#fig-${iNext}`
    showGallery(hrefs, iNext)
  }
  exitElement.onclick = () => {
    galleryFigureElement.classList.remove('shown')
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

/* window.onpopstate = event => {
  if (!event.state) {
    return
  }
  showGallery(event.state.hrefs, event.state.i)
} */
