import page from './page.js'

import {
  a,
  h2,
  p,
  section
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
    'At 35,000,000,000,000× (35 quadrillion) magnification.',
    'If the Mandelbot set were the size of the Earth this image would be 160 nm wide.'))))
