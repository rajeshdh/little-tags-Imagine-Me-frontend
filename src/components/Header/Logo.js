import { Link } from "react-router-dom";

function Logo() {
  return <Link to="/"
    className="text-2xl font-bold leading-relaxed py-2 whitespace-no-wrap uppercase text-sp-heading-blue flex items-center"
  >
    <img className="rounded-full mr-1" width="25" height="25" src="/logo.png" alt="shopay logo" />
    shopay
    </Link>
}
export default Logo;