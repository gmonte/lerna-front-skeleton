import { lazy } from 'react'

const DashboardScreen = lazy(() => import('../screens/authenticated/DashboardScreen'))

const routes = {
  dashboard: {
    path: '/',
    exact: true,
    Component: DashboardScreen
  }
}

export default routes
