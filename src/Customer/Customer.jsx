import { useContext, useState } from "react";
// import ScreenHeader from "../components/ScreenHeader"
import { GlobalContext } from "../store/context";
import DynamicTable from "../components/DynamicTable";
import { ActionButtons } from "../components/smallcomponents";
import { Plus } from "lucide-react";
import { DeleteForeverRounded } from "@mui/icons-material";
import AddCustomer from "./AddCustomer";

const Customer =()=>{
  const [addCustomer, setAddCustomer] = useState(false);
  const [data, setData] = useState([
    { id: 1, name: "customer", email: "john@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 10", actions: (row) => <ActionButtons row={row} /> },
    { id: 2, name: "Jane Smith", email: "jane@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 21", actions: (row) => <ActionButtons row={row} /> },
    { id: 3, name: "John Doe", email: "john@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 13", actions: (row) => <ActionButtons row={row} /> },
    { id: 4, name: "Jane", email: "jane@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 13", actions: (row) => <ActionButtons row={row} /> },
    { id: 5, name: "John Doe", email: "john@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 19", actions: (row) => <ActionButtons row={row} /> },
    { id: 6, name: "Jane Smith", email: "jane@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 15", actions: (row) => <ActionButtons row={row} /> },
    { id: 7, name: "John Doe", email: "john@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 10", actions: (row) => <ActionButtons row={row} /> },
    { id: 8, name: "Jane Smith", email: "jane@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 1", actions: (row) => <ActionButtons row={row} /> },
    { id: 9, name: "John Doe", email: "john@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 1", actions: (row) => <ActionButtons row={row} /> },
    { id: 10, name: "Jane Smith", email: "jane@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 1", actions: (row) => <ActionButtons row={row} /> },
    { id: 11, name: "John Doe", email: "john@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 1", actions: (row) => <ActionButtons row={row} /> },
    { id: 12, name: "Jane Smith", email: "jane@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 9", actions: (row) => <ActionButtons row={row} /> },
    { id: 13, name: "John Doe", email: "john@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 3", actions: (row) => <ActionButtons row={row} /> },
    { id: 14, name: "John Doe", email: "john@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 1", actions: (row) => <ActionButtons row={row} /> },
    { id: 15, name: "Jane Smith", email: "jane@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 9", actions: (row) => <ActionButtons row={row} /> },
    
]);
    const { selectedRows, setSelectedRows } = useContext(GlobalContext);

  
    const handleDeleteCustomer = () => {
        setData((prev) => {
            const remainingItems = prev.filter((item) => !selectedRows.includes(item.id));
            const removedItems = prev.filter((item) => selectedRows.includes(item.id));
    
            console.log('Deleted Items:', removedItems);
            return remainingItems;
        });
        setSelectedRows([]);
    };

    const headers = ["Name", "Email", "Created", "Under", "Actions"];

    const handleAddClick = () => {
              console.log("Add button clicked in the customer");
              setAddCustomer(true); // Toggle to add customer form
          };

    return(
          <>
             {
      addCustomer?(<AddCustomer/>): 
      (<> <div className="flex flex-row bg-blue-300 p-3 justify-between rounded">
      <div className="flex ">
        <h1 className="text-xl font-bold">Customer</h1>
        <button
          onClick={handleAddClick}
          className="p-1 ml-5 bg-blue-400 flex text-lg items-center rounded-lg text-white"
        >
          <Plus size={20} />
        </button>
      </div>
      {selectedRows.length > 0 && (
        <button
          onClick={handleDeleteCustomer}
          className="p-1 ml-5 bg-red-500 text-white px-1  rounded"
        >
          <DeleteForeverRounded size={20} />
        </button>
      )}
    </div>
 <DynamicTable headers={headers} data={data} />  </>)
   
}
         </>
    )
}
export default Customer





// import { useContext, useState } from "react";
// // import ScreenHeader from "../components/ScreenHeader"
// import { GlobalContext } from "../store/context";
// import DynamicTable from "../components/DynamicTable";
// import { ActionButtons } from "../components/smallcomponents";
// import { Plus } from "lucide-react";
// import { DeleteForeverRounded } from "@mui/icons-material";
// import AddCustomer from "./AddCustomer";

// const Customer = () => {
//     const [data, setData] = useState([
//         { id: 1, name: "customer", email: "john@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 10", actions: (row) => <ActionButtons row={row} /> },
//         { id: 2, name: "Jane Smith", email: "jane@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 21", actions: (row) => <ActionButtons row={row} /> },
//         { id: 3, name: "John Doe", email: "john@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 13", actions: (row) => <ActionButtons row={row} /> },
//         { id: 4, name: "Jane", email: "jane@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 13", actions: (row) => <ActionButtons row={row} /> },
//         { id: 5, name: "John Doe", email: "john@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 19", actions: (row) => <ActionButtons row={row} /> },
//         { id: 6, name: "Jane Smith", email: "jane@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 15", actions: (row) => <ActionButtons row={row} /> },
//         { id: 7, name: "John Doe", email: "john@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 10", actions: (row) => <ActionButtons row={row} /> },
//         { id: 8, name: "Jane Smith", email: "jane@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 1", actions: (row) => <ActionButtons row={row} /> },
//         { id: 9, name: "John Doe", email: "john@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 1", actions: (row) => <ActionButtons row={row} /> },
//         { id: 10, name: "Jane Smith", email: "jane@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 1", actions: (row) => <ActionButtons row={row} /> },
//         { id: 11, name: "John Doe", email: "john@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 1", actions: (row) => <ActionButtons row={row} /> },
//         { id: 12, name: "Jane Smith", email: "jane@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 9", actions: (row) => <ActionButtons row={row} /> },
//         { id: 13, name: "John Doe", email: "john@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 3", actions: (row) => <ActionButtons row={row} /> },
//         { id: 14, name: "John Doe", email: "john@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 1", actions: (row) => <ActionButtons row={row} /> },
//         { id: 15, name: "Jane Smith", email: "jane@example.com", created: "26-12-2024 6:52 AM", under: "subadmin 9", actions: (row) => <ActionButtons row={row} /> },
        
//     ]);
//     const { selectedRows, setSelectedRows } = useContext(GlobalContext);
//     const [addCustomer, setAddCustomer] = useState(false); // State to toggle between customer list and add customer form

//     const handleDeleteCustomer = () => {
//         setData((prev) => {
//             const remainingItems = prev.filter((item) => !selectedRows.includes(item.id));
//             const removedItems = prev.filter((item) => selectedRows.includes(item.id));
//             console.log('Deleted Items:', removedItems);
//             return remainingItems;
//         });
//         setSelectedRows([]);
//     };

//     const headers = ["Name", "Email", "Created", "Under", "Actions"];

//     const handleAddClick = () => {
//         console.log("Add button clicked in the customer");
//         setAddCustomer(true); // Toggle to add customer form
//     };

//     return (
//         <>
//             {addCustomer ? (
//                 <AddCustomer  />
//             ) : (
//                 <div>
//                     <div className="flex flex-row bg-blue-300 p-3 justify-between rounded">
//                         <div className="flex">
//                             <h1 className="text-xl font-bold">Customer</h1>
//                             <button
//                                 onClick={handleAddClick}
//                                 className="p-1 ml-5 bg-blue-400 flex text-lg items-center rounded-lg text-white"
//                             >
//                                 <Plus size={20} />
//                             </button>
//                         </div>
//                         {selectedRows.length > 0 && (
//                             <button
//                                 onClick={handleDeleteCustomer}
//                                 className="p-1 ml-5 bg-red-500 text-white px-1 rounded"
//                             >
//                                 <DeleteForeverRounded size={20} />
//                             </button>
//                         )}
//                     </div>
//                     <DynamicTable headers={headers} data={data} />
//                 </div>
//             )}
//         </>
//     );
// };

// export default Customer;
