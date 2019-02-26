import React from 'react'
import Toggle from '@render-props/toggle'
import propTypes from './propTypes'
import * as styles from './styles'
import * as defaultTheme from './defaultTheme'
import Transitionable from '../Transitionable'
import createComponent from '../createComponent'
import {getDelay} from './utils'


const SFC = createComponent({name: 'slide', styles, defaultTheme})
const transitionProperties = 'visibility, transform'

const Slide =({
  children,
  initiallyVisible = false,
  visible,
  ...props
}) => (
  <Toggle value={visible} initialValue={initiallyVisible}>
    {function (toggleContext) {
      return SFC({
        isVisible: toggleContext.value,
        ...props,
        children: function (transProps) {
          transProps.property = transitionProperties
          transProps.children = children
          transProps.show = toggleContext.on
          transProps.hide = toggleContext.off
          transProps.toggle = toggleContext.toggle
          transProps.delay = getDelay(toggleContext.value, props)
          return Transitionable(transProps)
        }
      })
    }}
  </Toggle>
)

Slide.propTypes /* remove-proptypes */ = propTypes
export default Slide