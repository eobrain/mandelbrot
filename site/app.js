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
  document.querySelectorAll('img[data-defer]').forEach((img) => {
    if (isElementInViewport(img)) {
      img.src = img.dataset.defer
      img.removeAttribute('data-defer')
    }
  })
}

document.body.onload = () => {
  showVisible()
  document.body.onscroll = showVisible
}
