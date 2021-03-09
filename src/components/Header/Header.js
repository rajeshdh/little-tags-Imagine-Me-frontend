/* eslint-disable react/react-in-jsx-scope */
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import SearchBar from './SearchBar';
import NavButton from './NavButton';
import NavLink from './NavLink';
import Logo from './Logo';

import { CartIcon, LoginIcon } from '../../IconSet';
import BottomNavigation from './BottomNavigation';

function Header() {
  return (
    <header>
      <div className="relative">
        <nav className="flex flex-wrap mx-3 items-center justify-center sm:justify-between bg-sp-white md:mx-24 sm:mx-10 border-b sm:border-grey-400 sm:border-0">
          <div className="flex items-center  ">
            <Logo />
            <div className="hidden sm:block">
              <NavLink to="/expore">
                <FormattedMessage id="explore" />
              </NavLink>
              <NavLink to="/trending">
                <FormattedMessage id="trending" />
              </NavLink>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="inline-flex items-center">
              <Link to="/cart">
                <NavButton>
                  <CartIcon />
                  <span className="hidden md:inline-block">
                    <FormattedMessage id="cart" />
                  </span>
                </NavButton>
              </Link>
              <LanguageDropdown />
              <Link to="/login">
                <NavButton>
                  <LoginIcon />
                  <span className="hidden md:inline-block">
                    <FormattedMessage id="login" />
                  </span>
                </NavButton>
              </Link>
            </div>
          </div>
          <div className="absolute right-3 top-1 sm:hidden">
            <LanguageDropdown />
          </div>
        </nav>
        <SearchBar className="md:hidden w-11/12 m-auto" />
        <SearchBar className="hidden absolute right-0 bottom-0 top-0 md:block" />
      </div>
      <BottomNavigation />
    </header>
  );
}

export default Header;
