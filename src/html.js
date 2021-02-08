const idClassRe = /^(#([a-z-]+))?(\.[a-z-.]+)?$/

const attributes = args => {
  let dict = {}
  for (const arg of args) {
    switch (typeof arg) {
      case 'object':
        dict = { ...dict, ...arg }
        break
      case 'string': {
        const match = arg.match(idClassRe)
        if (!match) {
          throw new Error(`"${arg} string is not in expected form of ${idClassRe}`)
        }
        const id = match[2]
        if (id) {
          dict.id = id
        }
        const classes = match[3]
        if (classes) {
          dict.class = classes.replaceAll('.', ' ')
        }
        break
      }
      case 'function':
        // ignore
        break
      default:
        throw new Error(`"${arg}" is ${typeof arg} but must be object, string, or functon`)
    }
  }
  let result = ''
  for (const key in dict) {
    const value = dict[key]
    switch (typeof value) {
      case 'string': {
        const quote = value.match(/"/) ? '\'' : '"'
        result += ` ${key}=${quote}${value}${quote}`
        break
      }
      case 'boolean':
        if (value) {
          result += ` ${key}`
        }
        break
      case 'object':
        for (const subKey in value) {
          const subValue = value[subKey]
          switch (typeof subValue) {
            case 'string': {
              const quote = subValue.match(/"/) ? '\'' : '"'
              result += ` ${key}:${subKey}=${quote}${subValue}${quote}`
              break
            }
            case 'boolean':
              if (value) {
                result += ` ${key}:${subKey}`
              }
              break
            default:
              throw new Error(`${key}="${value}" is a ${typeof value}, but expecting string or Boolean`)
          }
        }
        break
      default:
        throw new Error(`${key}="${value}" is a ${typeof value}, but expecting string, Boolean, or object`)
    }
  }
  return result
}

const content = args => {
  let result = ''
  for (const arg of args) {
    switch (typeof arg) {
      case 'object':
        // ignore
        break
      case 'string':
        // ignore
        break
      case 'function':
        result += arg()
        break
      default:
        throw new Error(`"${arg}" is ${typeof arg} but must be object, string, or functon`)
    }
  }
  return result
}
const element = (tag, selfClosing) => (...args) =>
  selfClosing
    ? `<${tag}${attributes(args)}>`
    : `<${tag}${attributes(args)}>${content(args)}</${tag}>`

export const a = element('a', false)
export const article = element('article', false)
export const body = element('body', false)
export const figure = element('figure', false)
export const h1 = element('h1', false)
export const head = element('head', false)
export const html = element('html', false)
export const img = element('img', true)
export const input = element('input', true)
export const label = element('label', false)
export const link = element('link', true)
export const meta = element('meta', true)
export const p = element('p', false)
export const script = element('script', false)
export const section = element('section', false)
export const source = element('source', false)
export const span = element('span', false)
export const title = element('title', false)
export const video = element('video', false)
