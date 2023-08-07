// import Bg from "../../public/blurry-gradient-haikei.png";
import Me from "../../public/IMG_5291.jpg";
import "../css/style.css";
import "../css/animation.css";
// import Svg from './../../public/blob-scene-haikei.svg'

function hero() {
    return (
        <>
            <div className="hero z-10 min-h-screen bg-gray-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-2/5 pl-20">
                        <img className="grayscale hover:grayscale-0 duration-300" src={Me} alt="" />
                    </div>
                    <div className="w-3/5">
                        <div className="flex">
                            <h1 className="text-5xl font-bold text-gray-900">Hey there!</h1>
                        </div>
                        <p className="py-4 font-medium text-gray-800">
                            I'm Ahmad Farrel, front-end enthusiast turning designs into web. Coding, gaming, and creating captivating experiences.
                            Currently a student at <a className="text-indigo-700 hover:text-indigo-400 duration-200" href="https://www.polinema.ac.id">State Polytechnic of Malang</a> and doing
                            internship at <a href="https://www.aio.co.id" className="text-indigo-700 hover:text-indigo-400 duration-200">PT. Amerta Indah Otsuka!</a> 
                        </p>
                        <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
                            <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span class="relative text-black group-hover:text-white">Download CV</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default hero;
