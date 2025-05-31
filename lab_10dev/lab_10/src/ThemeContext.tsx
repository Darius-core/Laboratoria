import React, { createContext, useContext, useState } from "react"

const ThemeContext = createContext(null as any)


export function ThemeProvider({ children }: { children: React.ReactNode }){
    const [dark, setDark] = useState(false)
    const toggleTheme = () => setDark((prev: boolean) => !prev)

    return(
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)