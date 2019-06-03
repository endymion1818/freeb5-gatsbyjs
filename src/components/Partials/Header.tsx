import { withPrefix } from 'gatsby-link'
import * as React from 'react'
import Menu from '../Organisms/Menu'

export interface IHeaderProps {}

const Header: React.SFC<IHeaderProps> = () => (
  <>
    <Link to={withPrefix('/')}>&hash;FreeBabylon5</Link>
    <Menu />
  </>
)

export default Header
