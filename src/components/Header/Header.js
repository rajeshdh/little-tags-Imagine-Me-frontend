import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import SearchBar from "./SearchBar";
import NavButton from "./NavButton";
import NavLink from "./NavLink";
import Logo from "./Logo";
import { useSelector } from 'react-redux'

import { CartIcon, LoginIcon } from "../../IconSet";
import BottomNavigation from "./BottomNavigation";
import { FormattedMessage } from "react-intl";


function Header() {

  const { user, isLoading, cartLength, isAuthenticated } = useSelector(state => ({ user: state.auth.user, isLoading: state.auth.isLoading, cartLength: state.user.cart.length, isAuthenticated: state.auth.isAuthenticated }))
  return (<header>
    <div className="relative">
      <nav className="flex flex-wrap mx-3 items-center justify-center sm:justify-between sm:py-3 bg-sp-white sm:mx-10 border-b sm:border-grey-400 sm:border-0 md:mx-24">
        <div className="flex items-center  ">
          <Logo />
          <div className="hidden sm:block">
            <NavLink to="/trending">
              <FormattedMessage id="trending" />
            </NavLink>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="relative inline-flex items-center">
            <NavLink to={isAuthenticated ? "/cart" : "/login?redirect=/login"}>
              <div className="absolute -top-1 left-2.5 w-5 h-5 flex justify-center items-center text-white text-xs bg-sp-btn-primary rounded-full">{cartLength}</div>
              <NavButton>
                <CartIcon />
                <span className="hidden ml-2 md:inline-block">
                  <FormattedMessage id="cart" />
                </span>
              </NavButton>
            </NavLink>
            <LanguageDropdown />
            <NavLink className={isLoading ? 'animate-pulse' : ''} to={isAuthenticated ? "/profile" : "/login?redirect=/profile"}>
              <NavButton>
                <LoginIcon />
                {isLoading ? <div className="w-24 h-5 bg-gray-400"></div> : <span className="hidden truncate overflow-ellipse max-w-min md:inline-block" title={user?.email ? user.email : ''}>
                  {user?.email ? user.email : <FormattedMessage id="login" />}
                </span>}
              </NavButton>
            </NavLink>
          </div>
        </div>
        <div className="absolute right-3 top-1 sm:hidden">
          <LanguageDropdown />
        </div>
      </nav>
      <SearchBar className="hidden absolute right-0 bottom-0 top-0 md:block" />

    </div>
    <BottomNavigation />
  </header>)
}


export default Header
