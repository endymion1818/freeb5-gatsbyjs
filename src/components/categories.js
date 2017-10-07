import React from 'react';
import Link from 'gatsby-link';

export default function Categories({ list = [] }) {
  return (
    <ul className="tag-list">
      {list.map(category =>
        <li key={category}>
          <Link to={`/categories/${category}`}>
            {category}
          </Link>
        </li>
      )}
    </ul>
  );
}
