import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import '../global-styles.js'

import pgbg from './pg-bckg.png';

const Wrapper = styled.section`
	background: black;
  background-image: url(${pgbg});
  font-family: sans-serif;
`;

const Container = styled.section`
  padding: 2em;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`;
const Main = styled.main`
  @media (min-width: 768px) {
    flex: 2;
  }
`;
const Aside = styled.aside`
  @media (min-width: 768px) {
    flex: 1;
  }
`;
const Header = Container.extend`
  display: flex;
  flex-direction: column;
	background-color: rgba(255,255,255,0.2);
	padding: 1em;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
const Footer = Container.extend`

	@media (min-width: 768px) {
		display: flex;

		> * {
			flex: 1;
			margin: 15px;
		}
	}
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const NavbarFooter = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  padding: 15px;
  text-align: center;
  text-decoration: none;
  border-radius: 15px;
  color: white;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    background-color: gray;
  }

  &:last-child {
    background-color: #BF0B12;
    color: black;

    &:hover,
    &:active,
    &:focus {
      background-color: #ad1b21;
    }
  }
`;
const SiteTitle = styled(Link)`
  font-size: 32px;
  font-family: 'SerpentineMedium', sans-serif;
	text-transform: uppercase;
  text-decoration: none;
	color: white;
	text-shadow: -4px 0 blue, 0 4px blue, 4px 0 blue, 0 -4px blue;
`;

export default ({ children, data }) =>
  <Wrapper>
  <Header>
    <SiteTitle to={`/`}>
      {data.site.siteMetadata.title}
    </SiteTitle>
  <Navbar>
    <StyledLink to={`/about/`}>
      About
    </StyledLink>
    <StyledLink to={`/where-to-watch/`}>
      Watch
    </StyledLink>
    <StyledLink to={`/news-room/`}>
      News
    </StyledLink>
    <StyledLink to={`/jumppoint/`}>
      Community
    </StyledLink>
  </Navbar>
  </Header>
    {children()}
    <Footer>
    <NavbarFooter>
      <StyledLink to={`/about/`}>
        About
      </StyledLink>
      <StyledLink to={`/where-to-watch/`}>
        Watch
      </StyledLink>
      <StyledLink to={`/news-room/`}>
        News
      </StyledLink>
      <StyledLink to={`/jumppoint/`}>
        Community
      </StyledLink>
    </NavbarFooter>
    <div>
		<SiteTitle to={`/`}>
      {data.site.siteMetadata.title}
    </SiteTitle>
      <p>All content © the respective copyright owners.</p>

      <p>Babylon 5, characters, names, and all related indicia are trademarks of Warner Bros. Entertainment, Inc. ©1994-2013 All Rights Reserved.</p>

      <p>Contact: freebabylon5@aol.com</p>

      <p>Website by Benjamin Read</p>
    </div>
    </Footer>
  </Wrapper>

  export const query = graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
