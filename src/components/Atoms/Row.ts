import styled from "styled-components";
import { BREAKPOINT } from "../tokens";
import { IBreakpoint } from "../types";

export interface IRowProps {
  size: number;
  breakpoint?: string;
}

const Row = styled.div<IRowProps>`
  @media (min-width: ${({ breakpoint = BREAKPOINT.medium }) => breakpoint}) {
    display: grid;
    grid-template-columns: repeat(${({ size }) => (size ? size : 1)}, 1fr);
    grid-gap: 15px;
  }
`;

export default Row;
