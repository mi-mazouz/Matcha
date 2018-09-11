import createSagaMiddleware from 'redux-saga'
import { reducer as formReducer } from 'redux-form'
import { createStore as createReduxStore, applyMiddleware, compose, combineReducers } from 'redux'

import { landingPageFormSubmit } from './pages/landing/saga'
import { signUpFormSubmit } from './pages/authentication/sign-up/saga'
import { signInFormSubmit } from './pages/authentication/sign-in/saga'
import { fetchUser } from './pages/profile/saga'
import { resendConfirmEmail } from './pages/authentication/comfirm-email/saga'
import { forgotPasswordFormSubmit } from './pages/authentication/forgot-password/saga'
import { resetPasswordFormSubmit } from './pages/authentication/reset-password/saga'
import signInReducer from './pages/authentication/sign-in/reducer'
import signUpReducer from './pages/authentication/sign-up/reducer'
import forgotPasswordReducer from './pages/authentication/forgot-password/reducer'
import profileReducer from './pages/profile/reducer'
import notificationReducer from './global/components/notification/reducer'

const initialState =
  (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || {}
const sagaMiddleware = createSagaMiddleware()

const createStore = () => {
  const middlewares = [sagaMiddleware]
  const enhancers = []

  const store = createReduxStore(
    combineReducers({
      form: formReducer.plugin({
        signIn: signInReducer,
        signUp: signUpReducer,
        forgotPassword: forgotPasswordReducer
      }),
      notification: notificationReducer,
      profile: profileReducer
    }),
    initialState,
    compose(
      applyMiddleware(...middlewares),
      ...enhancers
    )
  )

  sagaMiddleware.run(landingPageFormSubmit)
  sagaMiddleware.run(signInFormSubmit)
  sagaMiddleware.run(signUpFormSubmit)
  sagaMiddleware.run(fetchUser)
  sagaMiddleware.run(resendConfirmEmail)
  sagaMiddleware.run(forgotPasswordFormSubmit)
  sagaMiddleware.run(resetPasswordFormSubmit)

  return store
}

export default createStore()
