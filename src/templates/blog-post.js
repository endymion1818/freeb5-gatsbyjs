import React from "react"
import styled from "styled-components"
import '../global-styles.js'

const Container = styled.section`
  padding: 2em;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`;

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Container>
      <h1>
        {post.frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        type
      }
    }
  }
`
