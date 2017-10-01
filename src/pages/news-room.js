import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import '../global-styles.js'

const Container = styled.section`
  padding: 2em;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
`;

export default ({ data }) => {
  return (
    <Container>
      <h1 display={"inline-block"} borderBottom={"1px solid"}>
        All Articles:
      </h1>
      <h4>
        {data.allMarkdownRemark.totalCount} Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <article>
        <Link
          to={node.fields.slug}
          css={{ textDecoration: `none`, color: `inherit` }}
        >
          <span>{node.frontmatter.type}</span>
          <h3>
            {node.frontmatter.title}{" "}
            <span color="#BBB">— {node.frontmatter.date}</span>
          </h3>
          <p>
            {node.excerpt}
          </p>
          </Link>
        </article>
      )}
    </Container>
  )
}

export const query = graphql`
  query blogQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            type
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
