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
      You can help the #FreeBabylon5 campaign by purchasing items from our CafePress shop and wearing them whenever you leave your house. And even when you don&#8217;t.

      <a href="http://www.cafepress.com/tofreebabylon5/10441570">Visit the Shop</a>

    </Main>
    <Aside>
    </Aside>
  </Container>
