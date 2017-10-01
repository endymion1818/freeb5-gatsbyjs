import React from "react"
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
  @media (min-width: 768px) {
    flex: 2;
  }
`;
const Aside = styled.aside`
  @media (min-width: 768px) {
    flex: 1;
  }
`;
export default ({ data }) =>
  <Container>
    <Main>
      Thanks for offering to donate to the #FreeBabylon5 campaign. Your donation will go towards funding the production of badges and other material to promote the #FreeBabylon5 campaign.

      We accept donations through Paypal to our account:

      ### freebabylon5@aol.com

      If you would like to donate using a method other than Paypal, <a href="/contact-us/" title="Contact Us">please contact us</a> to arrange.
    </Main>
    <Aside>
    </Aside>
  </Container>
