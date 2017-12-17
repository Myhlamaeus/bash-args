export default function escape(str) {
  if (typeof str === 'undefined' || str === null || str === '') {
    return "''";
  }

  return String(str).replace(/[^\da-z-]/gi, '\\$&');
}
