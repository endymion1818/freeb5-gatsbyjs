import React from "react"
import g from "glamorous"
import { css } from "glamor"
import Link from "gatsby-link"
import { rhythm } from "../utils/typography"
import font from "./serpentine.woff2"

const headerLinkStyle = css({ float: `right`, padding: rhythm(0.5) })
const footerLinkStyle = css({ display: `block`, padding: rhythm(0.75) })
const containerStyle = css({ maxWidth: `1200px`, padding: rhythm(2) })
const twoColStyle = css({ maxWidth: `1200px`, padding: rhythm(2), display: `grid`, gridTemplateColumns: `50% 50%`})

export default ({ children, data }) =>
  <g.Div
    margin={`0 auto`}
    backgroundImage="url(./pg-bckg.png)"
  >
  <header
    className={twoColStyle}
    fontFamily={font}
  >
  <Link to={`/`}>
    <g.H3
      display={`inline-block`}
      fontStyle={`normal`}
      padding={rhythm(0.5)}
    >
      {data.site.siteMetadata.title}
    </g.H3>
  </Link>
  <div>
    <Link className={headerLinkStyle} to={`/about/`}>
      About
    </Link>
    <Link className={headerLinkStyle} to={`/where-to-watch/`}>
      Watch
    </Link>
    <Link className={headerLinkStyle} to={`/news-room/`}>
      News
    </Link>
    <Link className={headerLinkStyle} to={`/jumppoint/`}>
      Community
    </Link>
  </div>
  </header>
    {children()}
    <footer
      className={twoColStyle}
    >
    <div>
      <Link className={footerLinkStyle} to={`/about/`}>
        About
      </Link>
      <Link className={footerLinkStyle} to={`/where-to-watch/`}>
        Watch
      </Link>
      <Link className={footerLinkStyle} to={`/news-room/`}>
        News
      </Link>
      <Link className={footerLinkStyle} to={`/jumppoint/`}>
        Community
      </Link>
    </div>
    <div>
      <Link to={`/`}>
        <g.H3
          marginBottom={rhythm(2)}
          display={`inline-block`}
          fontStyle={`normal`}
        >
          {data.site.siteMetadata.title}
        </g.H3>
      </Link>
      <p>All content © the respective copyright owners.</p>

      <p>Babylon 5, characters, names, and all related indicia are trademarks of Warner Bros. Entertainment, Inc. ©1994-2013 All Rights Reserved.</p>

      <p>Contact: freebabylon5@aol.com</p>

      <p>Website by Benjamin Read</p>
    </div>
    </footer>
  </g.Div>

  export const query = graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
