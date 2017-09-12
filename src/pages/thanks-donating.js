import React from "react"

export default ({ data }) =>
  <div>
  Thanks for offering to donate to the #FreeBabylon5 campaign. Your donation will go towards funding the production of badges and other material to promote the #FreeBabylon5 campaign.

  We accept donations through Paypal to our account:

  ### freebabylon5@aol.com

  If you would like to donate using a method other than Paypal, <a href="/contact-us/" title="Contact Us">please contact us</a> to arrange.
  </div>
  export const query = graphql`
    query thanksQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
