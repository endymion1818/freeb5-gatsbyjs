import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'
import serpentine from '../../assets/serpentine.woff2'

interface IStaticQueryProps {
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
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
  }
  body {
    margin: 0;
    font-family: system;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
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
    render={(data: IStaticQueryProps) => (
      <>
        <GlobalStyle />
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content="FreeBabylon5" />
        </Helmet>
        <main className="main">{children}</main>
      </>
    )}
  />
)
export default Layout
