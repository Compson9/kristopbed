import ImageSlider from "../Components/ImageSlider"
import hero from "../assets/inside the bed room.png"
import events from "/images/events.jpg"
import house from "/images/g3.jpg"
import {motion} from "framer-motion"

const Home = () => {
  return (

    <>
    <div>
    {/* Home Hero Section */}
    <motion.div 
    whileInView={{opacity: [0.7,1]}}
    transition={{duration: 3, delayChildren: 0.2}}
    className="hero flex justify-center items-center">
    <div>
    <img alt="img" className="relative" src={hero}/>
    </div> 
    <div className="flex sm:mt-[-50px] mt:[40px] absolute justify-center gap-[50px] flex-col items-center">
    <h1 className=" text-[48px] text-white hidden font-black tracking-wider sm:flex">KRISTOP BED AND BREAKFAST</h1>
<button className="w-[100px] h-[45px] text-[12px] sm:text-[16px] sm:h-[75px] sm:w-[161px] font-semibold rounded-md bg-white text-black shadow-lg hover:bg-yellow hover:text-black">Book Now</button>
    </div>
    </motion.div>

    {/* Our Gallery Section */}

    <div className="flex items-center mt-[40px] justify-center font-semibold  text-[16px] sm:text-[36px]"><h1>Our Gallery</h1></div>
    <motion.div 
    whileInView={{opacity: [0.5,1]}}
    transition={{duration: 3, delayChildren: 0.2}}
    >
    <ImageSlider/>
    </motion.div>
{/* Events and wedding on the home Page */}
    <motion.div
    whileInView={{opacity: [0.5,1]}}
    transition={{duration: 3, delayChildren: 0.2}}
    className="flex flex-col mt-5 justify-center items-center ">
    <div><h1 className="font-semibold pb-[20px] text-[16px] sm:text-[36px]">Your Premier Space for Events and Weddings</h1></div>
    <div className="max-w-[1400px] h-[500px] sm:h-[780px] w-full"><img src={events} /></div>
    <div className="flex items-center justify-center mt-[-320px]"><button className="w-[140px] h-[45px] text-[12px] sm:text-[16px] sm:h-[75px] sm:w-[185px] font-semibold rounded-md bg-yellow text-black shadow-lg hover:bg-white hover:text-black">Book a Space Now</button></div>
    </motion.div>

   </div>
   {/* About Area on the home Page */}
   <motion.div
   whileInView={{opacity: [0.5,1]}}
   transition={{duration: 3, delayChildren: 0.2}}
   className="mt-[100px] flex m-7 gap-10 flex-col sm:mt-[500px] sm:flex-row">
   <div className="flex flex-col gap-6">
   <div><h1 className="sm:text-[30px]">About kristop <span className="text-red">bed and breakfast</span></h1></div>
   <div><img src={house}/></div>
   </div>
   <div className="sm:mt-[70px] sm:w-[4200px] sm:text-[20px] text-[12px] sm:leading-[50px] leading-[30px] opacity-75"><p className="text-justify">Discover the essence of luxury and comfort at Kristop Bed and Breakfast, nestled in the heart of vibrant Kasoa, Accra. Our boutique hotel offers tastefully designed executive rooms, 24-hour high-speed Wi-Fi, stringent security, a well-stocked mini bar, and expansive grounds for memorable events, ensuring an unforgettable experience in a serene and sophisticated setting. Whether you are traveling for business or leisure, Kristop Bed and Breakfast is your oasis of tranquility in Accra, where every detail is crafted to make your stay exceptional.
   </p></div>
   </motion.div>
    </>
 
  )
}

export default Home