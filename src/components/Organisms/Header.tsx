import { withPrefix } from "gatsby";
import React, { FC } from "react";
import styled from "styled-components";
import NavItem from "../../components/Molecules/NavItem";
import Container from "../Atoms/Container";
import Link from "../Atoms/Link";
import Wrapper from "../Atoms/Wrapper";
import SearchForm from "../Molecules/SearchForm";
import { IPrimaryNavProps } from "../Templates/Layout";
import * as token from "../tokens";

export interface IHeaderProps extends IPrimaryNavProps {
  siteTitle: string;
}

const MainNav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  overflow-x: auto;

  li {
    a {
      color: ${token.ETEXT_COLOUR.ON_SURFACE};
      display: block;
      padding: ${token.ESIZE.SINGLE};
      text-decoration: none;
      border-radius: ${token.EBORDERRADIUS.MEDIUM};

      &.active {
        background-color: ${token.EBACKGROUND_COLOUR.SURFACE_ALT};
      }
      &:hover,
      &:active,
      &:focus {
        background-color: ${token.EBACKGROUND_COLOUR.SURFACE};
      }
    }
  }
`;

const HeaderContainer = styled(Container)`
  overflow-x: hidden;

  @media (min-width: ${token.EBREAKPOINT.MEDIUM}) {
    display: flex;
    align-items: center;

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

const SiteTitle = styled(Link)`
  font-family: serpentine;
  font-size: ${token.ESIZE.SINGLEPLUSHALF};
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  text-shadow: -4px 0 blue, 0 4px blue, 4px 0 blue, 0 -4px blue;
  display: flex;
  justify-content: center;

  @media (min-width: ${token.EBREAKPOINT.MEDIUM}) {
    font-size: ${token.ESIZE.DOUBLE};
  }
`;

const Header: FC<IHeaderProps> = ({ primaryNav, siteTitle }) => (
  <Wrapper>
    <HeaderContainer>
      <SiteTitle noUnderline={true} to={withPrefix("/")}>
        {siteTitle}
      </SiteTitle>
      <MainNav>
        {primaryNav ? primaryNav.edges.map(item => NavItem(item)) : null}
        <li>
          <Link to="/post" activeClassName="active">
            News
          </Link>
        </li>
      </MainNav>
      <SearchForm />
    </HeaderContainer>
  </Wrapper>
);

export default Header;
