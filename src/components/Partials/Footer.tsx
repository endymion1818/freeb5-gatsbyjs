import React from 'react'
import styled from 'styled-components'
import Link from '../Atoms/Link'

import { withPrefix } from 'gatsby'
import Column from '../Atoms/Column'
import Container from '../Atoms/Container'
import Row from '../Atoms/Row'
import Wrapper from '../Atoms/Wrapper'
import * as variable from '../constants'

const FooterNav = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    a {
      display: block;
      padding: ${variable.ESIZE.SINGLE};
      text-decoration: none;
      border-radius: ${variable.EBORDERRADIUS.MEDIUM};
      color: white;

      &:hover,
      &:active,
      &:focus {
        background-color: ${variable.EBACKGROUND_COLOUR.SURFACE};
        color: ${variable.EBACKGROUND_COLOUR.SURFACE};
      }
      &.active {
        background-color: ${variable.EBACKGROUND_COLOUR.SURFACE_ALT};
        color: ${variable.EBACKGROUND_COLOUR.SURFACE};
      }
    }
  }
`

const Footer = ({ siteMenu, navItems }) => (
  <Wrapper backgroundColour={variable.ETEXT_COLOUR.ON_SURFACE}>
    <Container>
      <Row size={3}>
        <Column>
          <h3>About This Site</h3>
          <Link to={withPrefix('/')}>Carroway</Link>
          <p>Copyright notice or something nice.</p>
          <p>
            <Link to="#">Link 1</Link>
          </p>
        </Column>
        <Column>
          <h3>This Site</h3>
          <FooterNav>
            {siteMenu
              ? siteMenu.edges.map(item => (
                  <li key={item.node.frontmatter.path}>
                    <Link activeClassName="active" to={withPrefix(item.node.frontmatter.path)}>
                      {item.node.frontmatter.title}
                    </Link>
                  </li>
                ))
              : null}
          </FooterNav>
        </Column>
        <Column>
          <h3>Navigate</h3>
          <FooterNav>
            {navItems
              ? navItems.edges.map(item => (
                  <li key={item.node.frontmatter.path}>
                    <Link activeClassName="active" to={withPrefix(item.node.frontmatter.path)}>
                      {item.node.frontmatter.title}
                    </Link>
                  </li>
                ))
              : null}
          </FooterNav>
        </Column>
      </Row>
    </Container>
  </Wrapper>
)

export default Footer
