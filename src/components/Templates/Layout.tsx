import { Helmet } from "react-helmet"
import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content="FreeBabylon5"/>
        </Helmet>
        <div className="layout">
          {children}
        </div>
      </>
    )}
  />
)