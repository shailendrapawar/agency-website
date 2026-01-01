import { useState } from "react";
import { useTheme } from "../../contexts/theme/themeContext"
import "./serviceCard.css"
const ServiceCard = ({ data }) => {

    const { theme } = useTheme();
    const { icon, title, description } = data
    const [hoverItem, setHoverItem] = useState(null);

    // console.log(hoverItem);
    return (
        <main className="w-full h-auto min-h-10 min-w-20 rounded-3xl transition-all ease-in-out relative"
            style={{
                border: `2px solid ${theme.cardBorder}`,
                backgroundColor: (hoverItem != null && (hoverItem?.id == data?.id)) ? theme.cardBackground : theme.background,
                boxShadow: `2px 2px 5px ${theme.cardBorder}`
            }}
            onMouseEnter={() => {
                setHoverItem(data)
            }}
            onMouseLeave={() => {
                setHoverItem(null)
            }}
        >

            <div className="h-full w-full  flex justify-around items-center relative transition-all ease-in-out">
                <section className="h-16 w-16  rounded-full flex items-center justify-center"
                    style={{
                        border: `5px solid ${theme.secondary}`
                    }}
                >
                    <span className={`h-full w-full rounded-full flex items-center justify-center p-3 ${hoverItem?.id == data?.id ? "wiggle-hover" : "animate-none"}`}
                        style={{ color: theme.primary }}
                    >{icon}</span>
                </section>

                <section className="h-auto w-[60%] flex flex-col gap-2">
                    <h3 className="text-left text-md font-semibold md:text-lg">{title}</h3>
                    <span className="text-left  md:text-md">{description}</span>
                </section>
            </div>

        </main>
    )
}
export default ServiceCard