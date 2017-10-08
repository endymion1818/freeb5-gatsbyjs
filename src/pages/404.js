import React from "react"
import styled from "styled-components"
import '../global-styles.js'

import image404 from './404-image.jpg';

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
      <img src={image404} alt="Susan Ivanova in Ops" width="100%"/>
      <h1>Absolutely nothing happened in Sector 404 today.</h1>
      <h2>I repeat, nothing happened in Sector 404.</h2>
    </Main>
  </Container>
