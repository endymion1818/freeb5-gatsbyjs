import React from "react"

export default ({ data }) =>
    <div>
    Have any news, artwork submissions or want to help the campaign? Use this form to eMail us or simply email freebabylon5@aol.com
    </div>
    export const query = graphql`
      query contactusQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
