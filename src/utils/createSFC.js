import {cx} from 'react-emotion'
import PropTypes from 'prop-types'
import createOptimized from 'react-cake/es/utils/createOptimized'
import reduceProps from 'react-cake/es/utils/reduceProps'
import getClassNames from './getClassNames'
import getTheme from './getTheme'
import getIn from './getIn'
import modify from './modify'


export default function ({
  name,
  propTypes,
  CSS = {},
  defaultTheme = {},
  themePath = '',
  modifier = modify
}) {
  propTypes.children = PropTypes.oneOf([
    PropTypes.element,
    PropTypes.node,
    PropTypes.func
  ]).isRequired

  function SFC (props/*{children, className, ...props}*/) {
    const theme = getTheme(defaultTheme, getIn(props.theme, themePath))

    return createOptimized(
      props.children,
      {
        ...reduceProps(props, propTypes),
        className: cx(
          getClassNames(modifier, propTypes, {...props, theme, CSS}),
          props.className
        )
      }
    )
  }

  if (typeof process !== void 0 && process.env.NODE_ENV !== 'production') {
    SFC.displayName = name
    SFC.propTypes = propTypes
  }

  return SFC
}
