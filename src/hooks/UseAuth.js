import { useContext } from "react"
import { AuthContext } from "../ContextProvider/ContextProvider"


const UseAuth=()=>{
    return useContext(AuthContext)
}
export default UseAuth;