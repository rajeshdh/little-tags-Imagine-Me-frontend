
import { Suspense, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Routes from "./routes";
import { IntlProvider } from 'react-intl'

import Header from './components/Header/Header'
import MainSpinner from './components/LoadingSpinners/MainSpinner'

import { checkUserAlreadySignedIn } from './redux/auth/actions'

import translation_en from './translations/en.json'
import translation_hi from './translations/hi.json'


const translation = {
  en: translation_en,
  hi: translation_hi
}



function App() {
  const locale = useSelector(state => state.localeReducer.locale)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserAlreadySignedIn())
  }, [])

  return (
    <IntlProvider locale={locale} messages={translation[locale]}>
      <Header></Header>
      <Suspense fallback={<MainSpinner />}>
        <Routes />
      </Suspense>

    </IntlProvider>
  );
}


export default App;
