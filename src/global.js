import {injectGlobal, css} from 'emotion'


injectGlobal`
  *, *:before, *:after {
    /** border-box for all, as it should be */
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
  }

  /**
   ** Browser resets
   **/
  html, body, div, span, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  ol, ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  details,
  main,
  summary {
    display: block;
  }
`


export const MAX_Z_INDEX = 2147483647;
export const MAX_PX = '10000000px';
export const maxZIndex = css`z-index: ${MAX_Z_INDEX}`
