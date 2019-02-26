import React from 'react'
import {css} from '@emotion/core'
import {GridBoxRenderProp} from '../Box/Box'
import {pos} from '../Box/styles'
import {grow} from '../Flex/styles'
import createComponent, {renderNode} from '../createComponent'
import gridPropTypes from '../Grid/propTypes'
import flexPropTypes from '../Flex/propTypes'
import propTypes from '../Box/propTypes'


const defaultCSS = css`
  min-width: 0;
  ${grow(true)};
  ${pos.relative};
`
const as = 'div'
const SFC = createComponent({name: 'col'})

const Col = React.forwardRef(
  function Col (props, innerRef) {
    return SFC({
      innerRef,
      ...props,
      children: function (boxProps) {
        boxProps.useFlex = true
        boxProps.children = function (nodeProps) {
          nodeProps.children = props.children
          nodeProps.as = nodeProps.as || as
          return renderNode(nodeProps, defaultCSS)
        }

        return GridBoxRenderProp(boxProps)
      }
    })
  }
)

Col.propTypes /* remove-proptypes */ = Object.assign({}, gridPropTypes, flexPropTypes, propTypes)
export default Col
