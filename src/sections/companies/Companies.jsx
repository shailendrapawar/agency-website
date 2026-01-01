import { useState } from "react"
import { useTheme } from "../../contexts/theme/themeContext"

const Companies = () => {

    const[companies]=useState([
        {name:"Air-BNB",path:"/public/companies/airbnb_logo.svg"},
        {name:"Google",path:"/public/companies/google_logo.svg"},
        {name:"Microsoft",path:"/public/companies/microsoft_logo.svg"},
        {name:"Rakuten",path:"/public/companies/rakuten_logo.svg"},
        {name:"Zoom",path:"/public/companies/zoom_logo.svg"}
    ])

    const{theme}=useTheme()
    return (
        <main className="container w-full h-auto  flex justify-center items-center relative">
            <section className={`inner-container h-full w-full  py-5 px-2 md:pt-20  max-w-250  flex flex-col  items-center justify-between gap-5 md:gap-8 relative  z-10 ${theme.name == "light" ? "backdrop-blur-3xl" : "backdrop-blur-[150px]"}`}>
                <h1 className="text-lg" style={{color:theme.textSecondary}}>Trusted by leading companies</h1>

                <span className="flex flex-wrap justify-evenly items-center gap-5 md:gap-10">
                    {companies?.map((comp,i)=>{
                        
                        return <img key={i} className="h-10 w-20" src={comp?.path }></img>
                    })}
                </span>
            </section>
        </main>
    )
}
export default Companies