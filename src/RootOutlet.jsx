import { Outlet } from "react-router-dom"
import { useTheme } from "./contexts/theme/themeContext"

import Navbar from "./components/navbar/Navbar";
import Landing from "./sections/landing/Landing";
import Companies from "./sections/companies/Companies";
import Services from "./sections/services/Services";
import { Portfolio } from "./sections/portfolio/Portfolio";

const RootOutlet = () => {

    const { theme, toggleTheme } = useTheme();
    // console.log(theme);

    return (
        <main
            className="min-h-screen w-full relative hide-scrollbar"
            style={{
                backgroundColor: theme.background,
                color: theme.textPrimary
            }}
        >
            <Navbar />

            <section className="w-full min-h-screen  flex flex-col items-center">
                <Landing/>

                <Companies/>

                <Services/>

                <Portfolio/>

            </section>
        </main>
    )
}
export default RootOutlet