import Sv from './../assets/solvevisual.png'
import Tx from './../assets/taxi.png'
import Us from './../assets/usfootwear.png'
import { Link } from "react-router-dom";
import Ms from './../assets/maissy.png'
import Ab from './../assets/absensi.png'

function portfolio() {
  return (
    <>
      <section class="bg-gray-100 text-white">
        <div class=" px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="flex justify-center items-center text-gray-800">
            <h2 class="text-3xl font-bold sm:text-4xl">Creative Endeavors</h2>
          </div>
          <div class="flex justify-center items-center text-center">
            <p class="mt-4 text-gray-500">
              Welcome to my "Creative Endeavors". Within this portfolio, you'll discover a collection of meticulously crafted web projects that embody the essence of modern online experiences.
            </p>
          </div>
          <div
            class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
          >
            <div class=" items-start gap-4 class">
              <img src={Sv} alt="" className='pb-8' />

              <div>
                <h2 class="text-lg font-bold text-gray-800">Solvevisual</h2>

                {/* <p class="mt-1 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora animi!
                  Quaerat, saepe?
                </p> */}
                <div className='flex flex-rows gap-4 py-4'>
                  <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Angular</span>
                  <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Tailwind</span>
                </div>
              </div>
            </div>

            <div class=" items-start gap-4">
              <img src={Us} alt="" className='pb-8' />

              <div>
                <h2 class="text-lg font-bold text-gray-800">USFootwear</h2>

                {/* <p class="mt-1 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora animi!
                  Quaerat, saepe?
                </p> */}
              </div>
              <div className='flex flex-rows gap-4 py-4'>
                  <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Laravel</span>
                  <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Bootstrap</span>
                  <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">MYSQL</span>
                </div>
            </div>

            <div class=" items-start gap-4">
              <img src={Tx} alt="" className='pb-8' />

              <div>
                <h2 class="text-lg font-bold text-gray-800">NavigaRide</h2>

                {/* <p class="mt-1 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  cumque tempore est ab possimus quisquam reiciendis tempora animi!
                  Quaerat, saepe?
                </p> */}
              </div>
              <div className='flex flex-rows gap-4 py-4'>
                  <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Angular</span>
                  <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Tailwind</span>
                  <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">ExpressJS</span>
                  <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">MYSQL</span>
                </div>
            </div>
            <div class=" items-start gap-4"></div>
            <div class="flex justify-center items-center gap-4">
              <Link to="/project" className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">See More</span>
              </Link>
            </div>
            {/* <div class=" items-start gap-4">
      <img src={Ms} alt=""  className='pb-8' />

        <div>
          <h2 class="text-lg font-bold text-gray-800">Maissy.</h2>

          <p class="mt-1 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            cumque tempore est ab possimus quisquam reiciendis tempora animi!
            Quaerat, saepe?
          </p>
        </div>
      </div>

      <div class=" items-start gap-4">
      <img src={Ab} alt=""  className='pb-8' />

        <div>
          <h2 class="text-lg font-bold text-gray-800">Absensi.</h2>

          <p class="mt-1 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            cumque tempore est ab possimus quisquam reiciendis tempora animi!
            Quaerat, saepe?
          </p>
        </div>
      </div> */}

            {/* <div class="flex items-start gap-4">
        <span class="shrink-0 rounded-lg bg-gray-800 p-4">
          <svg
            class="h-5 w-5"
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
          <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

          <p class="mt-1 text-sm text-gray-300">
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
  );
}

export default portfolio;
