import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import SearchBar from "./SearchBar";
import NavButton from "./NavButton";
import NavLink from "./NavLink";
import Logo from "./Logo";

import { CartIcon, LoginIcon } from "../../IconSet";

function Header() {

  return (<header>
    <div className="relative">
      <nav className="flex flex-wrap mx-5 items-center justify-between bg-sp-white md:mx-24">
        <div className="flex-none ">
        <Logo />
        </div>
        <div className="flex-grow">

          <NavLink>explore</NavLink>
          <NavLink>trending</NavLink>

        </div>
        <div className="flex-none">
          <div className="inline-flex items-center">
            <NavButton>
              <CartIcon />
              <span className="hidden md:inline-block">cart</span>
            </NavButton>
            <LanguageDropdown />

            <NavButton>
              <LoginIcon />
              <span className="hidden md:inline-block">login</span>
            </NavButton>
          </div>
        </div>
        <SearchBar className="md:hidden" />


      </nav>
          <SearchBar className="hidden absolute right-0 bottom-0 top-0 md:block" />
      
    </div>

  </header>)
}


export default Header
