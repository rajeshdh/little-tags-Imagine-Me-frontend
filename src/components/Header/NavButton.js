function NavButton({ className, children }) {
  return (
    <button className={`${className} text-black font-bold rounded inline-flex items-center uppercase focus:outline-none hover:text-blue-400 focus:text-blue-400`}>
      {children}
    </button>
  )
}
export default NavButton;