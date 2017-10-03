import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import homemasthead from './homemasthead.jpg';
import jumppoint from './jumppoint.jpg';
import charachters from '../layouts/pg-bckg.png';

const Container = styled.section`
  padding: 2em;
  color: white;
`;
const postContainer = Container.extend`

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
const Heading = styled.h2`
  font-weight: bold;
  font-family: 'SerpentineMedium', sans-serif;

  @media (min-width: 768px) {
    text-align: center;
  }
`;
const WelcomeHeading = styled.h1`
  font-weight: bold;
  font-size: 1.5em;
  font-family: 'SerpentineMedium', sans-serif;

  @media (min-width: 768px) {
    text-align: center;
  }
`;

const Banner = styled.div`
  height: 100vh;
  padding: 10px;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.5);
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    text-align: center;
    padding: 100px;
  }
`;
const BannerMasthead = Banner.extend`
  background: url(${homemasthead}) no-repeat center center;
  background-size: 100%;
`;
const BannerJumppoint = Banner.extend`
  background: url(${jumppoint}) no-repeat center center;
  background-size: 100%;
`;
const BannerAbout = Banner.extend`
  background: url(${charachters}) no-repeat center center;
  background-size: 100%;
`;
const StyledLink = styled(Link)`
  padding: 15px;
  text-align: center;
  text-decoration: none;
  border-radius: 15px;
  color: black;
  background-color: white;
  transition: all 0.25s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    background-color: gray;
  }
`;
const Alert = styled.div`
  background-color: #ebccd1;
  border: 1px solid #ebccd1;
  border-radius: 4px;
  padding: 15px;
  color: #a94442;
`;
const Article = styled.article`
  color: white;
  padding-bottom: 20px;

  > a {
    color: white;
    text-decoration: none;
  }
`;
export default ({ data }) => {
  return (
    <div>
      <BannerMasthead>
      <Container>
        <WelcomeHeading>
          Babylon 5 is a game-changing, ground breaking, emmy-award winning TV series that is in danger of becoming lost and forgotten.
        </WelcomeHeading>
        <p>
          We are not going to let that happen.
        </p>

        <p>
          Please <a title="Join Us!" href="/join/"><strong>Join us</strong></a> and help #FreeBabylon5
        </p>

        <p>
        </p>
      </Container>
    </BannerMasthead>
    <postContainer>
      <h2>
        Recent Posts
      </h2>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <Article>
        <Link to={node.fields.slug}>
          <h3>
            {node.frontmatter.title}{" "}
          </h3>
          </Link>
          <span color="#BBB">— {node.frontmatter.date}</span>
          <p>
            {node.excerpt}
          </p>
          <br/>
          <StyledLink to={node.fields.slug}>View post >></StyledLink>
        </Article>
      )}
      </postContainer>
      <Aside>
      &nbsp;
      </Aside>
      <Container>
      <Heading>Babylon 5 Now Streaming in the US!</Heading>
      <p>This is the day we have been fighting for! Babylon 5 is now showing in the US on Go90. The #FreeBabylon5 campaign even got a mention in their promo advert which you can watch here.</p>

      <p>Thank you Go90 for fulfilling our primary campaign goal and streaming Babylon 5 in the US.</p>

      <a href="https://go90.com/babylon5">Watch Babylon 5 Now — for Free!  (US Only)</a>
      </Container>
      <BannerJumppoint>
      <Container>
        <Heading>New to Babylon 5?</Heading>
        <p>Babylon 5 has something for everyone. The story focuses on the relationships and entwined destinies of a multitude of charachters. Some find love, some face tragedy.</p>

        <p>There are epic plotlines, rich alien cultures, and bucket loads of space battles.</p>

        <a href="https://go90.com/babylon5">Where to Watch</a>
      </Container>
      </BannerJumppoint>
      <Container>
        <Alert>Looking for news about the Babylon 5 Movie? You'll find that here »</Alert>
      </Container>
      <BannerAbout>
        <Container>
          <Heading>Why is Babylon 5 Important?</Heading>

          <p>Babylon 5 was a watershed moment for television.</p>

          <p>It was the first sci-fi show to feature story arcs that continued past 2-hour specials. It was the first to use only computer-generated spaceship effects. Its story inspired a generation.</p>

          <p>Without Babylon 5, there would probably be no Battlestar Galactica, no Firefly, and no Marvel Cinematic Universe.</p>

          <p>But it's rarely on air anywhere and isn't shown on major internet TV services.</p>

          <p>You can help change that.</p>

          <a href="/about/">About the Campaign</a>
        </Container>
      </BannerAbout>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: DESC}
        limit: 5
      ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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
