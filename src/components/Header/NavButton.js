function NavButton({children}){
  return (
    <button className=" text-black font-bold p-6 rounded inline-flex items-center uppercase">
      {children}
    </button>
  )
}
export default NavButton;