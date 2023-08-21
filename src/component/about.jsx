// import Bg from "../../public/blurry-gradient-haikei.png";
import Me from "../../public/IMG_5291.jpg";

function content() {
    return (
        <>
          <div className="hero z-10 min-h-screen bg-gray-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-2/5 pl-20 hidden lg:block">
                        <img className="grayscale hover:grayscale-0 duration-300" src={Me} alt="" />
                    </div>
                    <div className="w-3/5">
                        <div className="grid grid-cols-1">
                            <h1 className="hidden lg:block text-5xl font-bold text-gray-900 py-4">My Name is <span className="text-indigo-600">Ahmad Farrel</span></h1>
                            <p className="hidden lg:block text-xl text-gray-900 py-4"> I'm in the thick of my web development journey at State Polytechnic of Malang, currently cruising through my 7th semester. Beyond the world of coding and design, I'm a gamer at heart, there's something about those digital landscapes that sparks my creativity and keeps me exploring. I'm all about soaking up knowledge too; you'll often find me glued to video tutorials, fine-tuning my skills and staying ahead of the curve with the latest industry trends. Right now, I'm diving headfirst into the real-world web development scene through an internship at PT Amerta Indah Otsuka, where I'm weaving together the insights from my studies with hands-on experience!</p>
                            <h1 className="hidden max-sm:block text-5xl font-bold text-gray-900 py-4">Hello! I'm <span className="text-indigo-500">Ahmad Farrel</span></h1>

                        </div>
                    
                        {/* <h1 className="text sec-text text-4xl font-bold text-gray-900 py-6"> </h1> */}
                        {/* <p className="py-4 font-medium text-gray-800">
                            I'm Ahmad Farrel, front-end enthusiast turning designs into web. Coding, gaming, and creating captivating experiences.
                            Currently a student at <a className="text-indigo-700 hover:text-indigo-400 duration-200" href="https://www.polinema.ac.id">State Polytechnic of Malang</a> and doing
                            internship at <a href="https://www.aio.co.id" className="text-indigo-700 hover:text-indigo-400 duration-200">PT. Amerta Indah Otsuka!</a> 
                        </p> */}
                        <a href="#_" className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">Download CV</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default content