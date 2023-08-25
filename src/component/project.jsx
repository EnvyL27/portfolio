import './../css/port.css'
import Sv from './../assets/solvevisual.png'
import Tx from './../assets/taxi.png'
import Us from './../assets/usfootwear.png'
import Ms from './../assets/maissy.png'
import Ab from './../assets/absensi.png'
import { Link } from "react-router-dom";

function content() {
    return (
        <>
            <section className="bg-gray-100 text-gray-800 max-sm:pt-12">
                <div className=" px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="flex justify-center items-center text-gray-800">
                        <h2 className="text-3xl font-bold sm:text-4xl">Creative Endeavors</h2>
                    </div>
                    <div className="flex justify-center items-center text-center">
                        <p className="mt-4 text-gray-500">
                            Welcome to my "Creative Endeavors". Within this portfolio, you'll discover a collection of meticulously crafted web projects that embody the essence of modern online experiences.
                        </p>
                    </div>
                    <div className="hidden lg:block main">
                        <ul className="cardds">
                            <li className="cardds_item">
                                <div className="cardd">
                                    <img src={Sv} className='py-6 v' alt="Solvevisual." />
                                    <div className="cardd_content">
                                        <h2 className="cardd_title">Solvevisual</h2>
                                        <div className="cardd_text">
                                            <p>  Where Timeless Stories Find Their Frame
                                            </p>
                                            <p>
                                                Step into a world where moments transform into memories, and emotions are frozen in time. SolveVisual is not just a photographic service company;
                                                we are your storytellers, weaving narratives through the lens. With an artistic touch and a commitment to authenticity, we specialize in capturing
                                                life's fleeting instances from candid everyday scenes to grand celebrations ensuring that each photograph holds the power to transport you back
                                                to the feeling, the laughter, and the magic of that moment. Choose SolveVisual to entrust your stories to a team of passionate photographers dedicated
                                                to crafting visual tales that will be cherished for generations.
                                            </p>
                                            <p>
                                                Angular's dynamic framework propels our web presence, delivering seamless navigation and interactive elements that engage visitors.
                                                Combined with Tailwind's sleek utility-first approach to design, our website exudes elegance and functionality, ensuring a responsive interface
                                                across all devices. Whether clients explore our portfolio on a desktop, tablet, or smartphone, they're met with a cohesive and visually appealing
                                                interface that reflects the caliber of our photographic prowess.
                                            </p>
                                            <hr />
                                            <div className='flex flex-rows gap-4 py-4'>
                                                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Angular</span>
                                                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Tailwind</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="cardds_item">
                                <div className="cardd">
                                    <img src={Us} className='py-6 px-6' alt="USFootwear." />
                                    <div className="cardd_content">
                                        <h2 className="cardd_title">USFootwear</h2>
                                        <div className="cardd_text">
                                            <p>"USFootwear" revolutionizes ecommerce by fusing brand sophistication with cutting-edge tech.
                                                With Laravel and Bootstrap at its core, the platform delivers fluid interactions and appealing design.
                                                Supported by MySQL, data remains secure as users explore a curated range of premium footwear.
                                                This synergy of style and innovation propels the ecommerce landscape to new heights.
                                            </p>
                                            <p>At the heart of "USFootwear" lies a blend of artistry and technology. Leveraging Laravel and Bootstrap,
                                                the platform harmonizes seamless interactions with stunning visuals. Meanwhile, MySQL ensures data integrity,
                                                enabling users to explore a meticulously curated array of high-quality footwear. This fusion of innovation and elegance reshapes the ecommerce landscape,
                                                embodying a future where style meets cutting-edge functionality.
                                            </p>
                                            <hr />
                                            <div className='flex flex-rows gap-4 py-4'>
                                                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Laravel</span>
                                                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Bootstrap</span>
                                                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">MYSQL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li className="cardds_item">
                                <div className="cardd">
                                    <img src={Tx} className='py-6 px-6' alt="Taxi app." />
                                    <div className="cardd_content">
                                        <h2 className="cardd_title">NavigaRide</h2>
                                        <div className="cardd_text">
                                            <p>Introducing NavigaRide, a collaborative venture born from the ingenuity of me and my <Link to='https://github.com/Shankara21' className='text-indigo-400'>friend</Link>,
                                                uniting the realms of technology and transportation. This groundbreaking taxi application,
                                                meticulously crafted using Angular, Express.js, and MySQL, is more than just a ride-hailing platform; it's an embodiment of innovation, convenience, and connectivity.
                                            </p>
                                            <hr />
                                            <div className='flex flex-rows gap-4 py-4'>
                                                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Angular</span>
                                                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Tailwind</span>
                                                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">ExpressJS</span>
                                                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">MYSQL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div
                        className="hidden max-sm:block mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
                    >
                        <div className=" items-start gap-4 className">
                            <img src={Sv} alt="" className='pb-8' />

                            <div>
                                <h2 className="text-lg font-bold text-gray-800">Solvevisual</h2>

                                {/* <p className="mt-1 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora animi!
                  Quaerat, saepe?
                </p> */}
                                <div className='flex flex-rows gap-4 py-4'>
                                    <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Angular</span>
                                    <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Tailwind</span>
                                </div>
                            </div>
                        </div>

                        <div className=" items-start gap-4">
                            <img src={Us} alt="" className='pb-8' />

                            <div>
                                <h2 className="text-lg font-bold text-gray-800">USFootwear</h2>

                                {/* <p className="mt-1 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora animi!
                  Quaerat, saepe?
                </p> */}
                            </div>
                            <div className='flex flex-rows gap-4 py-4'>
                                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Laravel</span>
                                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Bootstrap</span>
                                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">MYSQL</span>
                            </div>
                        </div>

                        <div className=" items-start gap-4">
                            <img src={Tx} alt="" className='pb-8' />

                            <div>
                                <h2 className="text-lg font-bold text-gray-800">NavigaRide</h2>

                                {/* <p className="mt-1 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora animi!
                  Quaerat, saepe?
                </p> */}
                            </div>
                            <div className='flex flex-rows gap-4 py-4'>
                                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Angular</span>
                                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Tailwind</span>
                                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">ExpressJS</span>
                                <span className="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">MYSQL</span>
                            </div>
                        </div>
                        <div className=" items-start gap-4"></div>
                        {/* <div className="flex justify-center items-center gap-4">
                            <Link to="/project" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                <span className="relative text-black group-hover:text-white">See More</span>
                            </Link>
                        </div> */}
                        {/* <div className=" items-start gap-4">
      <img src={Ms} alt=""  className='pb-8' />

        <div>
          <h2 className="text-lg font-bold text-gray-800">Maissy.</h2>

          <p className="mt-1 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            cumque tempore est ab possimus quisquam reiciendis tempora animi!
            Quaerat, saepe?
          </p>
        </div>
      </div>

      <div className=" items-start gap-4">
      <img src={Ab} alt=""  className='pb-8' />

        <div>
          <h2 className="text-lg font-bold text-gray-800">Absensi.</h2>

          <p className="mt-1 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            cumque tempore est ab possimus quisquam reiciendis tempora animi!
            Quaerat, saepe?
          </p>
        </div>
      </div> */}

                        {/* <div className="flex items-start gap-4">
        <span className="shrink-0 rounded-lg bg-gray-800 p-4">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            ></path>
          </svg>
        </span>

        <div>
          <h2 className="text-lg font-bold">Lorem, ipsum dolor.</h2>

          <p className="mt-1 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            cumque tempore est ab possimus quisquam reiciendis tempora animi!
            Quaerat, saepe?
          </p>
        </div>
      </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default content