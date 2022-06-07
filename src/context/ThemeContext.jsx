import React from "react";


export const ThemeContext=React.createContext()

export const ThemeProvider=({children})=>{
    const [theme,setTheme]=React.useState("Light")
    const toggleTheme=()=>{
        if(theme==="Light")
        {
            setTheme("dark")
        }
        else{setTheme("light")}
    }
return <ThemeContext.Provider value={{isLight:theme==="Light",theme, toggleTheme}}></ThemeContext.Provider>
}