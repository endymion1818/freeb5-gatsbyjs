import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import '../global-styles.js'

const Container = styled.section`
  padding: 2em;
  max-width: 1200px;
  margin: 0 auto;
  color: white;

  @media (min-width: 768px) {
    display: flex;
  }
`;
const Main = styled.main`
  @media (min-width: 768px) {
    flex: 2;
  }
`;
const Aside = styled.aside`
  @media (min-width: 768px) {
    flex: 1;
  }
`;
const StyledLink = styled(Link)`
  padding: 15px;
  text-align: center;
  text-decoration: none;
  border-radius: 15px;
  color: white;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    background-color: gray;
  }
`;
export default ({ data }) => {
  return (
    <Container>
      <Main>
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
            <h3>
              {node.frontmatter.title}{" "}
              <span color="#BBB">— {node.frontmatter.date}</span>
            </h3>
            </Link>
            <p>
              {node.excerpt}
            </p>
            <br/>
            <StyledLink to={node.fields.slug}>View post >></StyledLink>
          </article>
        )}
      </Main>
      <Aside>
        Search, Categories and Tags
      </Aside>
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
