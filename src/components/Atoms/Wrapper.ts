import styled from "styled-components";
import * as token from "../tokens";

export interface IWrapperProps {
  /**
   * background colour
   * @default token.EBACKGROUND_COLOUR.SURFACE
   */
  backgroundColour?: token.EBACKGROUND_COLOUR;
  /**
   * background image
   * @default null
   */
  backgroundImage?: string;
  /**
   * text colour
   * @default token.ETEXT_COLOUR.ON_SURFACE
   */
  textColour?: token.ETEXT_COLOUR;
  /**
   * padding
   * @default token.ESIZE.SINGLE
   */
  paddingTop?: token.ESIZE;
  /**
   * padding
   * @default token.ESIZE.SINGLE
   */
  paddingBottom?: token.ESIZE;
}

const Wrapper = styled.div<IWrapperProps>`
  width: 100%;
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  ${({ backgroundColour }) =>
    backgroundColour &&
    `
    background-color: ${backgroundColour};`};
  ${({ backgroundImage }) =>
    backgroundImage &&
    `
    background: url(${backgroundImage}) no-repeat center center; background-size: cover;`};
  ${({ textColour }) =>
    textColour &&
    `
    color: ${textColour}`};
`;

Wrapper.defaultProps = {
  paddingTop: token.ESIZE.SINGLE,
  paddingBottom: token.ESIZE.SINGLE
};

export default Wrapper;
