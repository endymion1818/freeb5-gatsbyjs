import React from "react"
import {Helmet} from "react-helmet"
import styled from "styled-components"
import '../global-styles.js'

const Container = styled.section`
  padding: 2em;
  max-width: 1200px;
  margin: 0 auto;
  color: white;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
  a {
    color: #428bca;
  }
`;
const Main = styled.main`
  min-height: 80vh;
  
  img {
    max-width: 100%;
  }
  @media (min-width: 768px) {
    flex: 2;
  }
`;
const Aside = styled.aside`
  @media (min-width: 768px) {
    flex: 1;
  }
`;
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Container>
    <Helmet title={`${post.frontmatter.title} | ${data.site.siteMetadata.title}`} />
      <Main>
        <h1>
          {post.frontmatter.title}
        </h1>
        Posted on: <span>{post.frontmatter.date}</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Main>
      <Aside>
      </Aside>
    </Container>
  )
}

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
