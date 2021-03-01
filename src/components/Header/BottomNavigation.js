
import { CartIcon, LoginIcon } from "../../IconSet";
import HomeIcon from "../../IconSet/HomeIcon";
import TrendingIcon from "../../IconSet/TrendingIcon";
import NavLink from "./NavLink";

export default function BottomNavigation(){
    return <div className="fixed inset-x-0 bottom-0 bg-white z-30 border-t border-grey-400 shadow-2xl sm:hidden">
         <div className="flex justify-between items-center mx-3">
            <NavLink className="pt-4 pb-4 pr-3">
              <HomeIcon />
            </NavLink>
            <NavLink className="pt-3 pb-3 pr-3">
              <TrendingIcon />
            </NavLink>
            <NavLink className="pt-3 pb-3 pr-3">
              <CartIcon />
            </NavLink>
            <NavLink className="pt-3 pb-3 pr-3">
              <LoginIcon />
            </NavLink>
        </div>
    </div>
}