import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import ProfileGrid from '../../components/ProfileGrid/ProfileGrid';
import UserImage from "../../components/UserImage/UserImage";
import { CartIcon } from '../../IconSet/CartIcon';
import { HeartOutline } from '../../IconSet/Heart';
import { OrderHistoryIcon } from '../../IconSet/Profile/OrderHistory'
import { LogoutIcon } from '../../IconSet/Profile/Logout'
import { logoutUser } from '../../redux/auth/actions';

export default function Profile() {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()


    return <div className="mx-3 pb-12 sm:pb-0 sm:mx-10 md:mx-24">
        <div className="mt-3 bg-gray-50 rounded px-8 py-16 shadow-md">
            <UserImage character={user.email.charAt(0)} />
            {user.displayName ? <div className="text-center font-semibold text-xl mt-2" >{user.displayName}</div> : null}
            {user.email ? <div className="text-center text-gray-700 text-xl mt-2" >{user.email}</div> : null}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mt-12">
            <Link to="/cart">
                <ProfileGrid
                    title="cart"
                    description="View your cart"
                >
                    <CartIcon className="h-10 w-10" />
                </ProfileGrid>
            </Link>
            <Link to="/order-history">
                <ProfileGrid
                    title="order history"
                    description="View your previous orders"
                >
                    <OrderHistoryIcon className="h-16 w-16" />
                </ProfileGrid>
            </Link>
            <Link to="/wishlist">
                <ProfileGrid
                    title="wishlist"
                    description="View and manage your wishlist"
                >
                    <HeartOutline className="fill-current text-black h-12 w-12" />
                </ProfileGrid>
            </Link>
            <ProfileGrid
                title="logout"
                description="Logout from your profile"
                onClick={() => dispatch(logoutUser())}
            >
                <LogoutIcon className="fill-current text-black h-12 w-12" />
            </ProfileGrid>
        </div>
    </div>
}