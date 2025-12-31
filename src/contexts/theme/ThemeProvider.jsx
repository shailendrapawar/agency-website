import { useState } from "react"
import { ThemeContext } from "./themeContext"
import { darkTheme, lightTheme } from "../../utils/theme"
const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(
  //   {
  //   light: {
  //     name: "light",
  //     ...lightTheme
  //   },
  //   dark: {
  //     name: "dark",
  //     ...darkTheme
  //   }, 
  //   currentTheme: {
  //     name: "light",
  //     ...lightTheme
  //   }
  // }
  {...lightTheme}
)

  const toggleTheme = () => {
    if (theme.name == "light") {
      setTheme((prev) => ({
        // ...prev,
        // currentTheme: prev.dark
        ...darkTheme
      }))
    } else {
      setTheme((prev) => ({
        // ...prev,
        // currentTheme: prev.light
        ...lightTheme
      }))
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider