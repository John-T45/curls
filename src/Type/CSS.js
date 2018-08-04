import {css} from 'emotion'
import {fontSize} from './utils'
import {colorize} from '../utils'


// Weights
export const thin = css`font-weight: 100;`
export const ultraLight = css`font-weight: 200;`
export const light = css`font-weight: 300;`
export const regular = css`font-weight: 400;`
export const medium = css`font-weight: 500;`
export const semiBold = css`font-weight: 600;`
export const bold = css`font-weight: 700;`
export const heavy = css`font-weight: 800;`
export const ultraHeavy = css`font-weight: 900;`


// Sizes
export function xxs (v, t) {
  return v ? fontSize('xxs', t) : void 0
}

export function xs (v, t) {
  return v ? fontSize('xs', t) : void 0
}

export function sm (v, t) {
  return v ? fontSize('sm', t) : void 0
}

export function md (v, t) {
  return v ? fontSize('md', t) : void 0
}

export function lg (v, t) {
  return v ? fontSize('lg', t) : void 0
}

export function xl (v, t) {
  return v ? fontSize('xl', t) : void 0
}

export function xxl (v, t) {
  return v ? fontSize('xxl', t) : void 0
}


// Face
export function face (value, theme) {
  return css`font-family: ${theme.typeFaces[value] || value};`
}


// Color
export function color (value, theme) {
  return colorize('color', value, theme)
}


// Alignment
export const left = css`text-align: left;`
export const center = css`text-align: center;`
export const right = css`text-align: right;`
export const justified = css`text-align: justify;`


// Legibility
export const optimizeFor = {
  speed: css`text-rendering: optimizeLegibility;`,
  legibility: css`text-rendering: optimizeLegibility;`
}
export const antialias = css`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
`


// Other
export const ellipsis = css`
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
`
