import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import A from './A'


export default React.forwardRef(
  function Link (props, innerRef) {
    return <A as={RouterLink} ref={innerRef} {...props}/>
  }
)
