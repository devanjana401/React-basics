//creating a themecontext and create context
//create provider(arrow function)

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{
    const [darkMode,setDarkMode] = useState(false);

    const toggleTheme = () => setDarkMode(!darkMode)     //for toggling between dark and bright mode
    return(
      <ThemeContext.Provider value={{darkMode,toggleTheme}}>
        <div
        style={{
            background:darkMode ? 'black':'white',
            color:darkMode ? 'white':'black',
            minHeight:'100vh',
            padding:'1rem'
        }}>
            {children}
        </div>
      </ThemeContext.Provider>
    )
}