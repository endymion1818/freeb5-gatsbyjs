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
    <Wrapper backgroundImage={homeMasthead} minHeight="20rem">
      <Container>
        <Row size={1}>
          <CalloutBox textAlign={token.ETEXTALIGN.CENTER}>
            <h1>Home</h1>
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
    <Wrapper backgroundImage={charachters} minHeight="20rem">
      <Container>
        <Row size={1}>
          <CalloutBox textAlign={token.ETEXTALIGN.CENTER}>
            <h1>Charachters</h1>
          </CalloutBox>
        </Row>
      </Container>
    </Wrapper>
    <Wrapper>
      <Container>
        <Row size={1}>
          <CalloutBox textAlign={token.ETEXTALIGN.CENTER}>
            <h1>Home</h1>
          </CalloutBox>
        </Row>
      </Container>
    </Wrapper>
    <Wrapper backgroundImage={jumppoint} minHeight="20rem">
      <Container>
        <Row size={1}>
          <CalloutBox textAlign={token.ETEXTALIGN.CENTER}>
            <h1>Jump point</h1>
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
