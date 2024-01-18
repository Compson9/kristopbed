import mainBuilding from "../assets/mainBuilding.jpg"
import compound from "../assets/compound.jpg"
import miniBar from "../assets/mini_bar.jpg"
import bath from "../assets/modern-bath.jpg"
import washroom from "../assets/EVE.jpg"

const Facilities = () => {
  return (
    <>
    <div>
    <div className="image_building">
    <img src={mainBuilding} alt="main" />
    </div>
    <div className="heading_facilities flex justify-center items-center font-medium sm:mt-[25px] mt-[15px] sm:font-semibold text-[16px] sm:text-[40px]">
    <h1>FACILITIES</h1>
    </div>
<div className="main_container mt-5 pb-4 sm:m-[120px]">
<div className="first_row_images sm:flex-row flex sm:gap-[100px] gap-14 flex-col">
<div className="first_image flex-col gap-5 flex items-center sm:flex">
<img src={compound} className="w-[300px] sm:w-[528px] sm:h-[400px]" alt="" />
<p className="font-medium text-[12px] sm:text-[24px]">Parking Space</p>
</div>
<div className="second_image flex-col gap-5 flex items-center sm:flex">
<img src={bath} className="w-[300px] sm:w-[528px] sm:h-[400px]" alt="" />
<p className="font-medium text-[12px] sm:text-[24px]">Modern Bath</p>
</div>


</div>
<div className="second_row_images sm:mt-[90px] mt-5 sm:flex-row flex sm:gap-[100px] gap-14 flex-col">
<div className="first_image flex-col gap-5 flex items-center sm:flex">
<img src={washroom} className="w-[300px] sm:w-[528px] sm:h-[400px]" alt="" />
<p className="font-medium text-[12px] sm:text-[24px]">Events Space</p>
</div>
<div className="second_image flex-col gap-5 flex items-center sm:flex">
<img src={miniBar} className="w-[300px] sm:w-[528px] sm:h-[400px]" alt="" />
<p className="font-medium text-[12px] sm:text-[24px]">Mini Bar</p>
</div>
</div>
</div>
    
    </div>
    </>
  )
}

export default Facilities