import PropTypes from 'prop-types'
import positional from '../PropTypes/positional'


export default {
  ...positional,
  enterDelay: PropTypes.number,
  leaveDelay: PropTypes.number,
}
