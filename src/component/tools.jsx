import Html from "./../../public/html.png";
import Css from "./../../public/css.png";
import Js from "./../../public/js.png";
import Prm from "./../../public/pr.png";
import Ae from "./../../public/ae.png";
import Ps from "./../../public/ps.png";
import Ai from "./../../public/ai.png";

function tools() {
  return (
    <>
      <section className="bg-gray-100 text-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:py-12 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-gray-800 text-4xl font-semibold">TOOLS</h1>
            </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="grid flex-grow h-32 card bg-transparent place-items-center">
              <div className="flex justify-center space-x-4">
                <img className="h-20 grayscale hover:grayscale-0 duration-300" src={Html} alt="" />
                <img className="h-20 grayscale hover:grayscale-0 duration-300" src={Css} alt="" />
                <img className="h-20 grayscale hover:grayscale-0 duration-300" src={Js} alt="" />
              </div>
            </div>
            <div className="grid flex-grow h-32 card bg-transparent place-items-center">
              <div className="flex justify-center space-x-4">
                <img className="h-20 grayscale hover:grayscale-0 duration-300" src={Prm} alt="" />
                <img className="h-20 grayscale hover:grayscale-0 duration-300" src={Ae} alt="" />
              </div>
            </div>
            <div className="grid flex-grow h-32 card bg-transparent place-items-center">
              <div className="flex justify-center space-x-4">
                <img className="h-20 grayscale hover:grayscale-0 duration-300" src={Ps} alt="" />
                <img className="h-20 grayscale hover:grayscale-0 duration-300" src={Ai} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default tools;
