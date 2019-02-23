import React from 'react'
import {css} from '@emotion/core'
import Portalize from 'react-portalize'
import {baseIsNotVisible} from '../Fade/CSS'
import {flex, align, justify} from '../Flex/CSS'
import {pos, w, h, ov} from '../Box/CSS'
import {FlexBox} from '../Box'
import Fade from '../Fade'
import * as defaultTheme from './defaultTheme'
import {maxZIndex} from '../browser'
import createComponent, {renderNode} from '../createComponent'

/**
<Overlay visible={isVisible}>
  {function ({isVisible, show, hide, toggle}) {

  }}
</Overlay>
**/
const as = 'div'
const defaultCSS = css`
  ${baseIsNotVisible};
  ${maxZIndex};
  ${flex};
  ${align.center};
  ${justify.center};
  ${pos.fixed};
  ${ov.auto};
  ${ov.touch};
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`
const SFC = createComponent({name: 'Overlay', defaultTheme, themePath: 'overlay'})


export default React.forwardRef(
  function Overlay ({transition = Fade, portal = false, ...props}, innerRef) {
    return transition({
      ...props,
      children: function (sfcProps) {
        const Component = SFC({
          innerRef,
          ...sfcProps,
          children: function (boxProps) {
            return FlexBox({
              ...boxProps,
              children: function ({isVisible, show, hide, toggle, ...overlayBoxProps}) {
                overlayBoxProps.as = overlayBoxProps.as || as
                overlayBoxProps.children =
                  typeof props.children === 'function'
                    ? props.children({isVisible, show, hide, toggle})
                    : props.children

                return renderNode(overlayBoxProps, defaultCSS)
              }
            })
          }
        })

        return (
          portal === false
            ? Component
            : <Portalize
                children={Component}
                entry={typeof portal === 'function' ? portal : void 0}
              />
        )
      }
    })
  }
)
