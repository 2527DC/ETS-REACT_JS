import { useState } from "react"
import { GlobalContext } from "./context";


const GlobalProvider=({children})=>{

    const [isHovered, setIsHovered] = useState(false);

  const [selectedRows, setSelectedRows] = useState([]);
  const[userRole,setUserRole]=useState("Super Admin")

return(

    <GlobalContext.Provider  value  ={{isHovered, setIsHovered,selectedRows, setSelectedRows}}>
        {children}
    </GlobalContext.Provider>
)
}


export default GlobalProvider;