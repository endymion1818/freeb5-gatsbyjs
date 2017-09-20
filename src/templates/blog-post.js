import React from "react"
import { css } from "glamor"
import { rhythm } from "../utils/typography"
const containerStyle = css({ maxWidth: `1200px`, padding: rhythm(2) })

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div
      className={containerStyle}
    >
      <h1>
        {post.frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        type
      }
    }
  }
`
