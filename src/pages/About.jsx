import compound from "../assets/compound.jpg"
import house from "/images/g3.jpg"



const About = () => {
  return (
    <div>
    
    <div>
    <img src={compound} alt="compound" />
    </div>

    <div className="mt-[20px] flex m-7 gap-10 flex-col sm:mt-[100px] sm:flex-row">
    <div className="flex flex-col gap-6">
    <div className="flex items-center justify-center"><h1 className="sm:text-[30px]">About kristop <span className="text-red">bed and breakfast</span></h1></div>
    <div><img src={house}/></div>
    </div>
    <div className="sm:mt-[70px] sm:w-[4200px] sm:text-[20px] text-[12px] sm:leading-[50px] leading-[30px] opacity-75"><p className="text-justify">Discover the essence of luxury and comfort at Kristop Bed and Breakfast, nestled in the heart of vibrant Kasoa, Accra. Our boutique hotel offers tastefully designed executive rooms, 24-hour high-speed Wi-Fi, stringent security, a well-stocked mini bar, and expansive grounds for memorable events, ensuring an unforgettable experience in a serene and sophisticated setting. Whether you're traveling for business or leisure, Kristop Bed and Breakfast is your oasis of tranquility in Accra, where every detail is crafted to make your stay exceptional.
    </p></div>
    </div>

    <div className="flex flex-col justify-center items-center gap-5 sm:mt-[90px] m-10  mt-[70px] m">
    <p className="text-center text-[12px] sm:text-[24px]">We’ll love to hear your feedback. Kindly Contact us on all Platforms</p>
    <p  className="text-orange text-[14px] sm:text-[20px]">THANK YOU FOR CHOOSING US </p>
    </div>
    
    </div>
  )
}

export default About