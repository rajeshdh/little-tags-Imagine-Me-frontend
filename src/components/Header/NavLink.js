function NavLink({ className, children }) {
  return (
    <a href="#" className={`${className} text-black font-bold hover:text-blue-500 pl-6 uppercase`}>
      {children}
    </a>
  )
}
export default NavLink;