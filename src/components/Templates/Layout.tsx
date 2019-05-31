import { Helmet } from "react-helmet"
import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    background-color: grey;
  }
`



const Layout: React.SFC = ({ children }) => (
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
    render={(data: StaticQueryProps) => (
      <>
        <GlobalStyle />
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