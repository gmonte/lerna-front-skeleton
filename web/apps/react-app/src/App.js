import React from 'react'
import { I18nProvider } from '@meta-react/i18n'
import dictionaries from '@lerna-front-skeleton/i18n'
import { StoreProvider } from '@lerna-front-skeleton/store'
import { selectCurrentLanguage } from '@lerna-front-skeleton/store/src/selectors/i18n'
import { useSelector } from 'react-redux'
import ScreenRouter from './screens/ScreenRouter'

const AppStored = () => {
  const currentLanguage = useSelector(selectCurrentLanguage)
  return (
    <I18nProvider language={ currentLanguage } dictionaries={ dictionaries }>
      <ScreenRouter />
    </I18nProvider>
  )
}

function App() {
  return (
    <StoreProvider>
      <AppStored />
    </StoreProvider>
  )
}

export default App
