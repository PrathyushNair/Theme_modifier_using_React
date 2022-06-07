import React,{createContext} from "react"
export const AuthContext=createContext();
export const AuthProvider=({children})=>{
    const [isauth,setIsauth]=React.useState(false)
    const login =()=>{}
    const logout =()=>{}
   return <AuthContext.Provider value={{isauth,login,logout}}></AuthContext.Provider>
}