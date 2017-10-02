import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Container = styled.section`
  padding: 2em;
  color: white;
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
  min-height: 80px;
  padding: 100px;

  @media (min-width: 768px) {
    text-align: center;
  }
`;
const BannerMasthead = Banner.extend`
  background-image: url(./homemasthead.jpg);
`;
const BannerJumppoint = Banner.extend`
  background-image: url(./jumppoint.jpg);
`;
const BannerAbout = Banner.extend`
  background-image: url(./charachters.jpg);
`;

const Alert = styled.div`
  background-color: #ebccd1;
  border: 1px solid #ebccd1;
  border-radius: 4px;
  padding: 15px;
  color: #a94442;

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
    <Container>
      <h2>
        Recent Posts
      </h2>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div>
        <Link>
          <h3>
            {node.frontmatter.title}{" "}
            <span color="#BBB">— {node.frontmatter.date}</span>
          </h3>
          <p>
            {node.excerpt}
          </p>
          </Link>
        </div>
      )}
      </Container>
      <Container>
      <Heading>Babylon 5 Now Streaming in the US!</Heading>
      <p>This is the day we have been fighting for! Babylon 5 is now showing in the US on Go90. The #FreeBabylon5 campaign even got a mention in their promo advert which you can watch here.</p>

      <p>Thank you Go90 for fulfilling our primary campaign goal and streaming Babylon 5 in the US.</p>

      <a href="https://go90.com/babylon5">Watch Babylon 5 Now — for Free!  (US Only)</a>
      </Container>
      <Container>
      <BannerJumppoint>
        <Heading>New to Babylon 5?</Heading>
        <p>Babylon 5 has something for everyone. The story focuses on the relationships and entwined destinies of a multitude of charachters. Some find love, some face tragedy.</p>

        <p>There are epic plotlines, rich alien cultures, and bucket loads of space battles.</p>

        <a href="https://go90.com/babylon5">Where to Watch</a>
      </BannerJumppoint>
      </Container>
      <Container>
        <Alert>Looking for news about the Babylon 5 Movie? You'll find that here »</Alert>
      </Container>
      <Container>
        <BannerAbout>
          <Heading>Why is Babylon 5 Important?</Heading>

          <p>Babylon 5 was a watershed moment for television.</p>

          <p>It was the first sci-fi show to feature story arcs that continued past 2-hour specials. It was the first to use only computer-generated spaceship effects. Its story inspired a generation.</p>

          <p>Without Babylon 5, there would probably be no Battlestar Galactica, no Firefly, and no Marvel Cinematic Universe.</p>

          <p>But it's rarely on air anywhere and isn't shown on major internet TV services.</p>

          <p>You can help change that.</p>

          <a href="/about/">About the Campaign</a>
        </BannerAbout>
      </Container>
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
