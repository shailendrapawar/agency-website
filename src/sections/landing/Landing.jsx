import { useTheme } from "../../contexts/theme/themeContext"
import heroLandingImg from "/public/hero-landing-img.jpg"

import blueWaterBg from "/public/blue-water-drop-bg.jpg"
import pinkWaterBg from "/public/pink-water-drop-bg.jpg"
const Landing = () => {
  const { theme } = useTheme()
  return (
    <main className="container w-full min-h-[calc(100vh-100px)]  flex justify-center items-center relative">

      <section className={`inner-container h-full w-full px-2 py-10 md:py-20  max-w-250  flex flex-col justify-center items-center gap-5 md:gap-8 relative z-10 ${theme.name=="light"?"backdrop-blur-3xl":"backdrop-blur-[80px]"}`}>

        <span className=" px-2 py-2 text-sm rounded-full font-semibold border-1"
          style={{ border: `2px solid ${theme.border}` }}
        >
          <span>users imgs</span>
          <span>Trusted by 10K+ pepole</span>
        </span>

        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="text-3xl sm:text-6xl ">Turning imagination into </h1>
          <h1 className="text-3xl sm:text-6xl "><span style={{ color: theme.primary }}>digital</span> impact</h1>
        </div>

        <h4 className="text-center sm:text-lg md:text-2xl max-w-100"
        style={{color:theme.textSecondary}}
        >Creating meaningful connections and turning big ideas into interactive digital experiences.</h4>

        <img src={heroLandingImg}
          className="rounded-xl sm:h-80 sm:w-160 md:h-100 w-200 object-cover">
        </img>

      </section>

      <aside className={`absolute h-50 w-50 z-1  right-[20%] top-[20%] rounded-full overflow-hidden ${theme.name=="light"?"animate-pulse":"animate-none"} delay-500 drop-shadow-blue-200 drop-shadow-2xl`}>
        <img src={blueWaterBg} />
      </aside>

      <aside className={`absolute h-80 w-80 drop-shadow-pink-500 drop-shadow-2xl z-1 bottom-0 left-[20%]  rounded-full overflow-hidden ${theme.name=="light"?"animate-pulse":"animate-none"} delay-700`}>
        <img src={pinkWaterBg} />
      </aside>


    </main>
  )
}
export default Landing