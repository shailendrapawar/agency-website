import { useTheme } from "../../contexts/theme/themeContext"
import { MdOutlineEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {

    const { theme } = useTheme();

    return (
        <main className="container w-full h-auto  flex justify-center items-center relative mt-5">
            <section className={`inner-container h-full w-full  py-2 px-2 md:pt-10  max-w-250  flex flex-col  items-center justify-between gap-2 md:gap-8 relative  z-10`}>

                <h3 className="text-2xl md:text-4xl font-semibold" style={{ color: theme.textPrimary }}>Reach out to us.</h3>
                <span className="text-center" style={{ color: theme.textSecondary }}>From strategy to execution, we craft digital solutions that move your business forward.</span>

                <form className="w-full max-w-150 h-auto py-5 grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <div className="h-12 w-full flex outline-none  rounded-md col-span-2 sm:col-span-1"
                        style={{
                            border: `1px solid ${theme.cardBorder}`,
                            backgroundColor: theme.cardBackground,
                            boxShadow: `1px 1px 3px ${theme.cardBorder}`
                        }}>
                        <FaUserAlt className="h-12 w-12 p-3" style={{ color: theme.textSecondary }} />
                        <input placeholder="Enter you name" type="text" required className="h-full w-full text-sm bg-transparent outline-none px-1" style={{ color: theme.textPrimary }}></input>

                    </div>

                    <div className="h-12 w-full flex outline-none  rounded-md col-span-2 sm:col-span-1"
                        style={{
                            border: `1px solid ${theme.cardBorder}`,
                            backgroundColor: theme.cardBackground,
                            boxShadow: `1px 1px 3px ${theme.cardBorder}`
                        }}>
                        <MdOutlineEmail className="h-12 w-12 p-2.5" style={{ color: theme.textSecondary }} />
                        <input placeholder="Enter you email" type="email" required className="h-full w-full text-sm bg-transparent outline-none px-1" style={{ color: theme.textPrimary}}></input>

                    </div>

                    <textarea className="h-30 w-full text-sm resize-none outline-none p-2 rounded-md col-span-2"
                        placeholder="Enter you message"
                        style={{
                            color: theme.textPrimary,
                            border: `1px solid ${theme.cardBorder}`,
                            backgroundColor: theme.cardBackground,
                            boxShadow: `1px 1px 3px ${theme.cardBorder}`
                        }}
                    >

                    </textarea>

                    <div className="w-full h-10 flex justify-end col-span-2">
                        <button className=" h-full w-30 rounded-full text-white flex items-center hover:opacity-90 cursor-pointer justify-center gap-3"
                            style={{
                                backgroundColor: theme.primary
                            }}
                        >
                            Submit <FaArrowRightLong />
                        </button>
                    </div>

                </form>

            </section>
        </main>

    )
}
export default Contact