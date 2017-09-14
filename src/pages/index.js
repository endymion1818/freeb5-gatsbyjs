import React from "react"
import g from "glamorous"
import Link from "gatsby-link"

import { rhythm } from "../utils/typography"

export default ({ data }) => {
  return (
    <div>
    <div className="col-md-12 mission-text">
      <h1 className="center">
        Babylon 5 is a game-changing, ground breaking, emmy-award winning TV series that is in danger of becoming lost and forgotten.
      </h1>

      <p className="text-center">
        We are not going to let that happen.
      </p>

      <p className="text-center">
        Please <a className="btn btn-join" title="Join Us!" href="/join/"><strong>Join us</strong></a> and help #FreeBabylon5
      </p>

      <p>
        &nbsp;
      </p>
    </div>
      <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
        Recent Posts
      </g.H1>
      <h4>
        {data.allMarkdownRemark.totalCount} Posts
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div>
        <Link
          to={node.fields.slug}
          css={{ textDecoration: `none`, color: `inherit` }}
        >
          <g.H3 marginBottom={rhythm(1 / 4)}>
            {node.frontmatter.title}{" "}
            <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
          </g.H3>
          <p>
            {node.excerpt}
          </p>
          </Link>
        </div>
      )}
      <div>
      <h2>Babylon 5 Now Streaming in the US!</h2>
      <p>This is the day we have been fighting for! Babylon 5 is now showing in the US on Go90. The #FreeBabylon5 campaign even got a mention in their promo advert which you can watch here.</p>

      <p>Thank you Go90 for fulfilling our primary campaign goal and streaming Babylon 5 in the US.</p>

      <a href="https://go90.com/babylon5">Watch Babylon 5 Now — for Free!  (US Only)</a>
      </div>
      <div className="masthead masthead-home2">
      <h2>New to Babylon 5?</h2>
      <p>Babylon 5 has something for everyone. The story focuses on the relationships and entwined destinies of a multitude of charachters. Some find love, some face tragedy.</p>

      <p>There are epic plotlines, rich alien cultures, and bucket loads of space battles.</p>

      <a href="https://go90.com/babylon5">Where to Watch</a>
      </div>
      <div className="container">
        <div className="alert">Looking for news about the Babylon 5 Movie? You'll find that here »</div>
      </div>
      <div className="masthead masthead-home2">
      <h2>Why is Babylon 5 Important?</h2>

      <p>Babylon 5 was a watershed moment for television.</p>

      <p>It was the first sci-fi show to feature story arcs that continued past 2-hour specials. It was the first to use only computer-generated spaceship effects. Its story inspired a generation.</p>

      <p>Without Babylon 5, there would probably be no Battlestar Galactica, no Firefly, and no Marvel Cinematic Universe.</p>

      <p>But it's rarely on air anywhere and isn't shown on major internet TV services.</p>

      <p>You can help change that.</p>

      <a href="/about/">About the Campaign</a>

      </div>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: DESC}
        limit: 5
      ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
