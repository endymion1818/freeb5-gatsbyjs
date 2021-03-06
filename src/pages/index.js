import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

import homemasthead from './homemasthead.jpg';
import jumppoint from './jumppoint.jpg';
import charachters from './charachters.jpg';

const Container = styled.section`
  padding: 2em;
  color: white;
  max-width: 1200px;
  margin: 0 auto;
`;
const PostContainer = styled.div`

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;

    > article {
      margin: 10px;
    }
  }
`;
const Article = styled.article`
  color: white;
  padding-bottom: 20px;

  > a {
    color: white;
    text-decoration: none;
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
  position: relative;

  @media (min-width: 768px) {
    > section {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      display: flex;
      align-items: center;
      justify-content: center;

      text-align: center;
      text-shadow: 2px 2px 1px rgba(0,0,0,0.8);
    }
  }
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const TextLink = styled(Link)`
  color: #428bca;
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
const StyledLinkRed = StyledLink.extend`
  background-color: #BF0B12;
  color: white;

  &:hover,
  &:active,
  &:focus {
    background-color: #a94442;
  }
`;
const StyledLinkBlue = StyledLink.extend`
  background-color: #0d3e8e;
  color: white;

  &:hover,
  &:active,
  &:focus {
    background-color: #0d168e;
  }
`;
const StyledLinkBlack = StyledLink.extend`
  background-color: black;
  color: white;

  &:hover,
  &:active,
  &:focus {
    background-color: #292f33;
  }
`;
const Alert = styled.div`
  background-color: #ebccd1;
  border: 1px solid #ebccd1;
  border-radius: 4px;
  padding: 15px;
  color: #821716;
  h3 {
    margin-top: 0;
  }
  a {
    color: #a94442;
  }
`;
const AlertBlue = styled.div`
  background-color: #5797d6;
  border: 1px solid #5797d6;
  border-radius: 4px;
  padding: 15px;
  color: black;

 a {
   color: black;
 }
 h3 {
   margin-top: 0;
  }
  `;
const BannerContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 15px;
  background-color: rgba(0,0,0,0.5);
`;
export default ({ data }) => {
  return (
    <div>
      <Banner>
      <Container>
        <BannerContent>
          <WelcomeHeading>
            Babylon 5 is a game-changing, ground breaking, emmy-award winning TV series that is in danger of becoming lost and forgotten.
          </WelcomeHeading>
          <p>
            We are not going to let that happen.
          </p>
          <p>
            Please <StyledLinkRed title="Join Us!" to="/join/"><strong>Join us</strong></StyledLinkRed> and help #FreeBabylon5
          </p>
        </BannerContent>
      </Container>
      <img src={homemasthead} alt="Babylon 5 space station" width="100%"/>
    </Banner>
    <Container style={{ textAlign: 'center' }}>
       <BannerContent>
         <Heading>Babylon 5 on Amazon Prime</Heading>
         <p>Shortly after hearing that 2 shows in the US and UK respectively had stopped showing the series, we heard that Amazon Prime have begun showing the series on their streaming channel, Prime Video!</p>
         <br/>
         <a className="bodylink" href="https://www.primevideo.com/">Watch Babylon 5 Now </a>
       </BannerContent>
      </Container>
    <Container>
    <h2>
      Recent Posts
    </h2>
    <PostContainer>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <Article>
        <Link to={node.fields.slug}>
          <h3>
            {node.frontmatter.title}{" "}
          </h3>
          </Link>
          <span color="#BBB">Published on {node.frontmatter.date}</span>
          <p>
            {node.excerpt}
          </p>
          <br/>
          <StyledLinkBlack to={node.fields.slug}>View post</StyledLinkBlack>
        </Article>
      )}
      </PostContainer>
      </Container>
      <Banner>
      <Container>
        <BannerContent>
          <Heading>New to Babylon 5?</Heading>
          <p>Babylon 5 has something for everyone. The story focuses on the relationships and entwined destinies of a multitude of charachters. Some find love, some face tragedy.</p>

          <p>There are epic plotlines, rich alien cultures, and bucket loads of space battles.</p>
          <br/>
          <StyledLinkBlue to="/where-to-watch/">Where to Watch</StyledLinkBlue>
        </BannerContent>
      </Container>
      <img src={jumppoint} alt="Babylon 5 space ships exiting a hyperspace vortex" width="100%"/>
      </Banner>
     <Container style={{ textAlign: 'center' }}>
        <Alert>
          <h3>Babylon 5 Movie Planned</h3>
          <p>Show creator JMS still plans to make a Babylon 5 movie. </p>
          <Link to="/movie-news/">Click here for more information.</Link>
        </Alert>
      </Container>
      <Banner>
        <Container>
          <BannerContent>
            <Heading>Why is Babylon 5 Important?</Heading>

            <p>Babylon 5 was a watershed moment for television.</p>

            <p>It was the first sci-fi show to feature story arcs that continued past 2-hour specials. It was the first to use only computer-generated spaceship effects. Its story inspired a generation.</p>

            <p>Without Babylon 5, there would probably be no Battlestar Galactica, no Firefly, and no Marvel Cinematic Universe.</p>

            <p>But it's rarely on air anywhere and isn't shown on major internet TV services.</p>

            <p>You can help change that.</p>
            <br/>
            <StyledLinkBlack to="/about/">About the Campaign</StyledLinkBlack>
          </BannerContent>
        </Container>
        <img src={charachters} alt="Some of Babylon 5's principal charachters including Commander Sheridan, Doctor Franklin and G'Kar" width="100%"/>
      </Banner>
     <Container style={{ textAlign: 'center' }}>
         <AlertBlue>
           <h3>Babylon 5 in HD?</h3>
           <p>If you're a fan of the show, it's probably likely that you would love to  Watch the show in gorgeous hi-definition. This sadly is more difficult that it might seem. A while ago, a technical explanation came to light ...</p>
           <Link to="/post/theres-no-blu-ray-edition/">Click here for more information.</Link>
         </AlertBlue>
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
