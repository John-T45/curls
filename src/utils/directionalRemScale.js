import {css} from 'emotion'


const directionalRe = /(?=\d+)/
const defaultDirections = {
  t: ['top'],
  r: ['right'],
  b: ['bottom'],
  l: ['left'],
  y: ['top', 'bottom'],
  x: ['right', 'left']
}


export function isDirectional (value) {
  return typeof value === 'string' && value.length > 1
}


export default function directionalRemScale (
  prefix,
  modScale,
  modValue,
  directions = defaultDirections
) {
  let CSS = []

  modValue.split(' ').forEach(
    function (val) {
      let [abbr, value] = val.split(directionalRe)

      directions[abbr].forEach(
        function (xyz) {
          CSS.push(`${prefix.replace('{XYZ}', xyz)}: ${modScale[value]}rem;`)
        }
      )
    }
  )

  return css`${CSS.join(' ')}`
}
