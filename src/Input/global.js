import {injectGlobal} from 'emotion'
import {textInputs} from 'polished'


// Resets
export default css`
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  ${textInputs()} {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    outline: none;
  }

  [type="search"] {
    -webkit-appearance: none;
    outline-offset: -2px;
  }

  :focus {
    outline: 0
  }
`
