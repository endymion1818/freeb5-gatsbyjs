import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Templates/Layout'

export interface IAboutPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export const frontmatter = {
  title: 'About',
  path: 'about',
  description: 'Welcome to Free Babylon 5 campaign site.',
  MainNavOrder: 2,
  secondaryNavMenu: 'About',
  secondaryNavOrder: 2,
}

const AboutPage: FC<IAboutPageProps> = ({ data }) => (
  <Layout>
    <Helmet>
      <title>
        {frontmatter.title} &ndash; {data.site.siteMetadata.title}
      </title>
      <meta name="description" content={frontmatter.description} />
    </Helmet>
    <h1>About</h1>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
