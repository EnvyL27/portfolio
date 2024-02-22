// import Bg from "../../public/blurry-gradient-haikei.png";
import Bg from "../../public/bg.jpg";
import Nobg from "../../public/nobg.png";
import { Link } from "react-router-dom";
import { Document, Page } from 'react-pdf';
import './../css/card.css'


function content() {
    return (
        <>
            <div className="lg:px-36 hero z-10 min-h-screen bg-gray-100 max-sm:py-12 md:pl-14">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-2/5 pl-20 hidden lg:block">
                    <span alt="Mythrill" target="_blank">
                            <div className="card">
                                <div className="wrapper">
                                    <img src={Bg} className="cover-image grayscale hover:grayscale-0" />
                                </div>
                                <img src={Nobg} className="character" />
                            </div>
                        </span>
                    </div>
                    <div className="w-3/5">
                        <div className="grid grid-cols-1">
                            <h1 className="text-5xl max-sm:text-l font-bold text-gray-900 py-4">My Name is <span className="text-indigo-600">Ahmad Farrel</span></h1>
                            {/* <div className="absolute hidden lg:block icon under lg:pl-80 pt-14 lg:mt-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-56 md:w-80" fill="none" viewBox="0 0 346 24"><path stroke="#22A9F5" stroke-width="3" d="M1 18.61C111.19 1.714 209.119-2.292 294.787 6.59c2.103 1.37 1.447 2.211-1.968 2.525l-70.542 10.677c-1.016 1.455-.725 2.272.875 2.45 35.248-2.243 75.975-5.044 122.18-8.401" opacity="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
                                </svg>
                            </div> */}
                            <p className="text-xl hidden lg:block text-gray-900 py-4"> I'm in the thick of my web development journey at <Link to="https://www.polinema.ac.id/"><span className="text-indigo-600 font-medium">State Polytechnic of Malang</span></Link>, currently cruising through my 8th semester. Beyond the world of coding and design, I'm a gamer at heart, there's something about those digital landscapes that sparks my creativity and keeps me exploring. I'm all about soaking up knowledge too; you'll often find me glued to video tutorials, fine-tuning my skills and staying ahead of the curve with the latest industry trends.</p>

                            <p className="text-xl hidden max-sm:block text-gray-900 py-4">
                                I'm in my 7th semester at <Link to="https://www.polinema.ac.id/"><span className="text-indigo-600 font-medium">State Polytechnic of Malang</span></Link>, immersed in web development. A gaming enthusiast and knowledge seeker, I'm diving into real-world web development via an internship at <Link to="https://www.aio.co.id/"><span className="text-indigo-600 font-medium">PT Amerta Indah Otsuka</span></Link>, blending studies with hands-on experience.</p>

                        </div>
                        
                        <Link to="https://read.cv/uglysquid" className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="relative text-black group-hover:text-white">Curriculum Vitae</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default content