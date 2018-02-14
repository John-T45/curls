import {css} from 'emotion'
import createComponent, {renderNode} from '../createComponent'
import {GridBox} from '../Box'
import {flex, row, wrap, align, justify} from '../Flex/CSS'
import * as defaultTheme from './defaultTheme'
import emptyObj from 'empty/object'


const nodeType = 'nav'
const defaultCSS = css`
  ${flex};
  ${row.row};
  ${wrap.no};
  ${align.center};
  ${justify.start};
`
const SFC = createComponent({name: 'NavBar', defaultTheme, themePath: 'navBar'})


export default function NavBar (props) {
  return SFC({
    ...props,
    children: function (boxProps) {
      boxProps.children = function (nodeProps) {
        nodeProps.children = props.children
        nodeProps.nodeType = nodeProps.nodeType || nodeType
        return renderNode(nodeProps, defaultCSS)
      }

      return GridBox(boxProps)
    }
  })
}
