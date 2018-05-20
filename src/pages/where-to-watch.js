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
  background: rgba(255, 255, 255, 0.75);
  color: black;
  padding: 15px;
  border-radius: 15px;

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
export default ({ data }) =>
    <Container>
    <Main>
      <h2>Amazon Prime Video</h2>
      <p>We heard via comingsoon.com and other sources that Warner Bros have struck a deal to show Babylon 5 on Amazon Prime Video begining in July 2018. We're not sure how long ths deal might be available for, so if you're an Amazon Prime customer, get it whilst you can.</p>

      <a href="https://www.amazon.com/Prime-Instant-Video/">Watch now!</a>

      <p>This could not have come at a better time, as we heard that Go90 in the US and Pick in the UK have recently stopped showing the series. </p>

      <h2>Let us know!</h2>

      <p>We&#8217;ll try to keep you updated when we hear of airings. In the meantime, <TextLink href="https://facebook.com/freebabylon5">keep in touch via our Facebook page</TextLink>, as it&#8217;s likely that announcements will be made there first!</p>
    </Main>
    <Aside>
    </Aside>
    </Container>
