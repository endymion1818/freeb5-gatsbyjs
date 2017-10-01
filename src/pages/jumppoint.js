import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import "../global-styles.js"

const Container = styled.section`
  padding: 2em;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  min-height: 80vh;
`;

export default ({ data }) => {
  return (
    <Container>
    <h2>Seen the show? Now see how deep the Jump Gate goes &#8230;</h2>

    <p>The JumpPoint is where you&#8217;ll find access to Babylon 5 forums, web pages and other content where you can  find in-depth insight into the making of the show, explore plot points and further details from fans and those who worked on the show.</p>

    <p>Beware: the sites and content in the JumpPoint are not spoiler-free!</p>

    <ul>
      <li><a href="http://jmsnews.com/forums/forumdisplay.php?f=9">JMSNews</a></li>
      <li><a href="http://forum.gateworld.net/threads/87851-Free-Babylon-5/page2">Gateworld Forum</a></li>
      <li><a href="http://www.trekbbs.com/">TrekBBS</a></li>
      <li><a href="http://www.isnnews.net/forums/forumdisplay.php?f=7">ISN News</a></li>
    </ul>

    <p>Note from Webmaster: As more sites move to HTTPS, I'm losing the ability to embed them into this site. Sorry, you're going to have to click through from now on...</p>
    </Container>
  )
}
