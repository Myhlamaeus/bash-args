import escape from './escape'

export default function stringify (args, prefix = '--', eq = '=') {
  if (Array.isArray(args)) {
    return args.map(stringify).join(' ')
  }

  if (typeof args === 'object') {
    const args = []

    for (let key of Object.keys(args)) {
      let val = args[key]

      if (val === true || val === null || typeof val === 'undefined') {
        args.push(`${prefix}${escape(key)}`)
      } else {
        if (!Array.isArray(val)) {
          val = [val]
        }

        for (let val2 of val) {
          args.push(`${prefix}${escape(key)}${eq}${escape(val2)}`)
        }
      }
    }

    return args.join(' ')
  }

  return escape(args)
}
