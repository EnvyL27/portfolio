// import Bg from "../../public/blurry-gradient-haikei.png";
import Me from "../../public/IMG_5291.jpg";
import "../css/style.css";
import "../css/animation.css";
import { useEffect } from "react"
import Content from "./content";
import Tools from "./tools";
import Port from "./portfolio";
import { Link } from "react-router-dom";
// import Svg from './../../public/blob-scene-haikei.svg'

function hero() {
    useEffect(() => {
        const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Fullstack Developer";
            }, 0);
            setTimeout(() => {
                text.textContent = "UI/UX Designer";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Video Editor";
            }, 8000);
        }

        textLoad();
        setInterval(textLoad, 12000);
    })
    return (
        <>
            <div className="hero z-10 min-h-screen bg-gray-100">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    {/* <div className="w-2/5 pl-20 hidden lg:block">
                        <img className="grayscale hover:grayscale-0 duration-300" src={Me} alt="" />
                    </div> */}
                    <div className="w-5/5">
                        <div className="flex">
                            <h1 className="hidden lg:block text-5xl font-bold text-gray-900 py-4 pr-6">Hi!</h1>
                            <img className="hidden lg:block" src = "https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width = "80px" />
                          
                            <h1 className="hidden max-sm:block text-5xl font-bold text-gray-900 py-4">Hello! I'm <span className="text-indigo-500">Ahmad Farrel</span></h1>
                        </div>
                        
                        <h1 className="hidden lg:block text-5xl font-bold text-gray-900 py-4 lg:py-0">I'm Ahmad Farrel</h1>
                        
                        <div className="container pb-4 hidden lg:block">
                            <span className="text first-text">a </span>
                            <span className="text sec-text"></span>
                        </div>
                        {/* <h1 className="text sec-text text-4xl font-bold text-gray-900 py-6"> </h1> */}
                        {/* <p className="py-4 font-medium text-gray-800">
                            I'm Ahmad Farrel, front-end enthusiast turning designs into web. Coding, gaming, and creating captivating experiences.
                            Currently a student at <a className="text-indigo-700 hover:text-indigo-400 duration-200" href="https://www.polinema.ac.id">State Polytechnic of Malang</a> and doing
                            internship at <a href="https://www.aio.co.id" className="text-indigo-700 hover:text-indigo-400 duration-200">PT. Amerta Indah Otsuka!</a> 
                        </p> */}
                        <Link to="/about" className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">More about me</span>
                        </Link>
                    </div>
                </div>
            </div>
            <Content />

            <Tools />
            <Port />
        </>
    );
}

export default hero;
