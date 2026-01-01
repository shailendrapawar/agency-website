import { useTheme } from "../../contexts/theme/themeContext";

const ProjectCard = ({ data }) => {

    const { title, description, img } = data;
    const { theme } = useTheme()
    return (
        <main className="w-full h-full p-2  rounded-xl hover:scale-101 transition-all ease-in-out"
        style={{
            border:`1px solid ${theme.cardBorder}`,
            backgroundColor:theme.cardBackground,
            boxShadow:`2px 2px 5px ${theme.cardBorder}`
        }}
        >
            <img className="h-[70%] w-full object-contain bg-transparent rounded-xl"
                src={img}
            ></img>
            <div className="flex flex-col justify-center gap-2 h-[30%] px-2">
                <span className="font-semibold" style={{}}>{title}</span>
                <p className="text-sm" style={{color:theme.textSecondary}}>{description}</p>

            </div>
        </main>
    )
}
export default ProjectCard