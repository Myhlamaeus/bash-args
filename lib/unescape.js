export default function (str) {
  if (str === '\'\'') {
    return ''
  }

  return String(str).replace(/\\(.)/g, '$1')
}
