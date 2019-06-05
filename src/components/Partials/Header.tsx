import { withPrefix } from 'gatsby-link'
import * as React from 'react'
import Link from '../Atoms/Link'

export interface IHeaderProps {}

const Header: React.SFC<IHeaderProps> = () => (
  <>
    <Link to={withPrefix('/')}>&hash;FreeBabylon5</Link>
  </>
)

export default Header
