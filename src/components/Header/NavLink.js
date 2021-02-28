function NavLink({children}){
  return (
    <a href="#" className=" text-black font-bold hover:text-blue-500 uppercase p-1 md:p-6 ">
      {children}
    </a>
  )
}
export default NavLink;