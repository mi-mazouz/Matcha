import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Container from '../../../global/components/Container'
import Section from '../../../global/components/Section'
import Spinner from '../../../global/components/Spinner'
import PicturesSection from './PicturesSection'
import InfosSection from './InfosSection'
import MoreSection from './MoreSection'
import { FETCH_USER_REQUEST } from '../constants'
import { windowSizes } from '../../../config/medias'

const Columns = styled.div`
  width: 100%;
  margin-left: 0rem !important;
  align-items: center;
`

class Profile extends Component {
  state = {
    windowWidth: window.innerWidth
  }

  componentWillMount() {
    window.addEventListener('resize', this.updateDimensions)

    const { userId } = this.props.match.params

    this.props.dispatch({
      type: FETCH_USER_REQUEST,
      payload: { userId }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  componentWillUpdate(nextProps) {
    const regex = /^(\/profile\/.*?[0-9])$/

    if (
      regex.test(this.props.location.pathname) &&
      this.props.location.pathname !== nextProps.location.pathname
    ) {
      this.props.dispatch({
        type: FETCH_USER_REQUEST
      })
    }
  }

  updateDimensions = () => this.setState({ windowWidth: window.innerWidth })

  render() {
    const { user } = this.props
    const { windowWidth } = this.state
    if (!user) return <Spinner />

    return (
      <Section>
        <Container>
          <Columns className="columns">
            {windowWidth > windowSizes.tabletLg && (
              <PicturesSection pictures={user.pictures} windowWidth={windowWidth} />
            )}
            <InfosSection user={user} />
            {windowWidth <= windowSizes.tabletLg && (
              <PicturesSection pictures={user.pictures} windowWidth={windowWidth} />
            )}
            <MoreSection />
          </Columns>
        </Container>
      </Section>
    )
  }
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  user: PropTypes.object
}

Profile.defaultProps = {
  user: null
}

export default connect(store => ({
  user: store.profile.user
}))(Profile)
