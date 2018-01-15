import React from 'react'

import { TextField } from '../../styles/components/fileds'
import { SecondaryLink } from '../../styles/components/links'
import { Button } from '../../styles/components/buttons'
import { Form } from '../../styles/components/forms'
import { Container } from '../../styles/components/containers'
import { Error } from '../../styles/components/error'
import {
  CardContainer,
  CardHeader,
  CardText
} from '../../styles/components/cards'

class Signup extends React.Component {
  state = {
    canSubmit: false
  }

  handleSubmit (values) {
    this.props.signup(
      values.firstName,
      values.lastName,
      values.userName,
      values.mail,
      values.password
    )
  }
  enableButton () { this.setState({ canSubmit: true }) }
  disableButton () { this.setState({ canSubmit: false }) }

  render () {
    const { isAuthenticating, error } = this.props

    return (
      <CardContainer>
        <CardHeader
          title='SIGN UP'
          style={{
            padding: '0px'
          }}
        />
        <Form
          onValid={() => this.enableButton()}
          onInvalid={() => this.disableButton()}
          onSubmit={(values) => this.handleSubmit(values)}
        >
          <CardText>
            <Container
              style={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <TextField
                maxLength='16'
                name='firstName'
                hintText='First name'
                width='45%'
                required
              />
              <TextField
                maxLength='16'
                name='lastName'
                hintText='last name'
                width='45%'
                required
              />
            </Container>
            <TextField
              maxLength='16'
              name='userName'
              hintText='Username'
              required
            />
            <TextField
              maxLength='30'
              name='mail'
              validations='isEmail'
              validationError='Wrong email'
              hintText='Email'
              type='email'
              required
            />
            <TextField
              maxLength='30'
              name='password'
              validations='minLength:8'
              validationError='Wrong password'
              hintText='Password'
              type='password'
              required
            />
          </CardText>
          <Error style={{marginTop: 0}} errorMessage={error} />
          <Button
            type='submit'
            label='Submit'
            disabled={!this.state.canSubmit || isAuthenticating}
          />
        </Form>
        <SecondaryLink
          to='/signip'
          label='Already registered?'
        />
      </CardContainer>
    )
  }
}

export default Signup
