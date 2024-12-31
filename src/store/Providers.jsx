import { useState } from "react"
import GlobalContext from "./context"

const GlobalProvider=({children})=>{

    const [isHovered, setIsHovered] = useState(false);
return(

    <GlobalContext.Provider  value  ={{isHovered, setIsHovered}}>
        {children}
    </GlobalContext.Provider>
)
}


export default GlobalProvider;