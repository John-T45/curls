import {defaultColors, defaultHoverColors, defaultActiveColors} from '../theming'
import {borderRadiusScale, borderWidthScale, getBoxShadow} from '../Box/defaultTheme'

export const scale = {
  xxs: {
    x: 12,
    y: 6,
  },
  xs: {
    x: 16,
    y: 8,
  },
  sm: {
    x: 20,
    y: 10,
  },
  md: {
    x: 24,
    y: 12,
  },
  lg: {
    x: 32,
    y: 16,
  },
  xl: {
    x: 40,
    y: 20,
  },
  xxl: {
    x: 48,
    y: 24,
  }
}

export const defaultBorderRadius = 5
export const defaultBorderWidth = 1
export const defaultBorderColor = 'translucentLight'
export const defaultBoxShadow = 0
export const defaultBg = 'translucentDark'
export const defaultSize = 'md'
export const colors = defaultColors
export const hover = {
  colors: defaultHoverColors
}
export const active = {
  colors: defaultActiveColors
}
export {borderRadiusScale, borderWidthScale, getBoxShadow} from '../Box/defaultTheme'
