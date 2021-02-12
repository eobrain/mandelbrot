import {
  a,
  article,
  body,
  figure,
  h1,
  h2,
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
      script({ src: 'app.js', defer: true }) +
      script({
        src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML',
        type: 'text/javascript'
      }) +
      script({ src: 'https://polyfill.io/v3/polyfill.min.js?features=es6' }) +
      script({ id: 'MathJax-script', async: true, src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js' })
    ) +
    body(() =>
      article(() =>
        h1(() => 'Exploring the Mandelbrot Set') +
        subTitle(() => 'Eamonn O\'Brien-Strain') +

        section(() =>
          p(() =>
            newThought(() => 'This site') +
            ' is a showcase for Mandelbrot set images generated by the ' +
            a({ href: 'https://github.com/eobrain/almondbread' },
              () => 'almondbread software') +
            '. ' +
            marginNote(() =>
              'For more background on my fascination with this set and the development of the software see ' +
              a({ href: 'https://eamonn.org/programming/2021/01/02/almond-bread.html' },
                () => 'Finding Mandelbrot images to use as video conference background')
            )
          ) +
          p(() =>
            'Look... ' +
            marginNote(() =>
              '... to see zooming videos showing the location on the complex plane of the image.'
            )
          ) +
          p(() => `
                Click on any image to view a full-resolution version, suitable for example
                as a video conferencing background.`)
        ) +
        section(() =>
          h2(() => 'What you are looking at') +
          p(() => 'These are image of the space of complex numbers,' +
            marginNote(() => `i.e. values of the form \\(a + ib\\)
             where \\(i\\) is the imaginary number \\(\\sqrt{-1}\\).`)
          ) +
          p(() => `
             The black area is the Mandelbrot set itself, which are the values of the complex number \\(c\\) such that
             if you repeatedly iterate \\(z \\gets z ^ 2 + c\\) starting at \\(z = 0\\) the value of \\(| z |\\) stays
             less than \\(2\\). The colored areas surrounding the black of the Mandelbrot set are values of \\(c\\) for which \\(z\\) eventually goes to
             infinity, with the colors indicating how many times \\(z \\gets z ^ 2 + c\\) needs to be iterated until \\(| z | > 2\\).
             `) +
          p(() => `You will also notice a subtle shading which seems to show relief.
                   This is done by considering that the colored bands to be contours on a map
                   and shading it accordingly to show the slope.` +
            marginNote(() =>
              'For a detailed discussion of the algorithm see ' +
              a({ href: 'https://eamonn.org/programming/2021/01/29/mandelbrot-3.html' },
                () => 'Hill-Shading the Mandelbrot Set')
            ) +
            p(() => 'Out of these simple mathematical operations we get these incredibly complex and fascinating images.')
          ) +
          section(() =>
            h2(() => 'Images') +
            p(() => `We start at the lowest magnification, looking at the whole of the Mandelbrot set.
          Note the particular beetle shape of a large cardioid body on the right,
          a circular head on the left, with many circular bulbs of different
          sizes attached around both. You will see that this pattern appears over and over
          in modified form as we zoom into the set.`) +
            mandelbrot(
              '0_0_8_100000',
              '\\(0\\)') +
            p(() => `Here we zoom in \\(250\\times\\) into a smaller copy of the beetle that's attached
                on a filament that extends upward in the positive imaginary
                direction from the main cardioid.`) +
            mandelbrot(
              '-0.19853719075520848_1.1001770019531256_0.00390625_100000',
              '\\(-0.19854 + i1.10018\\)') +
            p(() => 'Here we looking at a \\(1,000\\times\\) magnification of a swirling area on the positive real buttocks of the beetle, with many small beetles floating around.') +
            mandelbrot(
              '0.2843902587890624_-0.013590494791666673_0.0009765625_1000000',
              '\\(0.28439 - i0.01359\\)') +
            p(() => 'This is close by the above image at the same  \\(1000\\times\\) magnification, focussing on a spiral and a whirlpool.') +
            mandelbrot(
              '0.28443044026692704_-0.012731933593750003_0.0009765625_1000000',
              '0.28443 - i0.01273') +
            p(() => 'This beautiful and delicate \\(1,000\\times\\) magnified structure is in the neck (the gap between the main cardioid and the large circle).') +
            mandelbrot(
              '-0.7961858113606771_-0.18322652180989607_0.0009765625_100000',
              '-0.79619 - i0.18323') +
            p(() => 'Zooming in more to \\(4000\\times\\) magnification deep in neck shows a kind of lacework alongside a spiral.') +
            mandelbrot(
              '-0.748985544840495_0.05576807657877601_0.000244140625_100000',
              '-0.748986 + i0.055768') +
            p(() => `Also at \\(4,000\\times\\) magnification, on the shoulder of the beetle is this
                   snowflake-like pattern`) +
            mandelbrot(
              '-0.6584480285644533_-0.4668521881103515_0.000244140625_100000',
              '-0.658448 - i0.466852') +
            p(() => `Higher up on the shoulder at \\(8,000\\times\\) magnification we find these two spirals
                   trapping a beetle between them.) `) +
            mandelbrot(
              '-0.7151815414428709_-0.23002815246582042_0.0001220703125_100000',
              '-0.715181 - i0.230028') +
            p(() => `And even further up into the cleft between the head and body,
            zooming in a bit to \\(10,000\\times\\)
            we find this beautifully symmetric pair of spirals around a beetle.`) +
            mandelbrot(
              '-0.7452629166666667_-0.11304177083333333_0.0001_1000000',
              '-0.745263 - i0.113042') +
            p(() => `And now at \\(2,000,000\\times\\) magnification we first zoom into the hips
                    of the large beetle and then into a filament coming off one of the small
                    beetles to get this filament which has an even smaller beetle embedded in
                    it.`) +
            mandelbrot(
              '0.14886589182917292_0.6424077238777159_5e-7_100000',
              '0.148865892 + i0.642407724') +
            p(() => `Here. magnified a bot more than \\(2,000,000\\times\\) we have zoomed into a
          beetle off the shoulder of the main beetle and then zoomed into the small beetle's anus
          to reveal this interesting patchwork, and unusual asymmetric distorted beetle`) +
            mandelbrot(
              '-0.5963609417279565_0.662749640395244_4.76837158203125e-7_100000',
              '-0.596360941 + i0.662749640') +
            p(() => `Now we are at more than \\(8,000,000\\times\\) magnification
            deep in the anus of the main beetle, right along the real axis
            very close to the asymptotic \\(z=1/4\\) point of the cardioid`
            ) +
            mandelbrot(
              '0.250006_0_1.1920928955078125e-7_1000000',
              '0.250006') +
            p(() => `This beetle in a radiating crown at \\(17,000,000\\times\\) magnification
                  is embedded in a filament off the main beetle's hips`) +
            mandelbrot(
              '0.37001085813778134_0.6714354326948524_6e-8_100000',
              '0.37001085814 + i0.67143543269') +
            p(() => `And now we are down at \\(130,000,000\\times\\) magnification at
                   the very left tip of the beetle's proboscis in the negative real axis.
                   The curves are generally smooth here, but lo!, here's another beetle`) +
            mandelbrot(
              '-1.9999117501972556_0_7.450580596923828e-9_1000000',
              '-1.99991175020') +
            p(() => `Here we dive into a filament on the head of beetle where we find
                  a small beetle and dive into a filament on its body toll we get down to
                  an even smaller beetle at \\(130,000,000\\times\\) magnification.`) +
            mandelbrot(
              '-0.9992085337561246_0.3023643534824564_7.450580596923828e-9_100000',
              '-0.999208533756 + i0.302364353482') +
            p(() => `We're now at \\(1,000,000,000\\times\\) (billion times!) magnification
                  deep in the neck of a small beetle that is out on the proboscis of the main beetle`) +
            mandelbrot(
              '-1.6744096742808003_0.0000471655656125_1e-9_1000000',
              '-1.67440967428 + i0.00004716557') +
            p(() => `Here we are deep (\\(2,000,000,000\\times\\)) within a filament off the main body
                  passing several levels of beetle as we zoom down.`) +
            mandelbrot(
              '-0.13997533733903145_-0.9920762390921783_4.656612873077393e-10_1000000',
              '-0.139975337339 - i0.992076239092') +
            p(() => `Here we are at \\(4,000,000,000\\times\\) magnification in the narrow
            crack of the neck where we see this decorative square.`) +
            mandelbrot(
              '-0.7499888023860679_0.006997251233593751_2.5e-10_1000000',
              '-0.749988802386 + i0.006997251234') +
            p(() => `Now we are at \\(5,000,000,000\\times\\) magnification and off
                   the buttocks we find this lovely rosette.`) +
            mandelbrot(
              '0.43245668411436744_-0.34053226446030754_2e-10_100000',
              '0.432456684114 - i0.340532264460') +
            p(() => `Now we are at \\(70,000,000,000\\times\\) magnification  in the
                   hip, deep down a spiral we find this area sandwiched between two spiral areas.`) +
            mandelbrot(
              '-0.18271806444477842_0.6614075685543184_1.4551915228366852e-11_100000',
              '-0.1827180644448 + i0.6614075685543') +
            p(() => `Here we we revisit the unusual asymmetric distorted beetle we saw at a bit more
            than \\(2,000,000\\times\\) (2 million) magnification above and zoom into its neck and further down
            to \\(200,000,000,000\\times\\) (200 billion) magnification to find this landscape.`) +
            mandelbrot(
              '-0.596360784631783_0.662749653789278_5e-12_1000000',
              '-0.59636078463178 + i0.66274965378928') +
            p(() => `Here we go deep \\(1,000,000,000,000\\times\\) (trillion!) magnification) into the neck of a small
            beetle on the proboscis of the main beetle to find this squashed spiral.`) +
            mandelbrot(
              '-1.7685374027905032_0.000540049501439199_1e-12_100000',
              '-1.76853740279050 + i0.00054004950144') +
            p(() => `Here we are at \\(1,000,000,000,000\\times\\) magnification
            in the neck of a beetle that is in the neck of the top-level beetle`) +
            mandelbrot(
              '-0.743643887037158704752191506114774_0.131825904205311970493132056385139_5e-13_100000',
              '-0.743643887037159 + i0.131825904205312') +
            p(() => `Here we go \\(2,000,000,000,000\\times\\) magnification) into the
             neck of a smaller beetle along the proboscis to find this square structure.`) +
            mandelbrot(
              '-1.6744096746527182_0.000047165698790702304_4.8828125e-13_10000000',
              '-1.6744096746527182 + i0.000047165698790702304') +
            p(() => `In the neck of a small beetle on a filament we zoom down
          through a succession of spirals till we reach \\(2,000,000,000,000\\times\\) magnification.`) +
            mandelbrot(
              '-0.16089413126577512_1.0376191282366105_4.547473508864641e-13_100000',
              '-0.16089413126577512 + i1.0376191282366105') +
            p(() => `This linear feature at \\(2,000,000,000,000\\times\\) magnification is
                   the proboscis of a beetle that's on the filament
                   of a beetle that is off the shoulder of the main beetle.`) +
            mandelbrot(
              '-0.7345612674879727_0.3601896136089664_4.547473508864641e-13_100000',
              '-0.7345612674879727 + i0.3601896136089664') +
            p(() => `This lovely structure in the neck of a beetle on the proboscis,
                  at \\(5,000,000,000,000\\times\\) is about as deep as we can go
                  using the current implementation of the almondbread software which
                  uses 64-bit double-precision values. Zooming more starts to reveal
                  spacial quantization caused by numerical effects.`) +
            mandelbrot(
              '-1.6744096746527197_0.0000471656987933374_2e-13_1000000',
              '-1.6744096746527197 +i0.0000471656987933374')
          ) +
          section(() =>
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
  )
)
