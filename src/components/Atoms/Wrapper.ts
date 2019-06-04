import styled from 'styled-components'

export interface IWrapperProps {
  /**
   * background colour
   * @default 'white'
   */
  backgroundColour?: string
}

const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  background-color: ${({ backgroundColour }) => backgroundColour};
`

Wrapper.defaultProps = {
  backgroundColour: 'white',
}

export default Wrapper
