export default function unescape(str) {
  if (str === "''") {
    return '';
  }

  return String(str).replace(/\\(.)/g, '$1');
}
