export default function (str) {
  if (typeof str === 'undefined' || str === null || str === '') {
    return '\'\''
  }

  return String(str).replace(/[^\da-z\-]/gi, '\\$1')
}
