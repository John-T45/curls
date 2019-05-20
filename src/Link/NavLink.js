import React from 'react'
import {useLink} from './A'
import {useTheme} from '../ThemeConsumer'
import createElement from '../createElement'


const NavLink = React.forwardRef(
  (props, ref) => {
    const theme = useTheme()

    if (__DEV__)
      if (!theme?.navLink?.component)
        throw (
          'You must define a `component` property in your '
          + '`theme.navLink` to use the NavLink component'
        )

    props = useLink(props)
    props.ref = ref
    return createElement(theme.navLink.component, props)
  }
)

if (__DEV__) NavLink.displayName = 'NavLink'
export default NavLink