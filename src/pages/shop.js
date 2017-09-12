import React from "react"

export default ({ data }) =>
  <div>
  You can help the #FreeBabylon5 campaign by purchasing items from our CafePress shop and wearing them whenever you leave your house. And even when you don&#8217;t.

  <a href="http://www.cafepress.com/tofreebabylon5/10441570">Visit the Shop</a>

  </div>
  export const query = graphql`
    query ShopQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
