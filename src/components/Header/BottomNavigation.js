
import { CartIcon, LoginIcon } from "../../IconSet";
import HomeIcon from "../../IconSet/HomeIcon";
import TrendingIcon from "../../IconSet/TrendingIcon";
import NavLink from "./NavLink";
import { useSelector } from 'react-redux'

export default function BottomNavigation() {
  const { cartLength, isAuthenticated } = useSelector(state => ({ cartLength: state.user.cart.length, isAuthenticated: state.auth.isAuthenticated }))


  return <div className="fixed inset-x-0 bottom-0 bg-white z-30 border-t border-grey-400 shadow-2xl sm:hidden">
    <div className="flex justify-between items-center mx-3">
      <NavLink to="/" className="pt-4 pb-4 pr-3">
        <HomeIcon />
      </NavLink>
      <NavLink to="/trending" className="pt-3 pb-3 pr-3">
        <TrendingIcon />
      </NavLink>
      <NavLink to={isAuthenticated ? "/cart" : "/login?redirect=/cart"} className="relative pt-3 pb-3 pr-3">
        <div className={`${cartLength === 0 ? 'hidden' : 'block'} absolute -top-0.5 -left-2.5 w-5 h-5 flex justify-center items-center text-white text-xs bg-sp-btn-primary rounded-full`}>{cartLength}</div>
        <CartIcon />
      </NavLink>
      <NavLink to={isAuthenticated ? "/profile" : "/login"} className="pt-3 pb-3 pr-3">
        <LoginIcon />
      </NavLink>
    </div>
  </div>
}