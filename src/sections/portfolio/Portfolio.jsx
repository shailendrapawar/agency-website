import { useState } from "react"
import { useTheme } from "../../contexts/theme/themeContext"
import { projectItems } from "../../utils/projects"
import ProjectCard from "../../components/projectCard/ProjectCard"
import { useScroll } from "../../contexts/scroll/scrollContext"
import useLazyLoader from "../../hooks/useLazyLoader"
export const Portfolio = () => {

    const { theme } = useTheme()
    const [projects] = useState([...projectItems])
    const {sections}=useScroll();

    const{ref,isVisible}=useLazyLoader(0.3)

    return (
        <main className="container w-full h-auto  flex justify-center items-center relative" ref={sections.portfolio}>
            <section ref={ref} className={` ${isVisible==true?"opacity-100 popup":"opacity-0"} inner-container h-full w-full  py-5 px-2 md:pt-20  max-w-250  flex flex-col  items-center justify-between gap-5 md:gap-8 relative  z-10`}>

                <h3 className="text-2xl md:text-4xl font-semibold" style={{ color: theme.textPrimary }}>Our latest work</h3>
                <span className="text-center" style={{ color: theme.textSecondary }}>From strategy to execution, we craft digital solutions that move your business forward.</span>

                <div className="  grid grid-cols-1 grid-rows-3  w-full h-250 sm:grid-cols-2 sm:grid-rows-2 sm:h-150 md:grid-cols-3 md:grid-rows-1 md:h-80 gap-5 justify-center px-2">
                    {projects?.map((v, i) => {
                        return <ProjectCard key={i} data={{ id: i, ...v }} />
                    })}
                </div>
            </section>
        </main>
    )
}