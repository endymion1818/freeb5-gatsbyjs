import { withPrefix } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";
import NavItem from "../../components/Molecules/NavItem";
import Container from "../Atoms/Container";
import Link from "../Atoms/Link";
import Wrapper from "../Atoms/Wrapper";
import SearchForm from "../Molecules/SearchForm";
import { IPrimaryNavProps } from "../Templates/Layout";
import { borderradius, BREAKPOINT, colors, FONTFAMILY, size } from "../tokens";

export interface IHeaderProps extends IPrimaryNavProps {
  siteTitle: string;
}

const Logo = styled(Link)`
  font-family: ${FONTFAMILY};
  font-size: 22px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  text-shadow: -4px 0 blue, 0 4px blue, 4px 0 blue, 0 -4px blue;
  margin: 1rem 1rem 1rem 0;
  display: inline-block;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const MainNav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  overflow-x: auto;
  font-weight: bold;

  li {
    a {
      display: block;
      padding: ${size.single};
      text-decoration: none;
      border-radius: ${borderradius.medium};

      &:hover,
      &:active,
      &:focus {
        background-color: ${colors.neutral.medium};
        color: ${colors.base.primary};
      }
      &.active {
        background-color: ${colors.neutral.medium};
        color: ${colors.base.primary};
      }
    }
  }
`;

const HeaderContainer = styled(Container)`
  overflow-x: hidden;

  @media (min-width: ${BREAKPOINT.medium}) {
    display: flex;

    > a {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > ul {
      flex: 3;
    }
  }
`;

const Header: FC<IHeaderProps> = ({ primaryNav, siteTitle }) => (
  <Wrapper
    backgroundColour={colors.neutral.medium}
    textColour={colors.base.primary}
  >
    <HeaderContainer>
      <Logo to={withPrefix("/")}>{siteTitle}</Logo>
      <MainNav>
        {primaryNav ? primaryNav.edges.map(item => NavItem(item)) : null}
        <li>
          <Link to="/post" activeClassName="active">
            Posts
          </Link>
        </li>
      </MainNav>
      <SearchForm />
    </HeaderContainer>
  </Wrapper>
);

export default Header;
