import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Types as AuthTypes } from '@lerna-front-skeleton/store/src/ducks/auth'
import I18n from '@meta-react/i18n'
import ComponentDemo from '@lerna-front-skeleton/react-component-demo'

const DashboardContainer = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  return (
    <div>
      <button disabled={ loading } onClick={ () => dispatch({ type: AuthTypes.LOGOUT }) }>
        <I18n>logout</I18n>
      </button>
      <ComponentDemo />
    </div>
  )
}

export default DashboardContainer
