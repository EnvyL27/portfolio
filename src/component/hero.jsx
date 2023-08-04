// import Bg from "../../public/blurry-gradient-haikei.png";
import Me from "../../public/IMG_5291.jpg";
import "../css/style.css";
import "../css/animation.css";
// import Svg from './../../public/blob-scene-haikei.svg'

function hero() {
  return (
    <>
      <div className="hero min-h-screen bg-gray-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-2/5 pl-20">
            <img src={Me} className="grayscale hover:grayscale-0 duration-300 max-w-sm  shadow-2xl" />
          </div>
          <div className="w-3/5">
            <div className="flex">
              <h1 className=" text-5xl font-bold text-gray-900">Hey there!</h1>
              {/* <p className="handwave text-5xl">🤙</p> */}
            </div>
            <p className="py-6 font-medium text-gray-800">
              I'm Ahmad Farrel, Front-end enthusiast turning designs into web
              magic. Coding, gaming, and creating captivating experiences.
              Currently a student at State Polytechnic of Malang and doing
              internship at PT. Amerta Indah Otsuka!
            </p>
            <a
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Button Text
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default hero;
