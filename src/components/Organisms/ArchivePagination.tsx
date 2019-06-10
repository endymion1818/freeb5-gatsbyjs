import React, { FC } from 'react'
import Link from '../Atoms/Link'

export interface IPaginationProps {
  navItems: object // TODO: actually type this
  prev?: string
  next?: string
}

const Pagination: React.SFC<IPaginationProps> = ({ navItems, prev, next }) => {
  return (
    <nav className="pagination">
      {prev && <Link to={prev}>Previous</Link>}
      {next && <Link to={next}>Next page</Link>}
      <ul>
        {navItems.map(item => (
          <li key={item.index}>
            {item.separator ? (
              <span>&hellip;</span>
            ) : (
              <Link to={item.link} aria-label={`Goto page ${item.index}`}>
                {item.index}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
