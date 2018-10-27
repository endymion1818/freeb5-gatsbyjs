import React from "react"
import Link, { withPrefix } from "gatsby-link"
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
      <h2>US: Comet TV</h2>
      <p>US channel, calling itself "the true home of science fiction", will soon begin showing Babylon 5 as well as Space:1999. These classic shows add to its already stellar classic lineup.</p>

      <p><TextLink to="/post/babylon-5-comet-tv-us">Post on freebabylon5</TextLink> &bull; <a href="https://www.comettv.com/">Website</a></p>

      <h2>US: Amazon Prime Video</h2>
      <p>We heard via comingsoon.com and other sources that Warner Bros have struck a deal to show Babylon 5 on Amazon Prime Video in the US only begining in July 2018. We're not sure how long ths deal might be available for, so if you're an Amazon Prime customer, get it whilst you can.</p>

      <a href="https://www.amazon.com/Prime-Instant-Video/">Watch now!</a>

      <h2>UK: Sky One</h2>
      <p><Link to={withPrefix('/post/back-on-tv-uk/')}>Sky One will begin showing the series from 9am on Monday 29th October</Link>. This is great news, since it's a much more watched channel than many other outlets that have been showing the series in the past. I'm really hoping there will be many new fans that find the show this way.</p>
      <h2>Let us know!</h2>

      <p>We&#8217;ll try to keep you updated when we hear of airings. In the meantime, <TextLink href="https://facebook.com/freebabylon5">keep in touch via our Facebook page</TextLink>, as it&#8217;s likely that announcements will be made there first!</p>
    </Main>
    <Aside>
    </Aside>
    </Container>
