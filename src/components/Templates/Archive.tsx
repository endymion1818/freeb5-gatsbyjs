import { graphql, withPrefix } from "gatsby";
import React, { FC } from "react";
import Link from "../Atoms/Link";
import Page from "../Templates/Page";

export interface IArchiveProps {
  data: {
    // needs retyping
  };
  pageContext: {
    previousPagePath?: string;
    nextPagePath?: string;
  };
}

const Archive: FC<IArchiveProps> = ({ data, location, pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;
  const posts = data.allGhostPost.edges

  return (
    <Page>
      <h2>All Posts</h2>
      {posts &&
        posts.edges.map((edge => (
          <article key={edge.node.id}>
            <h2>
              <Link to={edge.node.url}>
                {edge.node.title.title}
              </Link>
            </h2>
            {edge.node.feature_image &&
            <div className="post-card-image" style={{
                backgroundImage: `url(${edge.node.feature_image})` ,
            }}></div>}
            <p dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
            <br />
            {/* <div>
              Posted on: <time>{edge.node.frontmatter.date}</time>
            </div> */}
          </article>
        ))}
      <nav>
        <ul>
          {previousPagePath && (
            <li>
              <Link to={previousPagePath}>Previous</Link>
            </li>
          )}
          {nextPagePath && (
            <li>
              <Link to={nextPagePath}>Next</Link>
            </li>
          )}
        </ul>
      </nav>
    </Page>
  );
};

export default Archive;

export const archiveQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
