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

const PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
let nextCount = 0
const marginNote = content => {
  ++nextCount
  const id = `mn-i${nextCount}`
  return label('.margin-toggle', { for: id }, () => '&#8853;') +
    input('.margin-toggle', { id, type: 'checkbox' }) +
    span('.marginnote', content)
}

const newThought = content => span('.newthought', content)

const subTitle = content => p('.subtitle', content)

const mandelbrot = (c, text) => {
  return figure(() =>
    marginNote(() =>
      video({ autoplay: true, loop: true, muted: true, width: 256 }, () =>
        source({ 'data-defer': `img/256x144_${c}.mp4`, type: 'video/mp4' })
      ) +
      p(() => text)
    ) +
    a({ href: `img/1920x1080_${c}.png` }, () =>
      img({ 'data-defer': `img/770x433_${c}.png`, src: PLACEHOLDER, width: 770, height: 'auto', alt: text })
    )
  )
}

console.log('<!doctype html>' +
  html({ lang: 'en' }, () =>
    head(() =>
      meta({ charset: 'utf-8' }) +
      meta({ name: 'a showcase for Mandelbrot set images generated by the almondbread software' }) +
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
        subTitle(() => 'Eamonn O\'Brien-Strain') +

        section(() =>
          p(() =>
            newThought(() => 'This site') +
            ' is a showcase for images generated by the ' +
            a({ href: 'https://github.com/eobrain/almondbread' },
              () => 'almondbread software') +
            '.'
          ) +
          p(() =>
            'Look ' +
            marginNote(() =>
              '... to see zooming videos showing the location on the complex plane of the image.'
            ) +
            ' ...'
          ) +
          p(() => `
                Click on the image to view a full-resolution version of the
                image, suitable (for example) as a video conferencing
                background.`) +
          mandelbrot(
            '0_0_8_100000',
            '0') +
          mandelbrot(
            '-0.748985544840495_0.05576807657877601_0.000244140625_100000',
            '-0.748986 + i0.055768') +
          mandelbrot(
            '0.14886589182917292_0.6424077238777159_5e-7_100000',
            '0.14886589d + i0.642407724') +
          mandelbrot(
            '-0.5963609417279565_0.662749640395244_4.76837158203125e-7_100000',
            '-0.596360941 + i0.662749640') +
          mandelbrot(
            '0.37001085813778134_0.6714354326948524_6e-8_100000',
            '0.37001085814 + i0.67143543269') +
          mandelbrot(
            '-0.9992085337561246_0.3023643534824564_7.450580596923828e-9_100000',
            '-0.999208533756 + i0.302364353482') +
          mandelbrot(
            '0.43245668411436744_-0.34053226446030754_2e-10_100000',
            '0.432456684114 - i0.340532264460') +
          mandelbrot(
            '-0.18271806444477842_0.6614075685543184_1.4551915228366852e-11_100000',
            '-0.1827180644448 + i0.6614075685543') +
          mandelbrot(
            '-0.596360784631783_0.662749653789278_5e-12_1000000',
            '-0.59636078463178 + i0.66274965378928') +
          mandelbrot(
            '-0.16089413126577512_1.0376191282366105_4.547473508864641e-13_100000',
            '-0.16089413126577512 + i1.0376191282366105') +
          mandelbrot(
            '-0.7345612674879727_0.3601896136089664_4.547473508864641e-13_100000',
            '-0.7345612674879727 + i0.3601896136089664') +
          mandelbrot(
            '-0.743643887037158704752191506114774_0.131825904205311970493132056385139_5e-13_100000',
            '-0.743643887037159 + i0.131825904205312')
        ) +
        p({
          xmlns: {
            cc: 'http://creativecommons.org/ns#',
            dct: 'http://purl.org/dc/terms/'
          }
        }, () =>
          a({ property: 'dct:title', rel: 'cc:attributionURL', href: 'https://mandelbrot.dev' },
            () => 'mandelbrot.dev website') +
          ' by ' +
          a({
            rel: 'cc:attributionURL dct:creator',
            property: 'cc:attributionName',
            href: 'https://twitter.com/eob'
          }, () => "Eamonn O'Brien-Strain") +
          ' is licensed under ' +
          a({
            href: 'http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1',
            target: '_blank',
            rel: 'license noopener noreferrer',
            style: 'display:inline-block;'
          }, () => 'CC BY-NC-ND 4.0') +
          ' ' +
          img({
            style: 'height:22px!important;margin-left:3px;vertical-align:text-bottom;',
            src: 'https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1',
            alt: 'CC'
          }) +
          img({
            style: 'height:22px!important;margin-left:3px;vertical-align:text-bottom;',
            src: 'https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1',
            alt: 'by'
          }) +
          img({
            style: 'height:22px!important;margin-left:3px;vertical-align:text-bottom;',
            src: 'https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1',
            alt: 'NC'
          }) +
          img({
            style: 'height:22px!important;margin-left:3px;vertical-align:text-bottom;',
            src: 'https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1',
            alt: 'ND'
          })
        )
      )
    )
  )
)
