import React from "react"
import g from "glamorous"
import Link from "gatsby-link"

import { rhythm } from "../utils/typography"

export default ({ data }) =>
    <div>
    <h3>Babylon 5 isn&#8217;t on the air that often these days, so you might want to check out Amazon Video, iTunes or other suppliers in your country. We&#8217;re campaigning for Netflix to add Babylon 5 to their catalogue, so [please request it now!][4]</h3>

    <h2>United States</h2>

    <p>In April 2017 we heard that [Go90][5] streaming service from Verizon will stream Babylon 5 as part of a deal with Warner Bros.</p>

    <p>US TV channel Comet TV has been showing The Lost Tales as well. Please tell us if this is still happening.</p>

    <h2>International</h2>

    <p>TV stations in New Zealand and Germany have recently aired all 5 seasons. Please [let us know][7] if you hear of anywhere else that&#8217;s showing the series!</p>

    <h2>Let us know!</h2>

    We&#8217;ll try to keep you updated when we hear of airings. In the meantime, <a href="https://facebook.com/freebabylon5">keep in touch via our Facebook page</a>, as it&#8217;s likely that announcements will be made there first!
    </div>
    export const query = graphql`
      query WtwQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
