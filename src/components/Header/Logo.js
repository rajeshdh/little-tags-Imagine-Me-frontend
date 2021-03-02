import { Link } from "react-router-dom";

function Logo() {
  return <Link to="/"
    className="text-2xl font-bold leading-relaxed py-2 whitespace-no-wrap uppercase text-sp-heading-blue flex items-center"
  >
    <img className="w-6 h-6 rounded-full" src="/logo.png" alt="shopay logo" />
    shopay
    </Link>
}
export default Logo;