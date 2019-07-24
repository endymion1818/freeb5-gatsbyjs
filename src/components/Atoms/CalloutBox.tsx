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
  children: JSX.Element;
}

export interface ICalloutContainerProps extends ICalloutBoxProps {}

const CalloutContainer = styled.div<ICalloutContainerProps>`
  width: 80vw;
  max-width: 64rem;
  margin: 0 auto;
  padding: ${token.ESIZE.SINGLE};
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${token.ETEXT_COLOUR.ON_SURFACE};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
`;

const CalloutBox: FC<ICalloutBoxProps> = ({ children, light, textAlign }) => {
  return (
    <CalloutContainer light={light} textAlign={textAlign}>
      {children}
    </CalloutContainer>
  );
};

export default CalloutBox;
