function NavButton({ className, children }) {
  return (
    <button className={`${className} text-black font-bold py-6 pl-6 rounded inline-flex items-center uppercase`}>
      {children}
    </button>
  )
}
export default NavButton;