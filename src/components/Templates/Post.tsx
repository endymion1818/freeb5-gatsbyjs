import React, {FC} from 'react'
import {graphql} from 'gatsby'
import Layout from './Layout'
import { Helmet } from 'react-helmet'

interface IPostTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

export const frontmatter = {

}
 
const PostTemplate: FC<IPostTemplateProps> = ({data}) => {
    const {html} = data.markdownRemark
    return (
    <Layout>
        <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content="#FreeBabylon5"/>
        </Helmet>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
);}
 
export default PostTemplate

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        type
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`