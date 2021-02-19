import { Suspense, lazy } from 'react'
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

import translation_en from './translations/en.json'
import translation_hi from './translations/hi.json'

const HomePage = lazy(() => import('./layouts/Home'))
const translation = {
  en: translation_en,
  hi: translation_hi
}



function App({ locale }) {
  return (
    <IntlProvider locale={locale} messages={translation[locale]}>
      {/* HEADER COMPONENT HERE */}
      <header>
        header
      </header>

      {/* MAIN CONTENTS HERE */}
      <Suspense fallback={<>Loading....</>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Suspense>


      {/* FOOTER HERE */}
      <footer>
        footer
      </footer>
    </IntlProvider>
  );
}

const mapStateToProps = state => {
  const { locale } = state
  return { locale }
}

export default connect(mapStateToProps)(App);
