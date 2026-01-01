import { useTheme } from "../../contexts/theme/themeContext"
import heroLandingImg from "/public/hero-landing-img.jpg"

import blueWaterBg from "/public/blue-water-drop-bg.jpg"
import pinkWaterBg from "/public/pink-water-drop-bg.jpg"
import usersList from "/public/users.svg"
const Landing = () => {

  const { theme } = useTheme()

  return (
    <main className="container w-full min-h-[calc(100vh-100px)]  flex justify-center items-center relative">

      <section className={`inner-container h-full w-full px-2 py-10 md:pt-20  max-w-250  flex flex-col justify-center items-center gap-5 md:gap-8 relative  z-10 ${theme.name == "light" ? "backdrop-blur-3xl" : "backdrop-blur-[150px]"}`}>

        <span className=" px-2 py-2 text-sm rounded-full gap-2 flex"
          style={{
            border: `2px solid ${theme.textMuted}`,
          }}
        >
          <img src={usersList}></img>
          <span>Trusted by 10K+ pepole</span>
        </span>

        <div className="flex flex-col items-center text-center gap-2">
          <h1 className="text-3xl sm:text-6xl ">Turning imagination into </h1>
          <h1 className="text-3xl sm:text-6xl "><span style={{ color: theme.primary }}>digital</span> impact</h1>
        </div>

        <h4 className="text-center sm:text-lg md:text-2xl max-w-100"
          style={{ color: theme.textSecondary }}
        >Creating meaningful connections and turning big ideas into interactive digital experiences.</h4>

        <img src={heroLandingImg}
          className="rounded-3xl h-80 w-150 sm:h-90 sm:w-160 md:h-100  object-cover">
        </img>

      </section>

      <aside className={`absolute h-15 w-15 sm:h-50 sm:w-50 z-1  right-[20%]  top-[20%] rounded-full overflow-hidden ${theme.name == "light" ? "animate-pulse" : "animate-none"} delay-500 drop-shadow-blue-200 drop-shadow-2xl`}>
        <img src={blueWaterBg} />
      </aside>

      <aside className={`absolute h-15 w-15 md:h-50 md:w-50 z-1  bottom-[5%] left-[20%]  drop-shadow-pink-500 drop-shadow-2xl  rounded-full overflow-hidden ${theme.name == "light" ? "animate-pulse" : "animate-none"} delay-700`}>
        <img src={pinkWaterBg} />
      </aside>


    </main>
  )
}
export default Landing