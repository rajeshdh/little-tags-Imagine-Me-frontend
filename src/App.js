import { Suspense } from 'react';
import { connect } from 'react-redux';

import { IntlProvider } from 'react-intl';
import Routes from './Routes';

import Header from './components/Header/Header';
import MainSpinner from './components/LoadingSpinners/MainSpinner';

import translationEn from './translations/en.json';
import translationHi from './translations/hi.json';

const translation = {
  en: translationEn,
  hi: translationHi,
};

function App({ locale }) {
  return (
    <IntlProvider locale={locale} messages={translation[locale]}>
      {/* HEADER COMPONENT HERE */}
      <Header />

      {/* MAIN CONTENTS HERE */}
      <Suspense fallback={<MainSpinner />}>
        <Routes />
      </Suspense>

      {/* FOOTER HERE */}
      {/* <footer>
        footer
      </footer> */}
    </IntlProvider>
  );
}

const mapStateToProps = state => {
  const {
    localeReducer: { locale },
  } = state;
  return { locale };
};

export default connect(mapStateToProps)(App);
