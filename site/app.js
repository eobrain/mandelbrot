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

document.body.onload = () => {
  showVisible()
  document.body.onscroll = showVisible
}
