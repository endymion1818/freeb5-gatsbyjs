import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import font from "./serpentine.woff2"
import bgimg from "./pg-bckg.png"


export default ({ children, data }) =>
  <div>
  <header>
  <Link to={`/`}>
    <h3>
      {data.site.siteMetadata.title}
    </h3>
  </Link>
  <div>
    <Link to={`/about/`}>
      About
    </Link>
    <Link to={`/where-to-watch/`}>
      Watch
    </Link>
    <Link to={`/news-room/`}>
      News
    </Link>
    <Link to={`/jumppoint/`}>
      Community
    </Link>
  </div>
  </header>
    {children()}
    <footer>
    <div>
      <Link to={`/about/`}>
        About
      </Link>
      <Link to={`/where-to-watch/`}>
        Watch
      </Link>
      <Link to={`/news-room/`}>
        News
      </Link>
      <Link to={`/jumppoint/`}>
        Community
      </Link>
    </div>
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
    </footer>
  </div>

  export const query = graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
