import { useEffect, useState } from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router-dom";
import Image from "./Image";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

// IoMdClose,
const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);



    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'about',
            path: '/about'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Project',
            path: '/contact'
        },
       
    ]
    useEffect(() => {
        function resize() {
            if (window.innerWidth < 767.99) {
                setProOpen(false)
                setShowMenu(false)
            }
        }
        resize()
        window.addEventListener("resize", resize)
    }, [])
    return (
        <div>

            <div className="relative z-10 shadow-md w-full  duration-300 " >
                <Container className='py-3'>
                   
                        <div className="flex items-center justify-between py-4 ">
                            <div className="logo"><Image src='/logo.png'></Image></div>
                            <nav className="hidden md:inline-block">
                                <ul className={`flex gap-6 items-center`}>
                                    {links.map((link, index) => (
                                        <li key={index}>
                                            <NavLink to={link.path} className="text-[#515151] font-normal text-2xl hover:text-[#2B8761] transition-all duration-500">{link.title}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            {/* Profile */}
                            <div className=" flex gap-6 items-center">
                                <Link className="text-[#515151] font-normal text-2xl hover:text-[#2B8761] transition-all duration-500 hidden lg:inline-block">Contact us</Link>
                                <Link className="text-white bg-[#2B8761] text-[16px] font-medium leading-[22px] tracking-[0px] text-center py-[13px] px-[27px] rounded-[5px] hidden md:inline-block">Book Now</Link>
                            </div>
                            {/* Hamburger */}
                            <div className="flex items-center gap-4 md:hidden ">
                                {showMenu ? (
                                    <HiMenuAlt1
                                        onClick={toggleMenu}
                                        className=" cursor-pointer transition-all"
                                        size={30}
                                    />
                                ) : (
                                    <HiMenuAlt3
                                        onClick={toggleMenu}
                                        className="cursor-pointer transition-all"
                                        size={30}
                                    />
                                )}
                            </div>

                        </div>

                 
                    <div className={`${showMenu ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[278px] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-6 text-black transition-all duration-500 md:hidden rounded-r-xl shadow-md`} >
                        <div className="card">
                        <div className="logo"><Image src='/logo.png'></Image></div>
                            <nav className="mt-16">
                                <ul className={`space-y-4 text-lg`}>
                                    {links.map((link, index) => (
                                        <li key={index}>
                                            <Link to={link.path} className="mb-2 inline-block">{link.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>


                        </div>
                        <div className="footer">
                        <div className=" flex gap-6 items-center">
                                <Link className="text-[#515151] font-normal text-xl hover:text-[#2B8761] transition-all duration-500 ">Contact us</Link>
                                <Link className="text-white bg-[#2B8761] text-[16px] font-medium  text-center py-1 px-2 rounded-[5px] ">Book Now</Link>
                            </div>
                        </div>
                    </div>
                </Container>

            </div>
        </div>
    );
};

export default Navbar;