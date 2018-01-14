import {css} from 'emotion'
import {GridBox} from '../Box'
import {pos} from '../Box/CSS'
import {grow} from '../Flex/CSS'
import {createNode} from '../utils'


const defaultCSS = css`
  ${pos.relative};
  min-width: 0;
`
const SFC = createNode({name: 'Col', defaultCSS})


export default function Col (props) {
  return GridBox({
    grow: true,
    ...props,
    children: function (sfcProps) {
      sfcProps.children = props.children
      return SFC(sfcProps)
    }
  })
}
