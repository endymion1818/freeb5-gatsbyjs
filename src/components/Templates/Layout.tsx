import { Helmet } from "react-helmet"
import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import serpentine from '../../assets/serpentine.woff2'
interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const GlobalStyle = createGlobalStyle`
  @font-face {
     font-family: 'SerpentineMedium';
     src: url(${serpentine});
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 
  {
    font-family: SerpentineMedium;
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
export default Layout