import {
  a,
  figure,
  h3,
  img,
  input,
  label,
  p,
  source,
  span,
  video
} from 'ez-html-elements'

const PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='

let nextCount = 0
export const marginNote = (...content) => {
  ++nextCount
  const id = `mn-i${nextCount}`
  return label(['margin-toggle'], { for: id }, '⊕') +
        input(['margin-toggle'], { id, type: 'checkbox' }) +
        span(['marginnote'], ...content)
}

export const newThought = content => span(['newthought'], content)

export const subTitle = (...content) => p(['subtitle'], ...content)

export const mandelbrot = (c, location, ...content) => {
  return figure(
    marginNote(
      video({ autoplay: true, loop: true, muted: true, width: 256 },
        source({ 'data-defer': `img/256x144_${c}.mp4`, type: 'video/mp4' })),
      h3(location)),
    a({ href: `img/1920x1080_${c}.png` },
      img({ 'data-defer': `img/770x433_${c}.png`, src: PLACEHOLDER, width: 770, height: 'auto', alt: location })
    ),
    p(...content))
}
