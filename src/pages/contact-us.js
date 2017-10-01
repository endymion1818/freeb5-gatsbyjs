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
  @media (min-width: 768px) {
    flex: 2;
  }
`;
const Aside = styled.main`
  @media (min-width: 768px) {
    flex: 1;
  }
`;
export default ({ data }) =>
    <Container>
      <Main>
        Have any news, artwork submissions or want to help the campaign?
        <br/>
        Use this form to eMail us or simply email <Link href="mailto:freebabylon5@aol.com">freebabylon5@aol.com</Link>
      </Main>
      <Aside>
      </Aside>
    </Container>
