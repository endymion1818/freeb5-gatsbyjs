import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import font from "./serpentine.woff2"
import bgimg from "./pg-bckg.png"

document.body.style.margin = "0";

const Wrapper = styled.section`
	background: black;
`;

const Container = styled.section`
  padding: 2em;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`;
const Header = Container.extend`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
const Footer = Container.extend``;

const Navbar = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const StyledLink = styled(Link)`
  padding: 15px;
  text-align: center;
  text-decoration: none;
  border-radius: 15px;

  &:last-child {
    background-color: #BF0B12;
    color: black;
  }
`;
const SiteTitle = styled.div`
  text-align: center;
  font-size: 32px;
`;

export default ({ children, data }) =>
  <Wrapper>
  <Header>
  <Link to={`/`}>
    <SiteTitle>
      {data.site.siteMetadata.title}
    </SiteTitle>
  </Link>
  <Navbar>
    <StyledLink className="navlink" to={`/about/`}>
      About
    </StyledLink>
    <StyledLink className="navlink" to={`/where-to-watch/`}>
      Watch
    </StyledLink>
    <StyledLink className="navlink" to={`/news-room/`}>
      News
    </StyledLink>
    <StyledLink className="navlink" to={`/jumppoint/`}>
      Community
    </StyledLink>
  </Navbar>
  </Header>
    {children()}
    <Footer>
    <Navbar>
      <Link className="navlink" to={`/about/`}>
        About
      </Link>
      <Link className="navlink" to={`/where-to-watch/`}>
        Watch
      </Link>
      <Link className="navlink" to={`/news-room/`}>
        News
      </Link>
      <Link className="navlink" to={`/jumppoint/`}>
        Community
      </Link>
    </Navbar>
    <div>
      <Link to={`/`}>
        <h3>
          {data.site.siteMetadata.title}
        </h3>
      </Link>
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
