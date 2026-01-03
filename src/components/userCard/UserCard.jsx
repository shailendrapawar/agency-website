import { useTheme } from "../../contexts/theme/themeContext"

const UserCard = ({ data, index }) => {
    const { theme } = useTheme()
    return (
        <main
            className={` h-40 w-40 flex flex-col gap-2 items-center justify-center bg-yellow-500 rounded-md hover:scale-98 transition-all ease-in-out`}
            style={{
                border: `1px solid ${theme.cardBorder}`,
                backgroundColor: theme.cardBackground,
                boxShadow: `1px 1px 3px ${theme.cardBorder}`
            }}
        >
            <img className="h-20 w-20 bg-gray-500 object-cover  rounded-full"
                src={data?.img}
            ></img>
            <span className="text-center">
                <h3 className="font-semibold text-sm">{data?.name}</h3>
                <span className="text-xs" style={{ color: theme.textSecondary }}>{data?.designation}</span>
            </span>
        </main>
    )
}
export default UserCard