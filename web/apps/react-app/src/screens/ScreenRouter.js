import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAuthenticated } from '@lerna-front-skeleton/store/src/selectors/auth'
import supportsHistory from '@meta-awesome/functions/src/supportsHistory'
import AuthenticatedScreenRouter from './authenticated/AuthenticatedScreenRouter'
import GuestScreenRouter from './guest/GuestScreenRouter'

const forceRefresh = !supportsHistory()

const ScreenRouter = () => {
  const authenticated = useSelector(selectAuthenticated)
  const RouterContext = authenticated ? AuthenticatedScreenRouter : GuestScreenRouter

  return (
    <Router forceRefresh={ forceRefresh }>
      <Suspense fallback={ <div /> }>
        <RouterContext />
      </Suspense>
    </Router>
  )
}

export default ScreenRouter
