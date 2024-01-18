import logo from "/src/assets/logo.png"
import Menu from "/src/assets/Menu.png"
import { Link } from "react-router-dom"
import { useState } from "react"




const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleClick = () => {
    setOpenMenu(!openMenu)
  }

  const closeMenu = () => {
    setOpenMenu(false)
  }



  return (
    <>

      <nav className="flex justify-between items-center gap-[140px] p-5">
        <div>
          <Link to={"/"}>
            <img src={logo} />
          </Link>


          <div className={`min-h-screen gap-[50px] fixed top-0 h-full z-20 ${openMenu ? "left-0" : "-left-full"} transition-all duration-1000 w-full bg-white`}>
            <div className="ml-[350px] cursor-pointer py-5">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" onClick={handleClick} strokeWidth={1.5} stroke="currentColor" className="w-10 text-black hover:text-orange h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

            </div>
            <div className="flex items-center transition-all duration-1000 gap-[30px] my-5 flex-col">
              <Link onClick={closeMenu} className="hover:font-semibold" to={"/"}>Home</Link>
              <Link onClick={closeMenu} className="hover:font-semibold" to={"/rooms"}>Rooms & Prices</Link>
              <Link onClick={closeMenu} className="hover:font-semibold" to={"/facilities"}>Facilities</Link>
              <Link onClick={closeMenu} className="hover:font-semibold" to={"/about"}>About Us</Link>
            </div>
            <div className="flex justify-center items-centers">
              <Link to={"https://tailwindcss.com/docs/font-weight"} target="_blank">
                <button className="w-[145px] h-[50px] block md:hidden rounded-md bg-orange text-white shadow-md hover:bg-yellow hover:text-black">Book Now</button>
              </Link>
            </div>

          </div>


        </div>
        <div className="sm:flex hidden gap-[80px]">
          <Link className="hover:text-orange" to={"/"}>Home</Link>
          <Link className="hover:text-orange" to={"/rooms"}>Rooms & Prices</Link>
          <Link className="hover:text-orange" to={"/facilities"}>Facilities</Link>
          <Link className="hover:text-orange" to={"/about"}>About Us</Link>
        </div>
        <div>
          <Link to={"https://tailwindcss.com/docs/font-weight"} target="_blank">
            <button className="w-[145px] h-[50px] hidden sm:block rounded-md bg-orange text-white shadow-md hover:bg-yellow hover:text-black">Book Now</button>
          </Link>
        </div>
        <div>
          <img className="sm:hidden cursor-pointer flex" onClick={handleClick} style={{ width: "90px", height: "30px" }} src={Menu} />
        </div>
      </nav>


    </>
  )
}

export default Navbar