import React from "react"
import Link from "gatsby-link"

import {Container} from 'reakit'


import image404 from './404-image.jpg';

export default ({ data }) =>
  <Container>
    <Main>
      <img src={image404} alt="Susan Ivanova in Ops" width="100%"/>
      <h1>Absolutely nothing happened in Sector 404 today.</h1>
      <h2>I repeat, nothing happened in Sector 404.</h2>
      <p>I'm sorry, I changed a lot of the post addresses when I moved this site over to some new hosting this month. Please check out our <Link to="/news-room">news room</Link> if you're looking for something specific.</p>
    </Main>
  </Container>
