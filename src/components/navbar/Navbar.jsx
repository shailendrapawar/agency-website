import { CgMenuRight } from "react-icons/cg";


import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useTheme } from "../../contexts/theme/themeContext";

import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

import { FaArrowRight } from "react-icons/fa6";

import LOGO from "/public/tesseract-logo.png"

const Navbar = () => {

    const { theme, toggleTheme } = useTheme();

    const [mobileNav, toggleMobileNav] = useState(false)
    // console.log(theme);

    return (
        <nav className={"h-[60px] w-full  flex justify-center  px-5 backdrop-blur-xl sticky top-0 z-50"}
            style={{
                backgroundColor: theme.secondary + `50`,
            }}
        >

            <div className="h-full w-full max-w-300 flex justify-between items-center">
                <span className={"flex px-1 gap-1 items-center"}
                    style={{}}
                >
                    <img src={LOGO} className="h-10 w-10"></img>
                    Tesser-<span className="font-semibold" style={{ color: theme.primary }}>X</span>
                </span>

                {/* ==============mobile nav================ */}
                {mobileNav && (<nav className="mobile-nav text-white absolute top-0 w-60 h-[100vh] sm:hidden bg-yellow-400 right-0 flex items-center justify-center"
                    style={{
                        background: theme.primary
                    }}
                >
                    <RxCross2 className="absolute top-3 right-3 h-8 w-8 cursor-pointer"
                        onClick={() => toggleMobileNav(false)}
                    />

                    <section className=" list-none flex flex-col gap-5 py-2 px-2 text-lg absolute top-20 left-10">
                        <li>Home</li>
                        <li>Services</li>
                        <li> Our Work</li>
                        <li> Contact Us </li>
                    </section>
                </nav>)}

                {/* ==================web nav============== */}
                <nav className="hidden sm:flex">
                    <section className=" list-none font-semibold flex text-sm gap-5  cursor-pointer"
                    // style={{borderBottom:` solid ${theme.border}`}}
                    >
                        <li className="hover:border-b-1  px-1" >Home</li>
                        <li className=" hover:border-b-1  px-1">Services</li>
                        <li className=" hover:border-b-1  px-1"> Our Work</li>
                        <li className=" hover:border-b-1  px-1"> Contact Us </li>
                    </section>
                </nav>


                <section className="flex items-center justify-center gap-5">
                    <div className="h-8 w-8 rounded-full flex justify-center items-center cursor-pointer"
                        onClick={() => toggleTheme()}
                        style={{
                            border: "2px solid "
                        }}
                    >
                        {theme.name === "light" ? <FaRegMoon /> : <FiSun />}
                    </div>

                    <span
                        onClick={() => toggleMobileNav(!mobileNav)}
                    >
                        <CgMenuRight className="h-8 w-8 cursor-pointer sm:hidden" />
                    </span>

                    <span className="h-10 w-30 text-white text-sm hidden md:flex hover:opacity-90 cursor-pointer  justify-center items-center gap-2 rounded-full"
                        style={{
                            backgroundColor: theme.primary,
                        }}
                    >
                        Connect<FaArrowRight />
                    </span>
                </section>
            </div>

        </nav>
    )
}
export default Navbar