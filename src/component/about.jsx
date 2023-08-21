// import Bg from "../../public/blurry-gradient-haikei.png";
import Bg from "../../public/bg.jpg";
import Nobg from "../../public/nobg.png";
import { Link } from "react-router-dom";
import './../css/card.css'

function content() {
    return (
        <>
            <div className="hero z-10 min-h-screen bg-gray-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-2/5 pl-20 hidden lg:block">
                    <span alt="Mythrill" target="_blank">
                            <div class="card">
                                <div class="wrapper">
                                    <img src={Bg} class="cover-image grayscale hover:grayscale-0" />
                                </div>
                                <img src={Nobg} class="character" />
                            </div>
                        </span>
                    </div>
                    <div className="w-3/5">
                        <div className="grid grid-cols-1">
                            <h1 className="text-5xl max-sm:text-l font-bold text-gray-900 py-4">My Name is <span className="text-indigo-600">Ahmad Farrel</span></h1>
                            <p className="text-xl hidden lg:block text-gray-900 py-4"> I'm in the thick of my web development journey at <Link to="https://www.polinema.ac.id/"><span className="text-indigo-600 font-medium">State Polytechnic of Malang</span></Link>, currently cruising through my 7th semester. Beyond the world of coding and design, I'm a gamer at heart, there's something about those digital landscapes that sparks my creativity and keeps me exploring. I'm all about soaking up knowledge too; you'll often find me glued to video tutorials, fine-tuning my skills and staying ahead of the curve with the latest industry trends. Right now, I'm diving headfirst into the real-world web development scene through an internship at <Link to="https://www.aio.co.id/"><span className="text-indigo-600 font-medium">PT Amerta Indah Otsuka</span></Link>, where I'm weaving together the insights from my studies with hands-on experience!</p>

                            <p className="text-xl hidden max-sm:block text-gray-900 py-4">
                                I'm in my 7th semester at <Link to="https://www.polinema.ac.id/"><span className="text-indigo-600 font-medium">State Polytechnic of Malang</span></Link>, immersed in web development. A gaming enthusiast and knowledge seeker, I'm diving into real-world web development via an internship at <Link to="https://www.aio.co.id/"><span className="text-indigo-600 font-medium">PT Amerta Indah Otsuka</span></Link>, blending studies with hands-on experience.</p>

                        </div>

                        {/* <h1 className="text sec-text text-4xl font-bold text-gray-900 py-6"> </h1> */}
                        {/* <p className="py-4 font-medium text-gray-800">
                            I'm Ahmad Farrel, front-end enthusiast turning designs into web. Coding, gaming, and creating captivating experiences.
                            Currently a student at <a className="text-indigo-700 hover:text-indigo-400 duration-200" href="https://www.polinema.ac.id">State Polytechnic of Malang</a> and doing
                            internship at <a href="https://www.aio.co.id" className="text-indigo-700 hover:text-indigo-400 duration-200">PT. Amerta Indah Otsuka!</a> 
                        </p> */}
                        <Link to="#_" className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">Download CV</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default content