import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NotificationSystem from 'react-notification-system'

import { NOTIFICATION_REMOVED } from '../../global/constants'

class Notification extends Component {
  componentWillReceiveProps (nextProps) {
    const { notification } = this.props

    if (!notification && nextProps.notification) this.refs.notificationSystem.addNotification({
      ...nextProps.notification,
      onRemove: () => this.props.dispatch({ type: NOTIFICATION_REMOVED })
    })
  }

  _notificationSystem = null

  render () {
    return <NotificationSystem ref="notificationSystem" />
  }
}

Notification.propTypes = {
  dispatch: PropTypes.func.isRequired,
  notification: PropTypes.object
}

export default connect(store => ({ notification: store.notification }))(Notification)