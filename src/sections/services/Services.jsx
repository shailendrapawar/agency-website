import { useState } from "react"
import { useTheme } from "../../contexts/theme/themeContext"
import {ServiceItems} from "../../utils/services.jsx"
import ServiceCard from "../../components/serviceCard/ServiceCard"
const Services = () => {



    const { theme } = useTheme()
    const [services] = useState([...ServiceItems]);

    return (
        <main className="container w-full h-auto  flex justify-center items-center relative">
            <section className={`inner-container h-full w-full  py-5 px-2 md:pt-20  max-w-250  flex flex-col  items-center justify-between gap-5 md:gap-8 relative  z-10 ${theme.name == "light" ? "backdrop-blur-3xl" : "backdrop-blur-[150px]"}`}>

                <h3 className=" text-2xl md:text-4xl" style={{ color: theme.textPrimary }}>How can we help?</h3>
                <span className=" text-center" style={{ color: theme.textSecondary }}>From strategy to execution, we craft digital solutions that move your business forward.</span>

                <div className="p-4 sm:p-0 grid  h-180 sm:h-90 w-full grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2  gap-5">
                    {
                     services?.map((service,i)=>{
                        return <ServiceCard key={i} data={{id:i,...service}} extraClass={" "}/>
                     })
                    }
                </div>

            </section>
        </main>
    )
}
export default Services