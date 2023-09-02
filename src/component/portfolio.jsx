import Sv from './../assets/solvevisual.png'
import Tx from './../assets/taxi.png'
import Us from './../assets/usfootwear.png'
import { Link } from "react-router-dom";
import Ms from './../assets/maissy.png'
import Ab from './../assets/absensi.png'

function portfolio() {
  return (
    <>
      <section className="bg-gray-100 text-white">
        <div className=" px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="flex justify-center items-center text-gray-800">
            <h2 className="text-3xl font-bold sm:text-4xl">Creative Endeavors</h2>
          </div>
          <div className="flex justify-center items-center text-center">
            <p className="mt-4 text-gray-500">
              Welcome to my "Creative Endeavors". Within this portfolio, you'll discover a collection of meticulously crafted web projects that embody the essence of modern online experiences.
            </p>
          </div>
          <div data-aos="fade-up"
            data-aos-duration="3000"
            className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
          >
            <a href="https://solvevisual.netlify.app" className=" items-start gap-4 className">
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
            </a>

            <a href="https://usfootwear.shop" className=" items-start gap-4">
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
            </a>

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
          </div>
          <div className=" items-start gap-4"></div>
            <div className="flex justify-center items-center gap-4">
              <Link to="/project" className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">See More</span>
              </Link>
            </div>
        </div>
      </section>


    </>
  );
}

export default portfolio;
