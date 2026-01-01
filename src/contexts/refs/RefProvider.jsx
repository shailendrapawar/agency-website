import { RefContext } from "./refContext"
const RefProvider = ({children}) => {
  return (
    <RefContext.Provider>
        {children}
    </RefContext.Provider>
  )
}
export default RefProvider