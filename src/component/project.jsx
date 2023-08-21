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
            <section className="bg-gray-100 text-gray-800 h-screen">
                <div className='pt-24 px-20'>
                    <div class="flex justify-center items-center text-gray-800">
                        <h2 class="text-3xl font-bold sm:text-4xl">Creative Endeavors</h2>
                    </div>
                    <div class="flex justify-center items-center text-center">
                        <p class="mt-4 text-gray-500">
                            Welcome to my "Creative Endeavors". Within this portfolio, you'll discover a collection of meticulously crafted web projects that embody the essence of modern online experiences.
                        </p>
                    </div>
                    <div class="main">
                        <ul class="cardds">
                            <li class="cardds_item">
                                <div class="cardd">
                                    <img src={Sv} className='py-6 v' alt="Solvevisual." />
                                    <div class="cardd_content">
                                        <h2 class="cardd_title">Solvevisual</h2>
                                        <div class="cardd_text">
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
                                                <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Angular</span>
                                                <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Tailwind</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li class="cardds_item">
                                <div class="cardd">
                                    <img src={Us} className='py-6 px-6' alt="USFootwear." />
                                    <div class="cardd_content">
                                        <h2 class="cardd_title">USFootwear</h2>
                                        <div class="cardd_text">
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
                                                <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Laravel</span>
                                                <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Bootstrap</span>
                                                <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">MYSQL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li class="cardds_item">
                                <div class="cardd">
                                    <img src={Tx} className='py-6 px-6' alt="Taxi app." />
                                    <div class="cardd_content">
                                        <h2 class="cardd_title">NavigaRide</h2>
                                        <div class="cardd_text">
                                            <p>Introducing NavigaRide, a collaborative venture born from the ingenuity of me and my <Link to='https://github.com/Shankara21' className='text-indigo-400'>friend</Link>,
                                                uniting the realms of technology and transportation. This groundbreaking taxi application,
                                                meticulously crafted using Angular, Express.js, and MySQL, is more than just a ride-hailing platform; it's an embodiment of innovation, convenience, and connectivity.
                                            </p>
                                            <hr />
                                            <div className='flex flex-rows gap-4 py-4'>
                                                <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Angular</span>
                                                <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">Tailwind</span>
                                                <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">ExpressJS</span>
                                                <span class="bg-indigo-900 text-indigo-200 text-xs font-medium mr-2 px-2.5 py-0.5 ">MYSQL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default content