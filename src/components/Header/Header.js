import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import SearchBar from "./SearchBar";
import NavButton from "./NavButton";
import NavLink from "./NavLink";
import Logo from "./Logo";

import { CartIcon, LoginIcon } from "../../IconSet";

function Header() {

  return (<header>
    <nav className="flex flex-wrap items-center justify-between bg-sp-white ml-5 md:ml-20 p-1">
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
        <SearchBar className="hidden md:inline-block" />
      </div>
      <SearchBar className="md:hidden" />


    </nav>

  </header>)
}


export default Header
