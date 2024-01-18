import roomHero from "../assets/roomHero.png"
import firstRoom from "../assets/roomFirst.jpg"
import star from "../assets/Star.png"
import thirdRoom from "../assets/roomThird.jpg"
import fourthRoom from "../assets/inside the bed room.png"
import {motion} from "framer-motion"
 
const Rooms = () => {
  return (
    <div>
    {/* Rooms Hero Section */}

    <motion.div 
    whileInView={{opacity: [0.8,1]}}
    transition={{duration: 4, delay: 0.2}}
    className="hero flex justify-center items-center">
    <div>
    <img alt="img" className="relative" src={roomHero}/>
    </div> 
    <div className="flex sm:mt-[-50px] mt:[40px] absolute justify-center gap-[50px] flex-col items-center">
    <h1 className=" sm:text-[48px] text-[16px] text-white font-semibold tracking-wider sm:flex">OUR ROOMS & PRICES</h1>
<button className="w-[100px] h-[45px] text-[12px] sm:text-[16px] sm:h-[75px] sm:w-[161px] font-semibold rounded-md bg-white text-black shadow-lg hover:bg-yellow hover:text-black">Book Now</button>
    </div>
    </motion.div>


    
    <div className="flex mt-10 justify-center items-center text-center font-semibold text-[16px] sm:text-[32px]"><h1>Room & Rates Per Night</h1></div>
    
    {/* Cards Section */}
<motion.div
whileInView={{opacity: [0.8, 1]}}
transition={{delayChildren: 0.9, duration: 4}}
className="sm:flex gap-[-40] first_part">

<div className="flex flex-col items-center sm:flex-row">
<div className="Card_container overflow-hidden flex flex-col rounded-[30px] shadow-2xl bg-white sm:h-[660px] sm:w-[470px] h-[500px] m-[50px] sm:m-[150px]">
<div className="image_container">
<img src={firstRoom} className="sm:w-[470px] rounded-t-[30px] w-[348px]"  alt="room-image" />
</div>
<div className="details">
<div className="flex justify-center gap-2 items-center mt-5 font-semibold flex-col">
<h1>Executive Room</h1>
<div className="flex"> 
<img src={star} className="w-[15px] h-[15px]" alt="star" />
<img src={star} className="w-[15px] h-[15px]" alt="star" />
<img src={star} className="w-[15px] h-[15px]"  alt="star" />
<img src={star} className="w-[15px] h-[15px]"  alt="star" />
<img src={star} className="w-[15px] h-[15px]"  alt="star" />
</div>

</div>
<div className="flex flex-col justify-center items-start mt-5 ml-10 gap-3 sm:gap-5">
<p className="text-[12px] sm:text-[16px]">Breakfast</p>
<p className="text-[12px] sm:text-[16px]">Free Wi-Fi</p>
<p className="text-[12px] sm:text-[16px]">Modern Bath</p>
<p className="text-[12px] sm:text-[16px]">Spacious Room</p>
</div>

<div className="price flex ml-[40px] mt-5 items-center gap-10 sm:gap-20">
<h1 className="text-[12px] sm:text-[16px] text-orange">400 cedis per night</h1>
<button className="bg-orange w-[90px] text-white font-semibold rounded-lg text-[12px] shadow-2xl sm:w-[120px] sm:h-[50px] hover:bg-yellow hover:text-black sm:text-[16px] h-[40px]">Book Now</button>

</div>
</div>
</div>
</div>

<div className="flex flex-col items-center sm:flex-row">
<div className="Card_container overflow-hidden flex flex-col rounded-[30px] shadow-2xl bg-white sm:h-[660px] sm:w-[470px] h-[500px] m-[50px] sm:m-[150px]">
<div className="image_container">
<img src={thirdRoom} className="sm:w-[470px] rounded-t-[30px] w-[348px]"  alt="room-image" />
</div>
<div className="details">
<div className="flex justify-center gap-2 items-center mt-5 font-semibold flex-col">
<h1>Small Room</h1>
<div className="flex"> 
<img src={star} className="w-[15px] h-[15px]" alt="star" />
<img src={star} className="w-[15px] h-[15px]" alt="star" />
<img src={star} className="w-[15px] h-[15px]"  alt="star" />
</div>

</div>
<div className="flex flex-col justify-center items-start mt-5 ml-10 gap-3 sm:gap-5">
<p className="text-[12px] sm:text-[16px]">Breakfast</p>
<p className="text-[12px] sm:text-[16px]">Free Wi-Fi</p>
<p className="text-[12px] sm:text-[16px]">Normla Washroom</p>
<p className="text-[12px] sm:text-[16px]">Water Heater</p>
</div>

<div className="price flex ml-[40px] mt-5 items-center gap-10 sm:gap-20">
<h1 className="text-[12px] sm:text-[16px] text-orange">250 cedis per night</h1>
<button className="bg-orange w-[90px] text-white font-semibold rounded-lg text-[12px] shadow-2xl sm:w-[120px] sm:h-[50px] hover:bg-yellow hover:text-black sm:text-[16px] h-[40px]">Book Now</button>

</div>
</div>
</div>
</div>


</motion.div>
    



    {/* Second Cards Section */}
    
<div className="sm:flex sm:mt-[-150px] second_part">

<div className="flex flex-col items-center sm:flex-row">
<div className="Card_container overflow-hidden flex flex-col rounded-[30px] shadow-2xl bg-white sm:h-[660px] sm:w-[470px] h-[500px] m-[50px] sm:m-[150px]">
<div className="image_container">
<img src={fourthRoom} className="sm:w-[470px] rounded-t-[30px] w-[348px]"  alt="room-image" />
</div>
<div className="details">
<div className="flex justify-center gap-2 items-center mt-5 font-semibold flex-col">
<h1>Standard Room</h1>
<div className="flex"> 
<img src={star} className="w-[15px] h-[15px]" alt="star" />
<img src={star} className="w-[15px] h-[15px]" alt="star" />
<img src={star} className="w-[15px] h-[15px]"  alt="star" />
<img src={star} className="w-[15px] h-[15px]"  alt="star" />
</div>

</div>
<div className="flex flex-col justify-center items-start mt-5 ml-10 gap-3 sm:gap-5">
<p className="text-[12px] sm:text-[16px]">Breakfast</p>
<p className="text-[12px] sm:text-[16px]">Free Wi-Fi</p>
<p className="text-[12px] sm:text-[16px]">Normal Washroom</p>
<p className="text-[12px] sm:text-[16px]">Water Heater</p>
</div>

<div className="price flex ml-[40px] mt-5 items-center gap-10 sm:gap-20">
<h1 className="text-[12px] sm:text-[16px] text-orange">300 cedis per night</h1>
<button className="bg-orange w-[90px] text-white font-semibold rounded-lg text-[12px] shadow-2xl sm:w-[120px] sm:h-[50px] hover:bg-yellow hover:text-black sm:text-[16px] h-[40px]">Book Now</button>

</div>
</div>
</div>
</div>

<div className="flex flex-col items-center sm:flex-row">
<div className="Card_container overflow-hidden flex flex-col rounded-[30px] shadow-2xl bg-white sm:h-[660px] sm:w-[470px] h-[500px] m-[50px] sm:m-[150px]">
<div className="image_container">
<img src={firstRoom} className="sm:w-[470px] rounded-t-[30px] w-[348px]"  alt="room-image" />
</div>
<div className="details">
<div className="flex justify-center gap-2 items-center mt-5 font-semibold flex-col">
<h1>Standard (Classic)</h1>
<div className="flex"> 
<img src={star} className="w-[15px] h-[15px]" alt="star" />
<img src={star} className="w-[15px] h-[15px]" alt="star" />
<img src={star} className="w-[15px] h-[15px]"  alt="star" />
<img src={star} className="w-[15px] h-[15px]"  alt="star" />
</div>

</div>
<div className="flex flex-col justify-center items-start mt-5 ml-10 gap-3 sm:gap-5">
<p className="text-[12px] sm:text-[16px]">Breakfast</p>
<p className="text-[12px] sm:text-[16px]">Free Wi-Fi</p>
<p className="text-[12px] sm:text-[16px]">Modern Bath</p>
<p className="text-[12px] sm:text-[16px]">Water Heater</p>
</div>

<div className="price flex ml-[40px] mt-5 items-center gap-10 sm:gap-20">
<h1 className="text-[12px] sm:text-[16px] text-orange">350 cedis per night</h1>
<button className="bg-orange w-[90px] text-white font-semibold rounded-lg text-[12px] shadow-2xl sm:w-[120px] sm:h-[50px] hover:bg-yellow hover:text-black sm:text-[16px] h-[40px]">Book Now</button>

</div>
</div>
</div>
</div>


</div>

<div className="flex m-3 justify-center items-center text-[12px] mt-[30px] pb-5 sm:mt-[-55px] sm:text-[26px] text-red">
<p className="text-center flex-wrap">NB: Prices are subject to change. Please confirm Prices on the booking Portal</p>
</div>

    </div>
  )
}


export default Rooms