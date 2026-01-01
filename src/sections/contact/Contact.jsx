import { useTheme } from "../../contexts/theme/themeContext"
import { MdOutlineEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
    
    const { theme } = useTheme();

    return (
        <main className="container w-full h-auto  flex justify-center items-center relative">
            <section className={`inner-container h-full w-full  py-2 px-2 md:pt-20  max-w-250  flex flex-col  items-center justify-between gap-5 md:gap-8 relative  z-10`}>

                <h3 className="text-2xl md:text-4xl font-semibold" style={{ color: theme.textPrimary }}>Reach out to us.</h3>
                <span className="text-center" style={{ color: theme.textSecondary }}>From strategy to execution, we craft digital solutions that move your business forward.</span>

                <div className="w-full max-w-150 h-auto py-5 grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <div className="h-12 w-full flex outline-none  rounded-md col-span-2 sm:col-span-1"
                        style={{
                            border: `1px solid ${theme.cardBorder}`,
                            backgroundColor: theme.cardBackground,
                            boxShadow: `2px 2px 5px ${theme.cardBorder}`
                        }}>
                        <FaUserAlt className="h-12 w-12 p-3" style={{ color: theme.textSecondary }} />
                        <input placeholder="Enter you name" className="h-full w-full bg-transparent outline-none px-1" style={{ color: theme.textSecondary }}></input>

                    </div>

                    <div className="h-12 w-full flex outline-none  rounded-md col-span-2 sm:col-span-1"
                        style={{
                            border: `1px solid ${theme.cardBorder}`,
                            backgroundColor: theme.cardBackground,
                            boxShadow: `2px 2px 5px ${theme.cardBorder}`
                        }}>
                        <MdOutlineEmail className="h-12 w-12 p-2.5" style={{ color: theme.textSecondary }} />
                        <input placeholder="Enter you email" className="h-full w-full bg-transparent outline-none px-1" style={{ color: theme.textSecondary }}></input>

                    </div>

                    <textarea className="h-30 w-full resize-none outline-none p-2 rounded-md col-span-2"
                        placeholder="Enter you message"
                        style={{
                            color: theme.textSecondary,
                            border: `1px solid ${theme.cardBorder}`,
                            backgroundColor: theme.cardBackground,
                            boxShadow: `2px 2px 5px ${theme.cardBorder}`
                        }}
                    >

                    </textarea>

                    <div className="w-full h-10 flex justify-end col-span-2">
                        <button className=" h-full w-30 rounded-full text-white flex items-center justify-center gap-5"
                            style={{
                                backgroundColor: theme.primary
                            }}
                        >
                            Submit <FaArrowRightLong />
                        </button>

                    </div>

                </div>

            </section>
        </main>

    )
}
export default Contact