import { graphql } from "gatsby";
import React, { FC } from "react";
import Helmet from "react-helmet";
import Container from "../components/Atoms/Container";
import Wrapper from "../components/Atoms/Wrapper";
import Layout from "../components/Templates/Layout";

import charachters from "../assets/charachters.jpg";
import homeMasthead from "../assets/homemasthead.jpg";
import jumppoint from "../assets/jumppoint.jpg";
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
    <Wrapper backgroundImage={homeMasthead}>
      <Container>
        <Row size={1}>
          <h1>Home</h1>
        </Row>
      </Container>
    </Wrapper>
    <Wrapper>
      <Container>
        <Row size={1}>
          <h1>Home</h1>
        </Row>
      </Container>
    </Wrapper>
    <Wrapper backgroundImage={charachters}>
      <Container>
        <Row size={1}>
          <h1>Charachters</h1>
        </Row>
      </Container>
    </Wrapper>
    <Wrapper>
      <Container>
        <Row size={1}>
          <h1>Home</h1>
        </Row>
      </Container>
    </Wrapper>
    <Wrapper backgroundImage={jumppoint}>
      <Container>
        <Row size={1}>
          <h1>Jump point</h1>
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
