import React from "react"
import Link from "gatsby-link"
import {Helmet} from "react-helmet"
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
	background: rgba(255, 255, 255, 0.75);
	color: black;
	padding: 15px;
	border-radius: 15px;

  @media (min-width: 768px) {
    flex: 2;
  }
`;
const Aside = styled.aside`
  @media (min-width: 768px) {
    flex: 1;
  }
`;
const Header = styled.header`
	background-color: rgba(255,255,255,0.2);
`;
const HeaderContainer = Container.extend`
	padding: 0.2em;
	text-align: center;
	display: flex;
	flex-direction: column;
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
	&.active {
		background-color: #daaf09;
	}

  &:last-child {
    background-color: #BF0B12;
    color: white;

    &:hover,
    &:active,
    &:focus {
      background-color: #ad1b21;
    }
  }
`;
const SiteTitle = styled(Link)`
  font-size: 22px;
  font-family: 'SerpentineMedium', sans-serif;
	text-transform: uppercase;
  text-decoration: none;
	color: white;
  text-shadow: -4px 0 blue, 0 4px blue, 4px 0 blue, 0 -4px blue;
  
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export default ({ children, data }) =>
  <Wrapper>
	<Helmet>
		<meta charSet="utf-8" />
		<title>{data.site.siteMetadata.title}</title>
		<link rel="canonical" href="https://freebabylon5.com" />
	</Helmet>
  <Header>
    <HeaderContainer>
			<SiteTitle to={`/`}>
				{data.site.siteMetadata.title}
			</SiteTitle>
			<Navbar>
				<StyledLink activeClassName="active" to={`/about/`}>
					About
				</StyledLink>
				<StyledLink activeClassName="active" to={`/news-room/`}>
					News
				</StyledLink>
				<StyledLink activeClassName="active" to={`/jumppoint/`}>
					Links
				</StyledLink>
				<StyledLink activeClassName="active" to={`/where-to-watch/`}>
					Watch
				</StyledLink>
			</Navbar>
		</HeaderContainer>
  </Header>
    {children()}
    <Footer>
    <NavbarFooter>
      <StyledLink activeClassName="active" to={`/about/`}>
        About
      </StyledLink>
      <StyledLink activeClassName="active" to={`/news-room/`}>
        News
      </StyledLink>
      <StyledLink activeClassName="active" to={`/jumppoint/`}>
        Links
      </StyledLink>
			<StyledLink activeClassName="active" to={`/where-to-watch/`}>
        Watch
      </StyledLink>
    </NavbarFooter>
    <div>
		<br/>
		<SiteTitle to={`/`}>
      {data.site.siteMetadata.title}
    </SiteTitle>
      <p>All content © the respective copyright owners.</p>

      <p>Babylon 5, characters, names, and all related indicia are trademarks of Warner Bros. Entertainment, Inc. ©1994-2013 All Rights Reserved.</p>

      <p>Contact: <a style={{ color: '#428bca' }} href="mailto:freebabylon5@aol.com">freebabylon5@aol.com</a></p>

      <p>Website by <a style={{ color: '#428bca' }} href="https://deliciousreverie.co.uk">Benjamin Read</a></p>
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
