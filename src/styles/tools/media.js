import { css } from 'styled-components'

export const media = {
  desktop: (...args) => css`
    @media (min-width: 961px) {
      ${ css(...args) }
    }
  `,
  mobile: (...args) => css`
    @media (max-width: 960px) {
      ${ css(...args) }
    }
  `
}
