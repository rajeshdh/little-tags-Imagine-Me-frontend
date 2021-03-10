
import { Suspense } from 'react'
import { connect } from 'react-redux';

import Routes from "./routes";
// import { HashRouter as Router } from "react-router-dom";
import { IntlProvider } from 'react-intl'

// import HomePage from './layouts/Home'
import Header from './components/Header/Header'
import MainSpinner from './components/LoadingSpinners/MainSpinner'

import translation_en from './translations/en.json'
import translation_hi from './translations/hi.json'


const translation = {
  en: translation_en,
  hi: translation_hi
}



function App({ locale }) {
  return (
    <IntlProvider locale={locale} messages={translation[locale]}>
      <Header></Header>
      <Suspense fallback={<MainSpinner />}>
          <Routes />
      </Suspense>

    </IntlProvider>
  );
}

const mapStateToProps = state => {
  const { localeReducer: {locale} } = state
  return { locale }
}

export default connect(mapStateToProps)(App);
