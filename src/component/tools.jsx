import Html from "./../../public/html.png";
import Css from "./../../public/css.png";
import Js from "./../../public/js.png";
import Prm from "./../../public/pr.png";
import Ae from "./../../public/ae.png";
import Ps from "./../../public/ps.png";
import Ai from "./../../public/ai.png";
import Fm from "./../../public/figma.png";

function tools() {
  return (
    <>
    <div className='bg-gray-100 py-6 pb-28'>
      <div className="title">
        <div className="text-3xl text-gray-800 font-extrabold text-center font-montserrat">
          My Expertise
        </div>
        <div className="flex items-center justify-center mt-1">
          <hr className="border-2 border-t-2 border-gray-800 w-52" />
        </div>
      </div>
      <div  className="flex items-start gap-2 mt-10 lg:px-48 justify-evenly max-md:flex-wrap">
        <div className='w-full text-center items-center' >
          <p className='text-xl font-bold text-center text-gray-800'>Web Developer</p>
          <div className="grid grid-cols-3 gap-3 mt-14 place-items-center">
              <img src={Html} alt="" className='duration-300 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none w-[50%]' />
              <img src={Css} alt="" className='duration-300 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none w-[50%]' />
              <img src={Js} alt=""className='duration-300 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none w-[50%]'/>
            
          </div>
        </div>
        <div class="divider  divider-horizontal"></div>
        <div className='w-full text-center items-center'  >
          <p className='text-xl font-bold text-gray-800'>UI / UX Design</p>
          <div className="grid grid-cols-3 gap-3 mt-14 place-items-center">
            <img src={Ps} alt="" className='duration-300 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none w-[50%]' />
            <img src={Ai} alt="" className='duration-300 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none w-[50%]' />
            <img src={Fm} alt="" className='duration-300 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none w-[50%]' />
          </div>
        </div>
        <div class="divider divider-horizontal  max-md:hidden"></div>
        <div className="divider md:hidden"></div>
        <div className='w-full text-center items-center' >
          <p className='text-xl font-bold text-gray-800 '>Video Editing</p>
          <div className="grid grid-cols-3 gap-3 mt-14 place-items-center">
            <img src={Prm} alt="" className='duration-300 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none w-[50%]' />
            <img src={Ae} alt="" className='duration-300 ease-in-out cursor-pointer filter grayscale hover:scale-102 hover:filter-none w-[50%]' />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default tools;
