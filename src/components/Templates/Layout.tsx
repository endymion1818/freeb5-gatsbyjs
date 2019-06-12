import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import serpentine from '../../assets/serpentine.woff2'
import ErrorBoundary from '../Molecules/ErrorBoundary'
import Footer from '../Organisms/Footer'
import Header from '../Organisms/Header'

export interface ISiteMetaProps {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

export interface IStaticQueryProps extends ISiteMetaProps {}

const AccessibilityMainContentSkipLink = styled.a`
  height: 1px;
  width: 1px;
  position: absolute;
  top: -10px;
  overflow: hidden;
`

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
  #gatsby-noscript {
    display:none;
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
      <ErrorBoundary>
        <GlobalStyle />
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content="FreeBabylon5" />
          <script type="application/ld+json">
            {`
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "#FreeBabylon5",
              "url": "https://www.freebabylon5.com",
              "sameAs": [
                "https://www.facebook.com/freebabylon5",
              ]
            `}
          </script>
        </Helmet>
        <AccessibilityMainContentSkipLink href="#main">
          Skip to main content
        </AccessibilityMainContentSkipLink>
        <Header siteTitle={data.site.siteMetadata.title} primaryNav={data.primaryNav} />
        <main id="main">{children}</main>
        <Footer
          siteTitle={data.site.siteMetadata.title}
          primaryNav={data.primaryNav}
          secondaryNav={data.secondaryNav}
        />
      </ErrorBoundary>
    )}
  />
)
export default Layout
