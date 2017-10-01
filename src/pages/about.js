import React from "react"
import styled from "styled-components"
import '../global-styles.js'

const Container = styled.section`
  padding: 2em;
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  min-height: 80vh;
`;

export default ({ data }) =>
  <Container>
    <h1>About {data.site.siteMetadata.title}</h1>
    <h2>What Is Babylon 5?</h2>
    <p>Babylon 5 is TV series. “Oh, is that all?” You might say. But the fact is that it’s made a lot of difference to the lives of its’ fans. And it’s made a huge difference to TV series ever since, within its genre and without.</p>

    <p>It’s characters, storyline and concepts inspired a generation of wonderers.</p>

    <p>It’s epic structure inspired a generation of storytellers.</p>

    <p>And it’s in danger of being forgotten.</p>

    <h2>Why This Campaign?</h2>
    <p>This campaign was initiated by the shows’ creator, J Michael Straczynski.</p>

    <p>JMS said:</p>

    <blockquote>
    “Honestly, if fans want the original Babylon 5 back on the air as more than an obscure reference, then y’all need to get organized and loud.”
    </blockquote>

    <p>and…</p>

    <blockquote>
    “Ain’t never gonna be sufficient heat for any new B5 as long as… the original sits on a shelf gathering dust instead of viewers. #FreeBabylon5″
    </blockquote>

    <h3>On JMS’ Facebook page:</h3>

    <p>“Because Babylon 5 isn’t on the air in the US anywhere, it’s impossible for the show to add new viewers except one at a time, friend to friend, or if you’ve heard about it enough to want to shell out the money for the DVDs. Casual viewers can’t stumble across it while channel surfing. (As we all know, after Trek was canceled for poor ratings, it… found its audience in syndication.) So in answer to the photo below, either WB has to be convinced to release the show somewhere, or a network like Syfy or Chiller or another along those lines has to be prompted to pick it up. If not, quite honestly, and without any way to add new viewers, the show will eventually slide into obscurity. This ain’t something I can do, or even directly participate in. It’s up to the fans now.”</p>

    <h2>Our Goal</h2>

    <p>The goal of this site is to spread awareness and provide a center for ideas and information to help fans contact Warner Bros. and any likely venues to re-run Babylon 5 to let them know that we want to see the show get more exposure and gather new fans.</p>

    <p>Please let all your friends and fans of other shows about this campaign and see if they can help out. What we’re looking for right now is ways to contact the people who can make this happen. Stay tuned for more information.</p>

    <p>Visit our FAQ for more information about this campaign and why we’re taking this direction</p>

    <h2>What You Can Do</h2>

    <h3>Join up!</h3>

    <p>Join us, and find out what’s going on with the campaign, download and use our resources. And don’t forget to follow us to keep up with campaign news.</p>
  </Container>
  export const query = graphql`
    query AboutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
