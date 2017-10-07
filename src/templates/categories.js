import React from 'react';
import Link from "gatsby-link"
import styled from "styled-components"
import '../global-styles.js'

export default function Categories({ pathContext }) {
  const { posts, post, category } = pathContext;
  if (categories) {
    return (
      <div>
        <h1>
          {post.length} post{post.length === 1 ? '' : 's'} categorised with {category}
        </h1>
        <ul>
          {post.map(({ id, frontmatter, excerpt }) => {
            return (
              <li key={id}>
                <h1>
                  <Link to={frontmatter.path}>
                    {frontmatter.title}
                  </Link>
                </h1>
                <p>
                  {excerpt}
                </p>
              </li>
            );
          })}
        </ul>
        <Link to="/categories">
          All Categories
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Categories</h1>
      <ul className="categories">
        {Object.keys(posts).map(categoryName => {
          const categories = posts[categoriesName];
          return (
            <li key={categoryName}>
              <Link to={`/categories/${categoryName}`}>
                {categoryName}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link to="/">
        All posts
      </Link>
    </div>
  );
}
