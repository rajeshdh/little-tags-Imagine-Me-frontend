import { Link } from "react-router-dom";

function NavLink({ className, children, to }) {
  return (
    <Link to={to} className={`${className} text-black font-bold hover:text-blue-500 pl-6 uppercase`}>
      {children}
    </Link>
  )
}
export default NavLink;