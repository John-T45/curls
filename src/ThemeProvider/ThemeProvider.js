import React, {useState, useEffect, useCallback, useMemo, useContext} from 'react'
import PropTypes from 'prop-types'
import {css, ThemeContext, Global} from '@emotion/core'
import emptyArr from 'empty/array'
import createTheme, {mergeTheme} from './createTheme'
import {toSize} from '../utils'
import ButtonGlobals from '../Button/global.css'
import InputGlobals from '../Input/global.css'
import LinkGlobals from '../Link/global.css'
import TextAreaGlobals from '../TextArea/global.css'
import TypeGlobals from '../Type/global.css'


export const CurlsContext = ThemeContext
const globalStyles = [TypeGlobals, ButtonGlobals, LinkGlobals, InputGlobals, TextAreaGlobals]
export const useCurls = () => useContext(CurlsContext)
const ThemeProvider = ({theme, children}) => {
  const
    [userTheme, setUserTheme] = useState(() => createTheme(theme)),
    setTheme = useCallback(
      nextUserTheme => setUserTheme(mergeTheme(userTheme, nextUserTheme)),
      [userTheme]
    ),
    replaceTheme = useCallback(
      nextUserTheme => setUserTheme(createTheme(nextUserTheme)),
      emptyArr
    )

  useEffect(() => { replaceTheme(theme) }, [theme])

  const childContext = useMemo(
    () => ({
      userTheme,
      theme: Object.assign({}, userTheme),
      setTheme,
      replaceTheme
    }),
    [userTheme, setTheme, replaceTheme]
  )

  const styles = useMemo(
    () => [css`html { font-size: ${toSize(userTheme.baseRem, '%')} }`].concat(globalStyles),
    [userTheme.baseRem]
  )

  return (
    <CurlsContext.Provider value={childContext}>
      <Global styles={styles}/>
      {children}
    </CurlsContext.Provider>
  )
}

if (__DEV__) {
  ThemeProvider.displayName = 'ThemeProvider'
  ThemeProvider.propTypes = {theme: PropTypes.object}
}

export default ThemeProvider