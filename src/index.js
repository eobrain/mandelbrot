import {
  a,
  article,
  body,
  button,
  figure,
  figcaption,
  h1,
  h2,
  head,
  html,
  img,
  link,
  meta,
  p,
  script,
  section,
  title,
  v
} from 'ez-html-elements'

import {
  marginNote,
  mandelbrot,
  newThought,
  subTitle
} from './custom.js'

const c = v('c')
const z = v('z')

console.log('<!doctype html>',
  html({ lang: 'en' },
    head(
      meta({ charset: 'utf-8' }),
      meta({ name: 'a showcase for Mandelbrot set images generated by the almondbread software' }),
      title('Exploring the Mandelbrot Set'),
      link({ rel: 'stylesheet', href: 'tufte-css-gh-pages/tufte.min.css' }),
      link({ rel: 'stylesheet', href: 'tufte-css-gh-pages/latex.css' }),
      link({ rel: 'stylesheet', href: 'gallery.css' }),
      meta({ name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      link({ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }),
      link({ rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }),
      link({ rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }),
      link({ rel: 'manifest', href: '/site.webmanifest' }),
      script({ src: 'app.js', defer: true }),
      meta({ name: 'twitter:card', content: 'summary_large_image' }),
      meta({ name: 'twitter:creator', content: '@eob' }),
      meta({ property: 'og:url', content: 'https://mandelbrot.dev/' }),
      meta({ property: 'og:title', content: 'Exploring the Mandelbrot Set' }),
      meta({ property: 'og:description', content: 'A showcase of Mandlebrot set images' }),
      meta({ property: 'og:image', content: 'https://mandelbrot.dev/img/770x433_-0.18271806444477842_0.6614075685543184_1.4551915228366852e-11_100000.png' })),
    body(
      article(
        h1('Exploring the Mandelbrot Set'),
        subTitle('Eamonn O\'Brien-Strain'),

        section(
          p(
            newThought('This site'),
            'is a showcase for Mandelbrot set images generated by the',
            a({ href: 'https://github.com/eobrain/almondbread' },
              'almondbread software') + '.',
            marginNote(
              'For more background on my fascination with this set and the development of the software see',
              a({ href: 'https://eamonn.org/programming/2021/01/02/almond-bread.html' },
                'Finding Mandelbrot images to use as video conference background'))),
          p(`
                Click on any image to view a full-resolution version, suitable for example
                as a video conferencing background.`)),
        section(
          h2('What you are looking at'),
          p(newThought('These are images'), 'of the space of complex numbers.'),
          p(
            'The black area is the Mandelbrot set itself, which are the values of the complex number',
            c,
            'such that if you repeatedly iterate',
            z, '←', z + '² +', c, 'starting at', z + '=0 the value of |' + z +
          '| stays less than 2. The colored areas surrounding the black of the Mandelbrot set are values of',
            c, 'for which', z, 'eventually goes to infinity, with the colors indicating how many iterations until |' + z +
          '|>2'),
          p(`You will also notice a subtle shading which seems to show relief.
                   This is done by considering that the colored bands to be contours on a map
                   and shading it accordingly to show the slope.`,
          marginNote(
            'For a detailed discussion of the algorithm see',
            a({ href: 'https://eamonn.org/programming/2021/01/29/mandelbrot-3.html' },
              'Hill-Shading the Mandelbrot Set')),
          p('Out of these simple mathematical operations we get these incredibly complex and fascinating images.')),
          section(
            h2('Images'),
            mandelbrot(
              '0_0_8_100000',
              '0',
              `Here we see the whole beetle of the set,
              with a large cardioid body and
              a circular head with a proboscis.`),
            mandelbrot(
              '-0.19853719075520848_1.1001770019531256_0.00390625_100000',
              '-0.19854 +i1.10018',
              `Here we zoom in 250× into a smaller copy of the beetle that's attached
                on a filament that extends upward in the positive imaginary
                direction from the main cardioid.`),
            mandelbrot(
              '0.2843902587890624_-0.013590494791666673_0.0009765625_1000000',
              '0.28439 -i0.01359',
              'Here we looking at a 1,000× magnification of a swirling area on the positive real buttocks of the beetle, with many small beetles floating around.'),
            mandelbrot(
              '0.28443044026692704_-0.012731933593750003_0.0009765625_1000000',
              '0.28443 -i0.01273',
              'This is close by the above image at the same  1000× magnification, focussing on a spiral and a whirlpool.'),
            mandelbrot(
              '-0.7961858113606771_-0.18322652180989607_0.0009765625_100000',
              '-0.79619 -i0.18323',
              'This beautiful and delicate 1,000× magnified structure is in the neck (the gap between the main cardioid and the large circle).'),
            mandelbrot(
              '-0.748985544840495_0.05576807657877601_0.000244140625_100000',
              '-0.748986 +i0.055768',
              'Zooming in more to 4000× magnification deep in neck shows a kind of lacework alongside a spiral.'),
            mandelbrot(
              '-0.6584480285644533_-0.4668521881103515_0.000244140625_100000',
              '-0.658448 -i0.466852',
              `Also at 4,000× magnification, on the shoulder of the beetle is this
                   snowflake-like pattern`),
            mandelbrot(
              '-0.7151815414428709_-0.23002815246582042_0.0001220703125_100000',
              '-0.715181 -i0.230028',
              'Higher up on the shoulder at 8,000× magnification we find these two spirals',
              'trapping a beetle between them.'),
            mandelbrot(
              '0.3593823115030921_-0.09108753204345725_0.0001220703125_100000',
              '0.35938 -i0.09109',
              'Just off the buttox of the main beetle at 8,000× there is this square structure.'),
            mandelbrot(
              '-0.7452629166666667_-0.11304177083333333_0.0001_1000000',
              '-0.745263 -i0.113042',
              'And even further up into the cleft between the head and body,',
              'zooming in a bit to 10,000×',
              'we find this beautifully symmetric pair of spirals around a beetle.'),
            mandelbrot(
              '-0.4827189505100249_0.53096650938193_0.0000019073486328125_10000000',
              '-0.48271895 +i0.53096651',
              'Deep in a cleft off the shoulder at 500,000× magnification is',
              'this highly textured structure.'),
            mandelbrot(
              '0.14886589182917292_0.6424077238777159_5e-7_100000',
              '0.148865892 +i0.642407724',
              `And now at 2,000,000× magnification we first zoom into the hips
                    of the large beetle and then into a filament coming off one of the small
                    beetles to get this filament which has an even smaller beetle embedded in
                    it.`),
            mandelbrot(
              '-0.5963609417279565_0.662749640395244_4.76837158203125e-7_100000',
              '-0.596360941 +i0.662749640',
              `Here. magnified a bot more than 2,000,000× we have zoomed into a
          beetle off the shoulder of the main beetle and then zoomed into the small beetle's anus
          to reveal this interesting patchwork, and unusual asymmetric distorted beetle`),
            mandelbrot(
              '0.250006_0_1.1920928955078125e-7_1000000',
              '0.250006',
              `Now we are at more than 8,000,000× magnification
            deep in the anus of the main beetle, right along the real axis
            very close to the asymptotic `, z, '=¼ point of the cardioid'),
            mandelbrot(
              '0.37001085813778134_0.6714354326948524_6e-8_100000',
              '0.37001085814 +i0.67143543269',
              `This beetle in a radiating crown at 17,000,000× magnification
                  is embedded in a filament off the main beetle's hips`),
            mandelbrot(
              '-1.9999117501972556_0_7.450580596923828e-9_1000000',
              '-1.99991175020',
              `And now we are down at 130,000,000× magnification at
                   the very left tip of the beetle's proboscis in the negative real axis.
                   The curves are generally smooth here, but lo!, here's another beetle`),
            mandelbrot(
              '-0.9992085337561246_0.3023643534824564_7.450580596923828e-9_100000',
              '-0.999208533756 +i0.302364353482',
              `Here we dive into a filament on the head of beetle where we find
                  a small beetle and dive into a filament on its body toll we get down to
                  an even smaller beetle at 130,000,000× magnification.`),
            mandelbrot(
              '-1.6744096742808003_0.0000471655656125_1e-9_1000000',
              '-1.67440967428 +i0.00004716557',
              "We're now at 1,000,000,000× (billion times!) magnification",
              'deep in the neck of a small beetle that is out on the proboscis of the main beetle'),
            mandelbrot(
              '0.022141191996343144_0.6524767128968962_9.313225746154785e-10_100000',
              '0.022141191996 +i0.652476712897',
              "We're now just a little beyond 1,000,000,000×  magnification",
              'off the hips of the main beetle, down through several layers of radiating sunbursts.'
            ),
            mandelbrot(
              '-0.13997533733903145_-0.9920762390921783_4.656612873077393e-10_1000000',
              '-0.139975337339 -i0.992076239092',
              'Here we are deep (2,000,000,000×) within a filament off the main body',
              'passing several levels of beetle as we zoom down.'),
            mandelbrot(
              '-0.7499888023860679_0.006997251233593751_2.5e-10_1000000',
              '-0.749988802386 +i0.006997251234',
              `Here we are at 4,000,000,000× magnification in the narrow
            crack of the neck where we see this decorative square.`),
            mandelbrot(
              '0.43245668411436744_-0.34053226446030754_2e-10_100000',
              '0.432456684114 -i0.340532264460',
              `Now we are at 5,000,000,000× magnification and off
                   the buttocks we find this lovely rosette.`),
            mandelbrot(
              '-0.18271806444477842_0.6614075685543184_1.4551915228366852e-11_100000',
              '-0.1827180644448 +i0.6614075685543',
              `Now we are at 70,000,000,000× magnification  in the
                   hip, deep down a spiral we find this area sandwiched between two spiral areas.`),
            mandelbrot(
              '-1.5367297734418115_0.004880842533422578_1.4551915228366852e-11_100000',
              '-1.5367297734418 +i0.0048808425334',
              'Still at 70,000,000,000× magnification in a little spine off the probiscus,',
              'we find this square structure.'),
            mandelbrot(
              '0.44518774607945466_-0.2436548964460257_7.275957614183426e-12_100000',
              '0.44518774607945 -i0.24365489644603',
              'Now we are at 140,000,000,000× magnification off the buttocks of the main beetle,',
              'at the very end of the probiscus of a small beetle.'),
            mandelbrot(
              '-1.1670691126047892_-0.29169804375500624_7.275957614183426e-12_100000',
              '-1.16706911260479 -i0.29169804375501',
              'Still at 140,000,000,000× magnification on the buttocks of a small beetle',
              'that is off the ears of the main beetle.'),
            mandelbrot(
              '-1.254999187233087_0.32578646797963223_7.275957614183426e-12_100000',
              '-1.25499918723309 +i0.32578646797963',
              'Staying at 140,000,000,000× off the head of a beetle that itself is off the head of the main beetle'),
            mandelbrot(
              '-0.7233981689664082_0.1940650381941092_7.275957614183426e-12_100000',
              '-0.72339816896641 +i0.19406503819411',
              'Yet again at 140,000,000,000× on the shoulder of a beetle that is off the shoulder of the main beetle',
              'is this richly textured velvet.'),
            mandelbrot(
              '-0.596360784631783_0.662749653789278_5e-12_1000000',
              '-0.59636078463178 +i0.66274965378928',
              `Here we we revisit the unusual asymmetric distorted beetle we saw at a bit more
            than 2,000,000× (2 million) magnification above and zoom into its neck and further down
            to 200,000,000,000× (200 billion) magnification to find this landscape.`),
            mandelbrot(
              '-1.7685374027905032_0.000540049501439199_1e-12_100000',
              '-1.76853740279050 +i0.00054004950144',
              `Here we go deep 1,000,000,000,000× (trillion!) magnification) into the neck of a small
            beetle on the proboscis of the main beetle to find this squashed spiral.`),
            mandelbrot(
              '-0.743643887037158704752191506114774_0.131825904205311970493132056385139_5e-13_100000',
              '-0.743643887037159 +i0.131825904205312',
              `Here we are at 1,000,000,000,000× magnification
            in the neck of a beetle that is in the neck of the top-level beetle`),
            mandelbrot(
              '-1.6744096746527182_0.000047165698790702304_4.8828125e-13_10000000',
              '-1.6744096746527182 +i0.000047165698790702304',
              `Here we go 2,000,000,000,000× magnification) into the
             neck of a smaller beetle along the proboscis to find this square structure.`),
            mandelbrot(
              '-0.16089413126577512_1.0376191282366105_4.547473508864641e-13_100000',
              '-0.16089413126577512 +i1.0376191282366105',
              `In the neck of a small beetle on a filament we zoom down
          through a succession of spirals till we reach 2,000,000,000,000× magnification.`),
            mandelbrot(
              '-0.7345612674879727_0.3601896136089664_4.547473508864641e-13_100000',
              '-0.7345612674879727 +i0.3601896136089664',
              `This linear feature at 2,000,000,000,000× magnification is
                   the proboscis of a beetle that's on the filament
                   of a beetle that is off the shoulder of the main beetle.`),
            mandelbrot(
              '-1.6744096746527197_0.0000471656987933374_2e-13_1000000',
              '-1.6744096746527197 +i0.0000471656987933374',
              `This lovely structure in the neck of a beetle on the proboscis,
                  at 5,000,000,000,000× is about as deep as we could go
                  using the previous implementation of the almondbread software which
                  used 64-bit double-precision values. Zooming more starts to reveal
                  spacial quantization caused by numerical effects.`),
            mandelbrot(
              '-0.24482766477704102_0.8132688560198666_8.881784197001252e-16_10000',
              '-0.24482766477704102 +i0.8132688560198666',
              'Modifying the almondbread software to use 80-bit double-precision values',
              'allows zooming to this unsusal short linear feature at',
              '1,000,000,000,000,000× (one quadrillion) magnification.')
          ),
          section(
            figure({ id: 'galleryFigureElement' },
              button({ id: 'prevElement' }, 'Previous'),
              button({ id: 'exitElement' }, 'Exit'),
              button({ id: 'nextElement' }, 'Next'),
              img({ id: 'galleryImageElement' }),
              figcaption({ id: 'galleryCaptionElement' }))
          ),
          section(
            p({
              xmlns: {
                cc: 'http://creativecommons.org/ns#',
                dct: 'http://purl.org/dc/terms/'
              }
            },
            a({ property: 'dct:title', rel: 'cc:attributionURL', href: 'https://mandelbrot.dev' },
              'mandelbrot.dev website'),
            'by',
            a({
              rel: 'cc:attributionURL dct:creator',
              property: 'cc:attributionName',
              href: 'https://twitter.com/eob'
            }, "Eamonn O'Brien-Strain"),
            'is licensed under',
            a({
              href: 'http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1',
              target: '_blank',
              rel: 'license noopener noreferrer',
              style: 'display:inline-block;'
            }, 'CC BY-NC-ND 4.0'),
            img({
              style: 'height:22px!important;margin-left:3px;vertical-align:text-bottom;',
              src: 'https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1',
              alt: 'CC'
            }),
            img({
              style: 'height:22px!important;margin-left:3px;vertical-align:text-bottom;',
              src: 'https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1',
              alt: 'by'
            }),
            img({
              style: 'height:22px!important;margin-left:3px;vertical-align:text-bottom;',
              src: 'https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1',
              alt: 'NC'
            }),
            img({
              style: 'height:22px!important;margin-left:3px;vertical-align:text-bottom;',
              src: 'https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1',
              alt: 'ND'
            }))))))))
