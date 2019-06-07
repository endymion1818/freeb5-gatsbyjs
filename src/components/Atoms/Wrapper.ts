import styled from 'styled-components'

export interface IWrapperProps {
  /**
   * background colour
   * @default 'white'
   */
  backgroundColour?: string
  /**
   * text colour
   * @default 'black'
   */
  textColour?: string
}

const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  background-color: ${({ backgroundColour }) => backgroundColour};
  color: ${({ textColour }) => textColour};
`

Wrapper.defaultProps = {
  backgroundColour: 'white',
  textColour: 'white',
}

export default Wrapper
