import { useContext, useState } from "react";
import ScreenHeader from "../components/ScreenHeader";
import { GlobalContext } from "../store/context";
import DynamicTable from "../components/DynamicTable";
import { ActionButtons } from "../components/smallcomponents";



const Client=()=>{
 
    
      const [data, setData] = useState([
        {
          id: 1,
          name: "chethan",
          email: "john@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 10",
          actions: (row) => <ActionButtons row={row} />,
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "jane@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 21",
          actions: (row) => <ActionButtons row={row} />,
        },{
          id: 3,
          name: "John Doe",
          email: "john@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 13",
          actions: (row) => <ActionButtons row={row} />,
        },
        {
          id: 4,
          name: "Jane ",
          email: "jane@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 13",
          actions: (row) => <ActionButtons   ns row={row} />,
        },{
          id: 5,
          name: "John Doe",
          email: "john@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 19",
          actions: (row) => <ActionButtons row={row} />,
        },
        {
          id: 6,
          name: "Jane Smith",
          email: "jane@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 15",
          actions: (row) => <ActionButtons row={row} />,
        },{
          id: 7,
          name: "John Doe",
          email: "john@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 10",
          actions: (row) => <ActionButtons row={row} />,
        },
        {
          id: 8,
          name: "Jane Smith",
          email: "jane@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 1",
          actions: (row) => <ActionButtons row={row} />,
        },{
          id: 9,
          name: "John Doe",
          email: "john@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 1",
          actions: (row) => <ActionButtons row={row} />,
        },
        {
          id: 10,
          name: "Jane Smith",
          email: "jane@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 1",
          actions: (row) => <ActionButtons row={row} />,
        },{
          id: 11,
          name: "John Doe",
          email: "john@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 1",
          actions: (row) => <ActionButtons row={row} />,
        },
        {
          id: 12,
          name: "Jane Smith",
          email: "jane@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 9",
          actions: (row) => <ActionButtons row={row} />,
        },{
          id: 13,
          name: "John Doe",
          email: "john@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 3",
          actions: (row) => <ActionButtons row={row} />,
        },
        {
          id: 14,
          name: "Jane Smith",
          email: "jane@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 2",
          actions: (row) => <ActionButtons row={row} />,
        },{
          id: 15,
          name: "John Doe",
          email: "john@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 1",
          actions: (row) => <ActionButtons row={row} />,
        },{
          id: 11,
          name: "John Doe",
          email: "john@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 1",
          actions: (row) => <ActionButtons row={row} />,
        },
        {
          id: 12,
          name: "Jane Smith",
          email: "jane@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 9",
          actions: (row) => <ActionButtons row={row} />,
        },{
          id: 13,
          name: "John Doe",
          email: "john@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 3",
          actions: (row) => <ActionButtons row={row} />,
        },
        {
          id: 14,
          name: "Jane Smith",
          email: "jane@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 2",
          actions: (row) => <ActionButtons row={row} />,
        },{
          id: 15,
          name: "John Doe",
          email: "john@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 1",
          actions: (row) => <ActionButtons row={row} />,
        },{
          id: 11,
          name: "John Doe",
          email: "john@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 1",
          actions: (row) => <ActionButtons row={row} />,
        },
        {
          id: 12,
          name: "Jane Smith",
          email: "jane@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 9",
          actions: (row) => <ActionButtons row={row} />,
        },{
          id: 13,
          name: "John Doe",
          email: "john@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 3",
          actions: (row) => <ActionButtons row={row} />,
        },
        {
          id: 14,
          name: "Jane Smith",
          email: "jane@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 2",
          actions: (row) => <ActionButtons row={row} />,
        },{
          id: 15,
          name: "John Doe",
          email: "john@example.com",
          created: "26-12-2024 6:52 AM",
          under: "subadmin 1",
          actions: (row) => <ActionButtons row={row} />,
        },
        
      ]);
      const { selectedRows, setSelectedRows } = useContext(GlobalContext);



      const handleDelete = () => {
        setData((prev) => {
            const remainingItems = prev.filter((item) => !selectedRows.includes(item.id));
            const removedItems = prev.filter((item) => selectedRows.includes(item.id));
    
            console.log('Deleted Items:', removedItems);
            return remainingItems;
        });
        setSelectedRows([]);
    };
      const headers = ["Name", "Email", "Created", "Under", "Actions"];
    return<>
     <div>
     <ScreenHeader
        title="Client"
        onAdd={() => console.log("Add action triggered")}
        onDelete={handleDelete}
        selectedRows={selectedRows}
      />
        <DynamicTable headers={headers} data={data} />
     </div>
    </>
}
export default Client;