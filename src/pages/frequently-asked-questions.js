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
        <div class="panel-group" id="accordion">
          <div class="panel panel-white">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="collapseOne" href="#collapseOne"><br /> Q: Why isn’t Babylon 5 available in reruns?<br /> </a><br />
              </h4>
            </div>

            <div id="collapseOne" class="panel-collapse collapse in">
              <div class="panel-body">
                Short answer: Because, due to corporate in-fighting at Warner Bros., they simply don’t make it available.<br /> Long answer: From the ‘Fandom Endures’ panel at Phoenix Comicon on May 25, 2013:<br /> JMS: “The problem we have currently…it’s still on the air overseas. It still airs in the UK, in Australia, Germany, France, everywhere else but the US. And the problem is, even with availability online or on DVDs is that you have to go looking for it. Think about it. Where Star Trek took off in syndication, you might have been flipping through channels and you’d happen to land on a channel where Kirk’s fighting a Gorn and you think, “What the hell was that?!” and you stick around and watch the episode, and gradually you become acclimated to it. The only way to find the show in the US is to go looking for it.<br /> The reason for that is petty beyond belief. When we started out, there was the PTEN network that was our first home on television syndication. And that was outside of Warner Bros. Television. Warner Bros. Television is like the big TV shows and the sitcoms and the Law & Orders and all that kind of stuff. And these [PTEN] executives said, “We want to make television, too. We’re part of Warner Bros. Domestic Distribution, we want to have shows”. And these guys [Warner Bros. Television] hated those guys [PTEN]. “It’ our job to create television, not your job. You’re just syndicated, you just set things up. What the hell do you think you’re doing?” And that enmity was there from Day 1 and persisted for the entire run of the show which is why all of the PTEN shows were kind of bastard children to Warner Bros. Television, particularly us because we did well which really pissed off the guys [at Warner Bros. Television].<br /> When we went off the air finally, they couldn’t have been happier. They were looking for five years to shut us down. They seriously tried to sabotage the show numerous times but they couldn’t pull it off because the fan support was there. And once we were done, they scooped it and said “This is not part of Warner Bros., we’re not concerned about it. Put it online to help drive other platforms, to drive AOL or drive the online [content?], or drive Warner Bros. network online. But to actually acknowledge their own show, that it had any integrity or importance? Fuck no. And those people are still there dragging their heels.<br /> It’s my abiding hope that over time the fans will gather up and say, like ‘Free Mars’, free Babylon 5. And start the fan movement to put it back on the air again. That may have a long term effect of making them aware of it. Because it’s now been put aside by the guys in charge being “below our notice”. It makes money for them. You know it made half a billion dollars in DVD sales, of which I’ve never seen a penny, nor has most of the cast.
              </div>
            </div>
          </div>

          <div class="panel panel-white">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="collapseTwo" href="#collapseTwo"><br /> Q: JMS owns the movie rights to B5, right? Why doesn’t he just make a movie?<br /> </a><br />
              </h4>
            </div>

            <div id="collapseTwo" class="panel-collapse collapse">
              <div class="panel-body">
                A: From what we understand, based on what JMS has said at conventions, nobody’s likely to finance a movie that can’t eventually be sold to TV. Since JMS doesn’t own the TV rights, that’s not a possibility.
              </div>
            </div>
          </div>

          <div class="panel panel-white">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="collapseThree" href="#collapseThree"><br /> Q: Why can’t JMS do comics/novels/short stories/webisodes, etc.?<br /> </a><br />
              </h4>
            </div>

            <div id="collapseThree" class="panel-collapse collapse">
              <div class="panel-body">
                A: Warner Bros. owns the Babylon 5 universe lock, stock and airlocks.
              </div>
            </div>
          </div>

          <div class="panel panel-white">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="collapseFour" href="#collapseFour"><br /> Q: In that case, why not restart Crusade?<br /> </a><br />
              </h4>
            </div>

            <div id="collapseFour" class="panel-collapse collapse">
              <div class="panel-body">
                A: That’s part of the Babylon 5 universe. Warner’s owns all of that. (You may be detecting a trend here…)
              </div>
            </div>
          </div>

          <div class="panel panel-white">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="collapseFive" href="#collapseFive"><br /> Q: The future of entertainment is streaming. Why start with TV reruns?<br /> </a><br />
              </h4>
            </div>

            <div id="collapseFive" class="panel-collapse collapse">
              <div class="panel-body">
                A: A couple of reasons. First off, there are many TV channels in every market. By contacting them, we’ve got a decent chance of one or more of them in each market asking to show Babylon 5. There are only a handful of streaming sites so the market is smaller. In addition, WB is streaming a few (26 as of this writing) episodes on their own site. They may be less willing to allow a competing site to run the show. In addition, WB has Babylon 5 episodes for sale at $1.99 each on sites such as Amazon.com and iTunes. They may not have much of an incentive to allow access via a streaming service unless we can help create a greater demand.<br /> The theory is, if we can get B5 in reruns, somebody channel surfing might find the show and be intrigued enough to start watching. Putting B5 in reruns will expose it to viewers who’d otherwise never find it. After they’ve discovered it, they can go looking for it and possibly catch up on everything via streaming. The first step it is to get their attention.<br /> Streaming sites constantly monitor what customers are searching for. Once we get the show back on TV, many more people are likely to be searching for it, causing the streaming sites to investigate obtaining B5 for their customers.
              </div>
            </div>
          </div>

          <div class="panel panel-white">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="collapseSix" href="#collapseSix"><br /> Q: I don’t think anybody’s going to want to watch reruns unless it’s in hi-def.<br /> </a><br />
              </h4>
            </div>

            <div id="collapseSix" class="panel-collapse collapse">
              <div class="panel-body">
                A: Plenty of people watch non hi-def shows in reruns, even shows not in color. Reruns of everything from Twilight Zone to Andy of Mayberry and show Dick Van Dyke are shown all the time. Chances are there are many channels where Babylon 5 in its original form will be welcome.
              </div>
            </div>
          </div>

          <div class="panel panel-white">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="collapseSeven" href="#collapseSeven"><br /> Q: I’d rather see Babylon 5 on Blu-Ray than in reruns.<br /> </a><br />
              </h4>
            </div>

            <div id="collapseSeven" class="panel-collapse collapse">
              <div class="panel-body">
                A: JMS gets asked about the possibility of Blu-Ray about every five minutes. WB is never likely to spend the money unless there’s a good chance they’ll make a lot of money at it. They reportedly made half a billion on the DVDs and those are still selling. The audience needs to grow and so the starting point is getting the show out in front of new viewers.
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Aside>
      </Aside>
    </Container>
