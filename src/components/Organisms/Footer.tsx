import React, { FC } from 'react'
import styled from 'styled-components'
import Link from '../Atoms/Link'

import { withPrefix } from 'gatsby'
import Column from '../Atoms/Column'
import Container from '../Atoms/Container'
import Row from '../Atoms/Row'
import Wrapper from '../Atoms/Wrapper'
import * as variable from '../constants'
import { PRIMARY_NAV_ITEMS, SECONDARY_NAV_ITEMS } from '../constants'

export interface IFooterProps {
  siteTitle: string
}

const SecondaryNav = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    a {
      display: block;
      padding: ${variable.ESIZE.SINGLE};
      text-decoration: none;
      border-radius: ${variable.EBORDERRADIUS.MEDIUM};
      color: ${variable.ETEXT_COLOUR.ON_SURFACE};

      &:hover,
      &:active,
      &:focus {
        background-color: ${variable.EBACKGROUND_COLOUR.SURFACE};
        color: ${variable.ETEXT_COLOUR.ON_SURFACE};
      }
      &.active {
        background-color: ${variable.EBACKGROUND_COLOUR.SURFACE_ALT};
        color: ${variable.ETEXT_COLOUR.ON_SURFACE};
      }
    }
  }
`

const Footer: FC<IFooterProps> = ({ secondaryNav, primaryNav, siteTitle }) => (
  <Wrapper backgroundColour={variable.EBACKGROUND_COLOUR.SURFACE_ALT}>
    <Container>
      <Row size={3}>
        <Column>
          <h3>About This Site</h3>
          <Link to={withPrefix('/')}>{siteTitle}</Link>
          <p>Copyright notice or something nice.</p>
          <p>
            <Link to="#">Link 1</Link>
          </p>
        </Column>
        <Column>
          <h3>This Site</h3>
          <SecondaryNav>
            {PRIMARY_NAV_ITEMS
              ? PRIMARY_NAV_ITEMS.map(item => (
                  <li key={item.title}>
                    <Link activeClassName="active" to={withPrefix(item.path)}>
                      {item.title}
                    </Link>
                  </li>
                ))
              : null}
          </SecondaryNav>
        </Column>
        <Column>
          <h3>Navigate</h3>
          <SecondaryNav>
            {SECONDARY_NAV_ITEMS
              ? SECONDARY_NAV_ITEMS.map(item => (
                  <li key={item.title}>
                    <Link activeClassName="active" to={withPrefix(item.path)}>
                      {item.title}
                    </Link>
                  </li>
                ))
              : null}
          </SecondaryNav>
        </Column>
      </Row>
    </Container>
  </Wrapper>
)

export default Footer
