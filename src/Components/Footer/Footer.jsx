import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import Tiktok from "../../assets/TikTok.png"
import whatsapp from "../../assets/whatsapp.png"
import location from "../../assets/Location.png"
import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <>
      <footer className="bg-black h-[350px] sm:flex sm:gap-[150px] p-[50px] sm:w-full]">

        {/* KRISTOP LOGO ON THE FOOTER */}
        <div className="flex gap-[70px] sm:gap-[100px]">
          <div className="flex flex-col">
            <h1 className="text-white text-[16px] font-semibold sm:text-[32px]">KRISTOP</h1>
            <p className="text-white text-[9px] sm:text-[12px] opacity-60">BED AND BREAKFAST</p>
          </div>
          <div className="">
            <div>
              <h1 className="text-white">Follows <span className="text-yellow">Us</span></h1>
              <p className="text-white text-[8px] sm:text-[12px] opacity-70">SOCIAL MEDIA HANDLES</p>
            </div>
            <div className="flex mt-[20px] gap-[28px]">
              <Link to={"https://www.facebook.com/profile.php?id=61552034075923&mibextid=ZbWKwL"} target="_blank"><img className="cursor-pointer" src={facebook} alt="facebook" /></Link>
              <Link to={"https://www.tiktok.com/@kristop.bedbreakfast?_t=8h1SqGx9qJp&_r=1"} target="_blank"><img className="cursor-pointer" src={Tiktok} alt="facebook" /></Link>
              <Link to={"https://instagram.com/kristopbed.breakfast?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"} target="_blank"><img className="cursor-pointer" src={instagram} alt="facebook" /></Link>
              <Link to={"https://wa.me/message/P2CASS5BBY7EO1"} target="_blank"><img className="cursor-pointer" src={whatsapp} alt="facebook" /></Link>
            </div>
          </div>
        </div>



        {/* last section on the logos ON THE FOOTER */}
        <div className="flex pt-5 sm:pt-0 sm:gap-[100px] gap-[40px]">
          <div className="flex gap-3 pt-7 sm:pt-0 flex-col">
            <h1 className="text-yellow w-[120px] text-[16px] sm:text-[24px]">CALL US </h1>
            <p className="text-white text-[10px] sm:text-[16px]">+233 (0)50 338 3951</p>
            <p className="text-white text-[10px] sm:text-[16px]">+233 (0)20 198 2591</p>
          </div>
          <div className="flex pt-5 sm:pt-0 flex-col">

            <Link to={"https://maps.google.com?q=5.5320020,-0.4505330&hl=en-GH&gl=gh&entry=gps&lucs=,47071704&g_st=ic"} target="_blank">
              <div className=" flex gap-2 items-center">
                <img src={location} alt="location" />
                <h1 className="text-white font-semibold text-[10px] sm:text-[12px] opacity-80">KASOA KRISPO CITY</h1></div>
            </Link>

            <div className=" pt-3 sm:pt-5"><p className="text-[10px] sm:text-[14px] text-white opacity-60">Behind alloy washing bay & adjacent former municipal assembly</p></div>
            <div className="pt-5 opacity-80"><p className="text-yellow opacity-70 text-[10px] sm:text-[16px]">Email: kristopbedbreakfasfast@gmail.com</p></div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer