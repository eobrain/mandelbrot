import {
  a,
  article,
  body,
  figure,
  h1,
  head,
  html,
  img,
  input,
  label,
  link,
  meta,
  p,
  script,
  section,
  source,
  span,
  title,
  video
} from './html.js'

let nextCount = 0
const mandelbrot = (c, text) => {
  ++nextCount
  const id = `mn-i${nextCount}`
  return figure(() =>
    label('.margin-toggle', { for: id }, () => '&#8853;') +
    input('.margin-toggle', { id, type: 'checkbox' }) +
    span('.marginnote', () =>
      video({ autoplay: true, loop: true, muted: true, width: '256' }, () =>
        source({ src: `img/256x144_${c}.mp4`, type: 'video/mp4' }) +
        img({ src: `img/video_${c}.gif`, alt: text })
      ) +
      p(() => text)
    ) +
    a({ href: `img/1920x1080_${c}.png` }, () =>
      img({ src: `img/770x433_${c}.png`, alt: text })
    )
  )
}

console.log(html(() =>
  head(() =>
    meta({ charset: 'utf-8' }) +
    title(() => 'Exploring the Mandelbrot Set') +
    link({ rel: 'stylesheet', href: 'tufte-css-gh-pages/tufte.min.css' }) +
    link({ rel: 'stylesheet', href: 'tufte-css-gh-pages/latex.css' }) +
    meta({ name: 'viewport', content: 'width=device-width, initial-scale=1' }) +
    link({ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }) +
    link({ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }) +
    link({ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }) +
    link({ rel: 'manifest', href: '/site.webmanifest' }) +
    script({ src: 'app.js', defer: true })
  ) +
  body(() =>
    article(() =>
      h1(() => 'Exploring the Mandelbrot Set') +
      p('.subtitle', () => 'Eamonn O\'Brien-Strain') +

      section(() =>
        p(() =>
          span('.newthought', () => 'This site') +
          ' is a showcase for images generated by the ' +
          a({ href: 'https://github.com/eobrain/almondbread' },
            () => 'almondbread software') +
          '.'
        ) +
        p(() =>
          'Look ' +
          label('.margin-toggle', { for: 'mn-demo' }, () => '(click the &#8853;)') +
          input('#mn-demo.margin-toggle', { type: 'checkbox' }) +
          span('.marginnote', () =>
            `... to see zooming videos showing the location
                           on the complex plane of the image.`
          ) +
          ' ...'
        ) +
        p(() => `
                        Click on the image to view a full-resolution version of the
                        image, suitable (for example) as a video conferencing
                        background.`) +
        mandelbrot(
          '-0.5963609417279565_0.662749640395244_4.76837158203125e-7_100000',
          '-0.596360941 + i0.662749640') +
        mandelbrot(
          '-0.596360784631783_0.662749653789278_5e-12_1000000',
          '-0.59636078463178 + i0.66274965378928') +
        mandelbrot(
          '0.43245668411436744_-0.34053226446030754_2e-10_100000',
          '0.432456684114 - i0.340532264460') +
        mandelbrot(
          '-0.16089413126577512_1.0376191282366105_4.547473508864641e-13_100000',
          '-0.16089413126577512 + i1.0376191282366105')
      ) +
      p({
        xmlns: {
          cc: 'http://creativecommons.org/ns#',
          dct: 'http://purl.org/dc/terms/'
        }
      }, () =>
        a({ property: 'dct:title', rel: 'cc:attributionURL', href: 'https://mandelbrot.dev' }) +
        'mandelbrot.dev website by ' +
        a({
          rel: 'cc:attributionURL dct:creator',
          property: 'cc:attributionName',
          href: 'https://twitter.com/eob'
        }, () => "Eamonn O'Brien-Strain") +
        ' is licensed under' +
        a({
          href: 'http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1',
          target: '_blank',
          rel: 'license noopener noreferrer',
          style: 'display:inline-block;'
        }) +
        ' CC BY-NC-ND 4.0 ' +
        img({
          style: 'height:22px!important;margin-left:3px;vertical-align:text-bottom;',
          src: 'https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1'
        }) +
        img({
          style: 'height:22px!important;margin-left:3px;vertical-align:text-bottom;',
          src: 'https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1'
        }) +
        img({
          style: 'height:22px!important;margin-left:3px;vertical-align:text-bottom;',
          src: 'https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1'
        }) +
        img({
          style: 'height:22px!important;margin-left:3px;vertical-align:text-bottom;',
          src: 'https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1'
        })
      )
    )
  )
))
