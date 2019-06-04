import styled from 'styled-components'
import * as variable from '../constants'

export interface IContainerProps {
  /**
   * maximum width of container
   * @default 1
   */
  maxWidth?: string
}

const Container = styled.div<IContainerProps>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  margin-left: auto;
  margin-right: auto;
`

export default Container

Container.defaultProps = {
  maxWidth: '75rem',
}
