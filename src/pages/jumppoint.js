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
const Well = styled.div`
  background: rgba(0,0,0,0.2);
  padding: 15px;
  color: black;
  border-radius: 15px;
  margin: 15px 0;
`;
export default ({ data }) => {
  return (
    <Container>
      <Main>
        <h2>Come for the show, stay for the community.</h2>

        <p>Even now, 25 years later, the show boasts a loyal fan following. From audio podcasts to forums and fan sites, here are a few places where you'll be able to connect with fans new and old.</p>
        <Well>
          <h3>#FreeBabylon5 on Facebook</h3>
          <p>Moderated by long-time fan Jan, many campaigners and other fans have liked this page to keep up to date with the latest news and to coordinate campaign initiatives.</p>
          <a href="https://www.facebook.com/babylon5">#FreeBabylon5 on Facebook</a>
        </Well>
        <Well>
          <h3>Babylon 5 on Facebook</h3>
          <p>One of the larger group of fans who discuss the show incessantly ... but mostly debate about whether they're green or purple.</p>
          <a href="https://www.facebook.com/groups/578108902293988/">Babylon 5 Facebook Page</a>
        </Well>
          <Well>
            <h3>The Lurker's Guide</h3>
            <p>The earliest (?) Babylon 5 site on the net. The Lurker's Guide is a storehouse of information about the show.</p>
            <a href="http://www.midwinter.com/lurk/lurker.html">Lurker's Guide</a>
          </Well>
          <Well>
            <h3>JMS News</h3>
            <p>Where it all started (almost). until November 2010, JMS would post replies to the newsgroup rec.arts.sf.tv.babylon5, and the posts were collated on this website. A fan community built up on the forums at this site, and fans still post there. Unlike Sigma 957, they shouldn not walk there alone.</p>
            <a href="http://jmsnews.com">JMSNews</a>
          </Well>
          <Well>
            <h3>ISN News</h3>
            <p>ISN News is a fan run web site network, which provides all the latest news and information about two of the best and most popular science fiction TV series - Babylon 5 and Crusade.</p>
            <a href="http://www.isnnews.net/forums/forumdisplay.php?f=7">ISN News</a>
          </Well>
          <Well>
            <h3>Gateworld Forum</h3>
            <p>Although Gateworld is a StarGate forum, they have a Babylon 5 thread and many members who enjoy both series.</p>
            <a href="http://forum.gateworld.net/threads/87851-Free-Babylon-5/page2">Gateworld Forum</a>
          </Well>
          <Well>
            <h3>TrekBBS</h3>
            <p>Star Trek Bulletein board. This site often gets referrals from TrekBBS so they must chat about babylon 5 there too.</p>
            <a href="http://www.trekbbs.com/">TrekBBS</a>
          </Well>

        <p>Did I miss your site? Please email to let me know.</p>
      </Main>
      <Aside>
      </Aside>
    </Container>
  )
}
