import { useState } from "react"
import GlobalContext from "./context"

const GlobalProvider=({children})=>{
const [navisible,setNav]= useState(false)
return(

    <GlobalContext.Provider  value  ={{ navisible,setNav}}>
        {children}
    </GlobalContext.Provider>
)
}


export default GlobalProvider;