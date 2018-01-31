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
      <h3>Babylon 5 isn&#8217;t on the air that often these days, so you might want to check out Amazon Video, iTunes or other suppliers in your country. We&#8217;re campaigning for Netflix to add Babylon 5 to their catalogue, so [please request it now!]</h3>

      <h2>United States</h2>

      <p>In April 2017 we heard that <TextLink href="https://www.go90.com/shows/babylon5">Go90 streaming service from Verizon</TextLink> will stream Babylon 5 as part of a deal with Warner Bros.</p>

      <p>US TV channel Comet TV has been showing The Lost Tales as well. Please tell us if this is still happening.</p>

      <h2>International</h2>

      <p>TV stations in the UK, New Zealand and Germany have recently aired all 5 seasons. Please let us know if you hear of anywhere else that&#8217;s showing the series!</p>

      <h2>Let us know!</h2>

      We&#8217;ll try to keep you updated when we hear of airings. In the meantime, <TextLink href="https://facebook.com/freebabylon5">keep in touch via our Facebook page</TextLink>, as it&#8217;s likely that announcements will be made there first!
    </Main>
    <Aside>
    </Aside>
    </Container>
