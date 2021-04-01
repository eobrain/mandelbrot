import page from './page.js'

import {
  a,
  figure,
  h2,
  p,
  section,
  source,
  video
} from 'ez-html-elements'
import { mandelbrot } from './custom.js'

console.log(page(section(
  p('See also', a({ href: '/' }, 'color renderings') + '.'),
  h2('Images'),
  mandelbrot(
    '-0.75_0_4_100000_bw',
    '-0.75',
    'If the Mandelbot set were the size of the Earth this image would be 22 thousand kilometers (36 thousand miles) wide.'),
  mandelbrot(
    '-0.756488542382916_0.06676445857932188_1.1920928955078125e-7_1000000_bw',
    '-0.756488542 +i0.066764459',
    'At 8,000,000× magnification.',
    'If the Mandelbot set were the size of the Earth this image would be 66 cm (26 inches) wide.'),
  mandelbrot(
    '-1.9532566366044803_0.0000013417179314264052_1.1641532182693481e-10_100000_bw',
    '-1.953256636604 +i0.000001341718',
    'At 8,000,000× magnification.',
    'If the Mandelbot set were the size of the Earth this image would be 0.6 millimetres wide.'),
  mandelbrot(
    '0.3508966269802502_-0.42142952345047896_5e-13_10000000_bw',
    '0.350896626980250 -i0.421429523450479',
    'At 9,000,000,000× (nine billion) magnification.',
    'If the Mandelbot set were the size of the Earth this image would be 3 μm wide.'),
  mandelbrot(
    '-0.10375257638744859_0.9250308323744141_2.842170943040401e-14_100000_bw',
    '-0.103752576387449 +i0.9250308323744141',
    'At 35,000,000,000,000× (35 trillion) magnification.',
    'If the Mandelbot set were the size of the Earth this image would be 160 nm wide.'),
  mandelbrot(
    '-0.24482766477704102_0.8132688560198666_8.881784197001252e-16_10000_bw',
    '-0.24482766477704102 +i0.8132688560198666',
    'Modifying the almondbread software to use 80-bit double-precision values',
    'allows zooming to this unsusal short linear feature at',
    '1,000,000,000,000,000× (one quadrillion) magnification.'),
  mandelbrot(
    '-1.3551734861174762_0.04053190336270575_8.881784197001252e-16_1000000_bw',
    '-1.3551734861174762 +i0.04053190336270575',
    'Another image ar 1,000,000,000,000,000× (1 quadrillion) magnification.',
    'If the Mandelbot set were the size of the Earth this image would be 50 Å wide.'),
  figure(['fullwidth'],
    video({ loop: true, controls: true },
      source({
        src: '/img/slow-1920x1080_-1.3551734861174762_0.04053190336270575_8.881784197001252e-16_1000000_bw.mp4',
        type: 'video/mp4'
      }))))))
