import React from "react"
import g from "glamorous"
import { css } from "glamor"
import Link from "gatsby-link"
import { rhythm } from "../utils/typography"

const linkStyle = css({ float: `right` })
const containerStyle = css({ maxWidth: `1200px`, padding: rhythm(2) })

export default ({ children, data }) =>
  <g.Div
    margin={`0 auto`}
    backgroundImage="url(./pg-bckg.png)"
  >
  <header
    className={containerStyle}
  >
  <Link to={`/`}>
    <g.H3
      marginBottom={rhythm(2)}
      display={`inline-block`}
      fontStyle={`normal`}
    >
      {data.site.siteMetadata.title}
    </g.H3>
  </Link>
  <Link className={linkStyle} to={`/about/`}>
    About
  </Link>
  <Link className={linkStyle} to={`/where-to-watch/`}>
    Watch
  </Link>
  <Link className={linkStyle} to={`/news-room/`}>
    News
  </Link>
  <Link className={linkStyle} to={`/jumppoint/`}>
    Community
  </Link>
  </header>
    {children()}
    <footer
      className={containerStyle}
    >
    <Link to={`/`}>
      <g.H3
        marginBottom={rhythm(2)}
        display={`inline-block`}
        fontStyle={`normal`}
      >
        {data.site.siteMetadata.title}
      </g.H3>
    </Link>
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
    <p>All content © the respective copyright owners.</p>

    <p>Babylon 5, characters, names, and all related indicia are trademarks of Warner Bros. Entertainment, Inc. ©1994-2013 All Rights Reserved.</p>

    <p>Contact: freebabylon5@aol.com</p>

    <p>Website by Benjamin Read</p>
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
