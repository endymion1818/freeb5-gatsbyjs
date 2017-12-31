import React from "react"
import Link from "gatsby-link"
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
  background: rgba(255, 255, 255, 0.75);
  color: black;
  padding: 15px;
  border-radius: 15px;
  
  @media (min-width: 768px) {
    flex: 2;
  }
`;
const Aside = styled.main`
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
      <h1>Join the Campaign!</h1>
      <h2>You can continue to have an influence.</h2>
      <p>Although the campaign's main goal to have B5 back on the air in America has been realised, thanks to <TextLink href="https://go90.com/freebabylon5">Go90 airing the show for free (ad supported)</TextLink>, there's still a long way to go to realise some stretch goals:</p>
      <h2>Our Main Goals:</h2>
      <ul>
        <li>Get Babylon 5 on the air internationally</li>
        <li>Get more recognition for the historic place Babylon 5 has in television</li>
        <li>Get Warner Brothers to commission a new Babylon 5 TV show</li>
        <li>Promote Babylon 5 so that Studio JMS gains inertia for producing a movie</li>
      </ul>
      <h3>1. Get Babylon 5 on the air internationally</h3>
      <p>IS your country listed on the "Where to Watch" page? No? In that case, write letters to TV stations and online streaming services in your country, get them to recognise there's a demand for the show.</p>
      <h3>2. Get more recognition for the historic place Babylon 5 has in television</h3>
      <p>Tell people on Facebook, Twitter, and everywhere else about Babylon 5. If you're already a fan of the show, we're certain your doing that already.</p>
      <h3>3. Get Warner Brothers to commission a new Babylon 5 TV show</h3>
      <p>Warner Brothers seems to have forgotten about the show, apart from the deal with Go90, it's been relegated to the budget DVD shelf. Only recently, <TextLink href="/post/movie-reboot-wb/">we heard that WB is out with regard to producing a new show.</TextLink> By writing polite letters to TV executives, we might be able to reverse that decision.</p>
      <h3>4. Promote Babylon 5 so that Studio JMS gains inertia for producing a movie</h3>
      <p><TextLink href="https://facebook.com/freebabylon5">We're on Facebook</TextLink>, where you can re-post to your timeline. Mention us on your social media channel of choice ... or all of them. </p>
      <p>Preferably all of them.</p>
    </Main>
    <Aside>

    </Aside>
  </Container>
