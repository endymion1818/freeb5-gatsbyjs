import * as React from 'react'
import Menu from '../Organisms/Menu'
import { withPrefix } from 'gatsby-link';

export interface HeaderProps {
    
}

const Header: React.SFC<HeaderProps> = () => (
    <>
        <Link to={withPrefix('/')}>
            &hash;FreeBabylon5
        </Link>
        <Menu/>
    </>
)
 
export default Header;