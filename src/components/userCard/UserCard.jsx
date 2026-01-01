import { useTheme } from "../../contexts/theme/themeContext"

const UserCard = ({ data }) => {
    const { theme } = useTheme()
    return (
        <main
            className="h-40 w-40 flex flex-col gap-2 items-center justify-center bg-yellow-500 rounded-md hover:scale-98 transition-all ease-in-out"
            style={{
                border: `1px solid ${theme.cardBorder}`,
                backgroundColor: theme.cardBackground,
                boxShadow: `2px 2px 5px ${theme.cardBorder}`
            }}
        >
            <img className="h-20 w-20 bg-gray-500 object-cover  rounded-full"
                src={data?.img}
            ></img>
            <span className="text-center">
                <h3 className="font-semibold">{data?.name}</h3>
                <span className="text-sm" style={{color:theme.textSecondary}}>{data?.designation}</span>
            </span>
        </main>
    )
}
export default UserCard