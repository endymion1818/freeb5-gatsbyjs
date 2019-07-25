import { graphql } from "gatsby";
import React, { FC } from "react";
import Helmet from "react-helmet";

import Container from "../components/Atoms/Container";
import Link from "../components/Atoms/Link";
import Wrapper from "../components/Atoms/Wrapper";
import Layout from "../components/Templates/Layout";
import * as token from "../components/tokens";

import charachters from "../assets/charachters.jpg";
import homeMasthead from "../assets/homemasthead.jpg";
import jumppoint from "../assets/jumppoint.jpg";
import CalloutBox from "../components/Atoms/CalloutBox";
import Row from "../components/Atoms/Row";

export interface IIndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export const frontmatter = {
  title: "Home",
  path: "/",
  description: "Welcome to Free Babylon 5 campaign site.",
  MainNavOrder: 1,
  secondaryNavMenu: "About",
  secondaryNavOrder: 1
};

const IndexPage: FC<IIndexPageProps> = ({ data }) => (
  <Layout>
    <Helmet>
      <title>
        {frontmatter.title} &ndash; {data.site.siteMetadata.title}
      </title>
      <meta name="description" content={frontmatter.description} />
    </Helmet>
    <Wrapper backgroundImage={homeMasthead} minHeight="40rem">
      <Container>
        <Row size={1}>
          <CalloutBox textAlign={token.ETEXTALIGN.CENTER}>
            <h1>
              Babylon 5 is a game-changing, ground breaking, emmy-award winning
              TV series that is in danger of becoming lost and forgotten
            </h1>
            <p>We are not going to let that happen.</p>
            <p>Please Join us and help #FreeBabylon5</p>
          </CalloutBox>
        </Row>
      </Container>
    </Wrapper>
    <Wrapper>
      <Container>
        <Row size={1}>
          <CalloutBox textAlign={token.ETEXTALIGN.CENTER}>
            <h2>Babylon 5 on Amazon Prime</h2>
            <p>
              Shortly after hearing that 2 shows in the US and UK respectively
              had stopped showing the series, we heard that Amazon Prime have
              begun showing the series on their streaming channel, Prime Video!
            </p>
            <p>
              <Link to="https://www.primevideo.com/">Watch Babylon 5 Now!</Link>
            </p>
          </CalloutBox>
        </Row>
      </Container>
    </Wrapper>
    <Wrapper>
      <Container>
        <Row size={1}>
          <CalloutBox
            textAlign={token.ETEXTALIGN.CENTER}
            backgroundColour={token.EBACKGROUND_COLOUR.ALERT}
            textColour={token.ETEXT_COLOUR.ON_ALERT}
          >
            <h2>Babylon 5 Movie Planned</h2>
            <p>Show creator JMS still plans to make a Babylon 5 movie.</p>
            <p>
              <Link to="/movie-news">Click here for more information.</Link>
            </p>
          </CalloutBox>
        </Row>
      </Container>
    </Wrapper>
    <Wrapper backgroundImage={jumppoint} minHeight="40rem">
      <Container>
        <Row size={1}>
          <CalloutBox textAlign={token.ETEXTALIGN.CENTER}>
            <h2>New to Babylon 5?</h2>
            <p>
              Babylon 5 has something for everyone. The story focuses on the
              relationships and entwined destinies of a multitude of
              charachters. Some find love, some face tragedy.
            </p>
            <p>
              There are epic plotlines, rich alien cultures, and bucket loads of
              space battles.
            </p>
            <p>
              <Link isButton to="/where-to-watch">
                Where to watch
              </Link>
            </p>
          </CalloutBox>
        </Row>
      </Container>
    </Wrapper>
    <Wrapper>
      <Container>
        <Row size={1}>
          <CalloutBox textAlign={token.ETEXTALIGN.CENTER}>
            <h2>Babylon 5 on Amazon Prime</h2>
            <p>
              Shortly after hearing that 2 shows in the US and UK respectively
              had stopped showing the series, we heard that Amazon Prime have
              begun showing the series on their streaming channel, Prime Video!
            </p>
            <p>
              <Link to="https://www.primevideo.com/">Watch Babylon 5 Now!</Link>
            </p>
          </CalloutBox>
        </Row>
      </Container>
    </Wrapper>
    <Wrapper backgroundImage={charachters} minHeight="40rem">
      <Container>
        <Row size={1}>
          <CalloutBox textAlign={token.ETEXTALIGN.CENTER}>
            <h2>Why is Babylon 5 Important?</h2>
            <p>Babylon 5 was a watershed moment for television.</p>
            <p>
              It was the first sci-fi show to feature story arcs that continued
              past 2-hour specials. It was the first to use only
              computer-generated spaceship effects. Its story inspired a
              generation.
            </p>
            <p>
              Without Babylon 5, there would probably be no Battlestar
              Galactica, no Firefly, and no Marvel Cinematic Universe.
            </p>
            <p>
              But it's rarely on air anywhere and isn't shown on major internet
              TV services.
            </p>
            <p>You can help change that.</p>
            <Link isButton to="/about">
              About the Campaign
            </Link>
          </CalloutBox>
        </Row>
      </Container>
    </Wrapper>
    <Wrapper>
      <Container>
        <Row size={1}>
          <CalloutBox
            textAlign={token.ETEXTALIGN.CENTER}
            backgroundColour={token.EBACKGROUND_COLOUR.PRIMARY}
            textColour={token.ETEXT_COLOUR.ON_PRIMARY}
          >
            <h2>Babylon 5 in HD?</h2>
            <p>
              If you're a fan of the show, it's probably likely that you would
              love to Watch the show in gorgeous hi-definition. This sadly is
              more difficult that it might seem. A while ago, a technical
              explanation came to light ...
            </p>
            <p>
              <Link to="/post/theres-no-bluray-edition">
                Click to find out why there's no hi definition edition
              </Link>
            </p>
          </CalloutBox>
        </Row>
      </Container>
    </Wrapper>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
