import Avatar from '../assets/me.png'

function hero() {
    return (
        <>
            {/* <div className="bg-orange-100">
                <div className="grid  items-center justify-center">
                    <img className='h-1/6' src={Avatar} alt="" />
                </div>
            </div> */}
            <div className='bg-black'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={Avatar} className="max-w-sm rounded-full" />
                        <div className=''>
                            <h1 className="text-5xl font-bold">Hello! 👋</h1>
                            <p className="py-10 pr-64">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-neutral">Button</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default hero