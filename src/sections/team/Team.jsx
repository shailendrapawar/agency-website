import { useState, lazy, Suspense } from "react"
import { useTheme } from "../../contexts/theme/themeContext"
import { usersItems } from "../../utils/users"
// import UserCard from "../../components/userCard/UserCard"

const UserCard = lazy(() => import("../../components/userCard/UserCard"))
import useLazyLoader from "../../hooks/useLazyLoader"
const Team = () => {

    const { theme } = useTheme()
    const [users] = useState([...usersItems])

    const { ref, isVisible } = useLazyLoader(0.5)
    return (
        <main className="container w-full h-auto  flex justify-center items-center relative">
            <section ref={ref} className={` ${isVisible==true? "opacity-100 slide-up":"opacity-0"} inner-container h-full w-full  py-5 px-2 md:pt-20  max-w-250  flex flex-col  items-center justify-between gap-5 md:gap-8 relative  z-10 ${theme.name == "light" ? "backdrop-blur-3xl" : "backdrop-blur-[150px]"}`}>

                <h3 className="text-2xl md:text-4xl font-semibold" style={{ color: theme.textPrimary }}>Meet our team</h3>
                <span className=" text-center" style={{ color: theme.textSecondary }}>A passionate team of digital experts dedicated to your brands success.</span>

                        <div className={` gap-5 grid grid-cols-2 sm:grid-cols-3`}>
                            {
                                users?.map((user, i) => {
                                    return <UserCard key={i} index={i} data={user} animeClass={isVisible ? "opacity-100 slide-up" : "opacity-0"} />
                                })
                            }
                        </div>


            </section>
        </main>
    )
}
export default Team