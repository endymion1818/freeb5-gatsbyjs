import { graphql } from 'gatsby'
import React, { FC } from 'react'

export interface IArchiveProps {}

const Archive: FC<IArchiveProps> = props => {
  const { pageContext } = props
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <div>
      {props.data.posts.edges.map(edge => (
        <Item key={index} post={edge.node} />
      ))}
      <div>
        {previousPagePath ? <Link to={previousPagePath}>Previous</Link> : null}
        {nextPagePath ? <Link to={nextPagePath}>Next</Link> : null}
      </div>
    </div>
  )
}

export default Archive

export const archiveQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
