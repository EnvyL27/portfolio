function navbar() {
    return (
        <>
            <div className="fixed navbar lg:py-10 lg:px-24">
                <div className="lg:navbar-start max-lg:hidden">
                    <a href="#" className="text-center column-1">
                        <div className="w-full font-bold text-md text-gray-300">Ahmad Farrel</div>
                        <div className="text-sm font-semibold text-gray-400">Frontend Developer</div>
                    </a>
                </div>

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                </div>
                <div className="md:hidden max-sm:navbar-center max-sm:pr-10 ">
                    <a className="btn btn-ghost column-1">
                        <div className="w-full text-sm text-gray-300">Ahmad Farrel</div>
                        <div className="text-xs text-gray-400">Frontend Developer</div>
                    </a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="text-gray-400 hover:text-gray-300">Profile</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary className="text-gray-400 hover:text-gray-300">Project</summary>
                                <ul className="p-2 bg-slate-100">
                                    <li><a className="text-gray-400 hover:text-gray-300">Submenu 1</a></li>
                                    <li><a className="text-gray-400 hover:text-gray-300">Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a className="text-gray-400 hover:text-gray-300">Contact</a></li>
                        <li>
                        <i class="fa fa-moon-o" aria-hidden="true"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default navbar