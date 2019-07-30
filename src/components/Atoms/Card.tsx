import React, { FC } from "react";
import styled, { css } from "styled-components";

import * as token from "../tokens";

export interface ICardProps {
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
  /**
   * text colour
   * @default token.ETEXT_COLOUR.ON_SURFACE
   */
  linkColour?: token.ETEXT_COLOUR;
}

export const CardCss = css<ICardProps>`
    padding: ${token.ESIZE.SINGLE};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: ${token.ESIZE.SINGLE};
    ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
    border-radius: ${token.EBORDERRADIUS.MEDIUM};
    background-color: ${({ backgroundColour }) =>
      backgroundColour ? backgroundColour : `rgba(0, 0, 0, 0.5);`};
    color: ${({ textColour }) =>
      textColour ? textColour : token.ETEXT_COLOUR.ON_SURFACE};

    a:not(.button) {
        color: ${({ linkColour }) =>
          linkColour ? linkColour : token.ETEXT_COLOUR.ON_SURFACE};
    }

    @media (min-width: ${token.EBREAKPOINT.MEDIUM}) {
        min-height: 28rem;
    }
`;

const SCard = styled.div`
  ${CardCss}
`;

const Card: FC<ICardProps> = ({
  children,
  textAlign,
  backgroundColour,
  textColour,
  linkColour
}) => {
  if (!children) {
    return null;
  }
  return (
    <SCard
      textAlign={textAlign}
      backgroundColour={backgroundColour}
      textColour={textColour}
      linkColour={linkColour}
    >
      {children}
    </SCard>
  );
};

export default Card;
