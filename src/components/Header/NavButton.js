function NavButton({children}){
  return (
    <button className=" text-black font-bold py-6 pl-6 rounded inline-flex items-center uppercase">
      {children}
    </button>
  )
}
export default NavButton;