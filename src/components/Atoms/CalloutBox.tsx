import React, { FC } from "react";
import styled from "styled-components";

import * as token from "../tokens";

export interface ICalloutBoxProps {
  /**
   * lighter design (on dark backgrounds)
   * @default false
   */
  light?: boolean;
  /**
   * text alignment
   * @default token.ETEXTALIGN.LEFT
   */
  textAlign?: token.ETEXTALIGN;
  /**
   * children of this component
   * @default <>test</>
   */
  children: string | JSX.Element[] | JSX.Element;
  /**
   * background colour
   * @default token.EBACKGROUND_COLOUR.SURFACE
   */
  backgroundColour?: token.EBACKGROUND_COLOUR;
  /**
   * text colour
   * @default token.ETEXT_COLOUR.ON_SURFACE
   */
  textColour?: token.ETEXT_COLOUR;
}

export interface ICalloutContainerProps extends ICalloutBoxProps {}

const CalloutContainer = styled.div<ICalloutContainerProps>`
  width: 80vw;
  max-width: 64rem;
  margin: 0 auto;
  padding: ${token.ESIZE.SINGLE};
  border-radius: 15px;

  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}

  background-color: ${({ backgroundColour }) =>
    backgroundColour ? backgroundColour : `rgba(0, 0, 0, 0.5);`};
  color: ${({ textColour }) =>
    textColour
      ? textColour
      : `${token.ETEXT_COLOUR.ON_SURFACE};
    text-shadow: 2px 2px 1px rgba(0,0,0,0.8);
    `};
`;

const CalloutBox: FC<ICalloutBoxProps> = ({
  children,
  light,
  textAlign,
  backgroundColour,
  textColour
}) => {
  if (!children) {
    return null;
  }
  return (
    <CalloutContainer
      light={light}
      textAlign={textAlign}
      backgroundColour={backgroundColour}
      textColour={textColour}
    >
      {children}
    </CalloutContainer>
  );
};

export default CalloutBox;
