import React from 'react'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import NavBar from './NavBar'
import LandingPage from '../../pages/landing'
import SignIn from '../../pages/authentication/sign-in'
import SignUp from '../../pages/authentication/sign-up'
import ForgotPassword from '../../pages/authentication/forgot-password'
import ResetPassword from '../../pages/authentication/reset-password'
import StyledPage from '../../global/components/Page'

import landingPageBackgroundImage from './assets/landing-background.jpg'
import authenticationBackgroundImage from './assets/authentication-background.png'
import mobileBackgroundImage from './assets/mobile-background.jpg'
import medias from '../../config/medias'

const Page = styled(StyledPage)`
  background-image: ${props =>
    props.location.pathname === '/'
      ? `url(${landingPageBackgroundImage})`
      : `url(${authenticationBackgroundImage})`};
  ${medias.tabletSm.max`
    background-image: url(${mobileBackgroundImage});
  `};
`

const LogoutLayout = ({ location }) => (
  <Page location={location}>
    <NavBar />
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/reset-password/:token" component={ResetPassword} />
      <Redirect to="/" />
    </Switch>
  </Page>
)

LogoutLayout.propTypes = {
  location: PropTypes.object.isRequired
}

export default LogoutLayout
