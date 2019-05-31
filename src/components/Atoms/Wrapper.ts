import styled from 'styled-components'

export interface IWrapperProps {
    backgroundColour?: string
}

const Wrapper = styled.div<IWrapperProps>`
    width: 100%;
    background-color: ${({backgroundColour}) => backgroundColour};
`

Wrapper.defaultProps = {
    backgroundColour: 'black'
}

export default Wrapper