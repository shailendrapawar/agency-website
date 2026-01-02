import { useState } from "react"
import { useTheme } from "../../contexts/theme/themeContext"
import useLazyLoader from "../../hooks/useLazyLoader"

const Companies = () => {

    const [companies] = useState([
        { name: "Air-BNB", path: "/companies/airbnb_logo.svg" },
        { name: "Google", path: "/companies/google_logo.svg" },
        { name: "Microsoft", path: "/companies/microsoft_logo.svg" },
        { name: "Rakuten", path: "/companies/rakuten_logo.svg" },
        { name: "Zoom", path: "/companies/zoom_logo.svg" }
    ])

    const { isVisible, ref } = useLazyLoader(0.5)

    const { theme } = useTheme()
    return (
        <main className={`${isVisible == true ? "opacity-100" : "opacity-0"}  container w-full h-auto  flex justify-center items-center relative`} ref={ref}>
            <section className={`inner-container h-full w-full  py-5 px-2 md:pt-20  max-w-250  flex flex-col  items-center justify-between gap-5 md:gap-8 relative  z-10 ${theme.name == "light" ? "backdrop-blur-3xl" : "backdrop-blur-[150px]"}`}>
                <h1 className="text-lg" style={{ color: theme.textSecondary }}>Trusted by leading companies</h1>

                <span className="flex flex-wrap justify-evenly items-center gap-5 md:gap-10">
                    {companies?.map((comp, i) => {

                        return <div key={i} className={isVisible == true ? `popup` : ""} style={{
                        }}>
                            <img key={i} className={`h-10 w-20`} src={comp?.path} style={{
                            }}></img>
                        </div>
                    })}
                </span>
            </section>
        </main>
    )
}
export default Companies