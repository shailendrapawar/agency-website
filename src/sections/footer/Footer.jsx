import { useTheme } from "../../contexts/theme/themeContext"
import LOGO from "/public/tesseract-logo.png";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    const { theme } = useTheme()
    return (
        <footer className="container w-full h-auto  flex flex-col justify-center items-center relative mt-5"
            style={{
                backgroundColor: theme.cardBackground
            }}
        >
            <main className={`inner-container h-full w-full  py-5 px-2   max-w-250  flex flex-col md:flex-row  items-center justify-center gap-5 md:gap-8 relative  z-10`}>

                <section className=" flex w-full flex-col md:w-[50%] h-35 sm:h-30 justify-center md:justify-evenly gap-1 px-2"
                    style={{ color: theme.textSecondary }}
                >
                    <span className={"flex px-1 gap-1 items-center font-semibold"}
                        style={{ color: theme.textPrimary }}
                    >
                        <img src={LOGO} className="h-10 w-10"></img>
                        Tesser-<span className="font-semibold" style={{ color: theme.primary }}>X</span>
                    </span>

                    <span className="text-sm px-2">From strategy to execution, we craft digital solutions that move your business forward.</span>
                </section>

                <section className=" w-full h-35 sm:h-30 flex flex-col md:w-[50%]  justify-center gap-1 px-2">
                    <span className="font-semibold">Subscribe to our newsletter</span>
                    <span className="text-sm " style={{ color: theme.textSecondary }}>The latest news, articles, and resources, sent to your inbox weekly.</span>

                    <div className="h-10 w-full flex  rounded-md  gap-5 mt-2">
                        <input placeholder="Enter you email "
                            className="h-full w-[80%] bg-transparent outline-none rounded-md text-sm px-2"
                            style={{
                                color: theme.textSecondary,
                                backgroundColor: theme.cardBackground,
                                border: `1px solid ${theme.cardBorder}`,
                                boxShadow: `1px 1px 3px ${theme.cardBorder}`

                            }}
                        ></input>
                        <button className=" h-full w-[20%] min-w-20 text-sm hover:opacity-90 cursor-pointer text-white rounded-md flex items-center justify-center"
                            style={{
                                backgroundColor: theme.primary
                            }}
                        >
                            Subscribe
                        </button>
                    </div>
                </section>


            </main>
            <div className="w-[90%] mt-5" style={{
                color: theme.textMuted,
                border: `1px solid ${theme.textMuted}`
            }}></div>

            <aside className="flex justify-between w-[90%] py-5 items-center flex-col md:flex-row gap-5" style={{ color: theme.textSecondary }}>
                <span className="text-sm h-10  flex justify-between items-center">Copyright 2026 © Shailendra pawar - All Right Reserved.</span>
                <span className="h-10 w-auto flex gap-2  justify-between items-center">
                    <FaInstagram className="h-6 w-6" />
                    <FaFacebookSquare className="h-6 w-6" />
                    <FaLinkedin className="h-6 w-6" />
                    <FaTwitterSquare className="h-6 w-6" />
                </span>
            </aside>
        </footer>
    )
}
export default Footer