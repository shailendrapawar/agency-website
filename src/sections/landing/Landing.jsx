import { useTheme } from "../../contexts/theme/themeContext"

const Landing = () => {
    const{theme}=useTheme()
  return (
    <main className="container w-full h-[calc(100vh-80px)] bg-red-500 flex justify-center items-center">

        <section className="h-full w-full px-2 max-w-250 bg-yellow-500 flex justify-center ">

            <div className="w-auto h-10 px-2 py-2 text-sm rounded-full font-semibold border-1"
            style={{border:`2px solid ${theme.border}`}}
            >
                <span>users imgs</span>
                <span>Trusted by 10K+ pepole</span>
            </div>

        </section>

    </main>
  )
}
export default Landing