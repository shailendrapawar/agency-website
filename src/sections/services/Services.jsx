import { useState } from "react"
import { useTheme } from "../../contexts/theme/themeContext"
import { ServiceItems } from "../../utils/services.jsx"
import ServiceCard from "../../components/serviceCard/ServiceCard"
import { useScroll } from "../../contexts/scroll/scrollContext.js"
import useLazyLoader from "../../hooks/useLazyLoader.jsx"
const Services = () => {



    const { theme } = useTheme()
    const { sections } = useScroll()
    const { ref, isVisible } = useLazyLoader(0.3)
    const [services] = useState([...ServiceItems]);

    return (
        <main className="container w-full h-auto  flex justify-center items-center relative" ref={sections.services}>
            <section ref={ref} className={` ${isVisible==true?"opacity-100 slide-up":"opacity-0"} inner-container h-full w-full  py-5 px-2 md:pt-20  max-w-250  flex flex-col  items-center justify-between gap-5 md:gap-8 relative  z-10 ${theme.name == "light" ? "backdrop-blur-3xl" : "backdrop-blur-[150px]"}`}>

                <h3 className=" text-2xl md:text-4xl" style={{ color: theme.textPrimary }}>How can we help?</h3>
                <span className=" text-center" style={{ color: theme.textSecondary }}>From strategy to execution, we craft digital solutions that move your business forward.</span>

                <div className="p-4 sm:p-0 grid  h-180 sm:h-90 w-full grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2  gap-5">
                    {
                        services?.map((service, i) => {
                            return <ServiceCard key={i} data={{ id: i, ...service }} extraClasses={isVisible == true ? "" : ""} />
                        })
                    }
                </div>

            </section>
        </main>
    )
}
export default Services