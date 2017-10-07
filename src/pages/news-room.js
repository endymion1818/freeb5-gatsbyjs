import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import '../global-styles.js'

import Categories from '../components/categories'

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
const TextLink = styled(Link)`
  color: #428bca;
`;
const ArticleTitle = styled.h3`
  font-family: 'SerpentineMedium', sans-serif;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  color: white;

  &:hover,
  &:active,
  &:focus {
    color: gray;
  }
`;
const ButtonLink = styled(Link)`
  padding: 15px;
  text-align: center;
  text-decoration: none;
  border-radius: 15px;
  color: white;
  background-color: black;
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
          All Articles ({data.allMarkdownRemark.totalCount}):
        </h1>
        {data.allMarkdownRemark.edges.map(({ node }) =>
          <article>
          <StyledLink to={node.fields.slug}>
            <ArticleTitle>
              {node.frontmatter.title}{" "}
            </ArticleTitle>
            </StyledLink>
            <span color="#BBB">{node.frontmatter.date}</span>
            <p>
              {node.excerpt}
            </p>
            <br/>
            <ButtonLink to={node.fields.slug}>View post >></ButtonLink>
            <br/><br/>
            <hr clear="both"/>
          </article>
        )}
      </Main>
      <Aside>

      </Aside>
    </Container>
  )
}

export const blogQuery = graphql`
  query blogQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            type
            categories
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
// <Categories list={node.frontmatter.categories || []} />
