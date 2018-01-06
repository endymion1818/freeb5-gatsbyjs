import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import '../global-styles.js'

const Container = styled.section`
  padding: 2em;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  min-height: 80vh;

  @media (min-width: 768px) {
    display: flex;
  }
`;
const Main = styled.main`
  background: rgba(255, 255, 255, 0.75);
  color: black;
  padding: 15px;
  border-radius: 15px;

  @media (min-width: 768px) {
    flex: 2;
  }
`;
const Aside = styled.main`
  @media (min-width: 768px) {
    flex: 1;
  }
`;
const TextLink = styled(Link)`
  color: #428bca;
`;
export default ({ data }) =>
  <Container>
    <Main>
      <h1>Babylon 5 Movie News</h1>
      <h2>Yes, the movie is still happening, here's the latest:</h2>
      <p>in 2017 we heard that <TextLink to="/post/movie-reboot-wb/">WB is not currently interested in promoting Babylon 5.</TextLink></p>
      <p>Prior to that the news was that <TextLink to="/post/babylon-5-movie-still-planned/">the movie is still planned, under the guise of creator Joe Straczynski's StudioJMS.</TextLink></p>
      <p>Originally, we heard that Straczynski was planning to make a movie at SDCC, which fan <TextLink to="/post/b5-movie-news-announcement-transcript/">Jan transcribed and posted on JMSNews</TextLink></p>
    </Main>
    <Aside>
    </Aside>
  </Container>
  export const movieNewsQuery = graphql`
    query movieNewsQuery {
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
