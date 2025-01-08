import React, { useContext, useState } from "react";
import DynamicTable from "../components/DynamicTable";
import { ActionButtons } from "../components/smallcomponents";
import { GlobalContext } from "../store/context";
import ScreenHeader from "../components/ScreenHeader";

const Admins = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      created: "26-12-2024 6:52 AM",
      assigned: "Stonex",
      actions: (row) => <ActionButtons row={row} />,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      created: "26-12-2024 6:52 AM",
      assigned: "Stonex",
      actions: (row) => <ActionButtons row={row} />,
    },{
      id: 3,
      name: "John Doe",
      email: "john@example.com",
      created: "26-12-2024 6:52 AM",
      assigned: "Stonex",
      actions: (row) => <ActionButtons row={row} />,
    },
    {
      id: 4,
      name: "Jane Smith",
      email: "jane@example.com",
      created: "26-12-2024 6:52 AM",
      assigned: "Stonex",
      actions: (row) => <ActionButtons row={row} />,
    },{
      id: 5,
      name: "John Doe",
      email: "john@example.com",
      created: "26-12-2024 6:52 AM",
      assigned: "Stonex",
      actions: (row) => <ActionButtons row={row} />,
    },
    {
      id: 6,
      name: "Jane Smith",
      email: "jane@example.com",
      created: "26-12-2024 6:52 AM",
      assigned: "Stonex",
      actions: (row) => <ActionButtons row={row} />,
    },{
      id: 7,
      name: "John Doe",
      email: "john@example.com",
      created: "26-12-2024 6:52 AM",
      assigned: "Stonex",
      actions: (row) => <ActionButtons row={row} />,
    },
    {
      id: 8,
      name: "Jane Smith",
      email: "jane@example.com",
      created: "26-12-2024 6:52 AM",
      assigned: "Stonex",
      actions: (row) => <ActionButtons row={row} />,
    },{
      id: 9,
      name: "John Doe",
      email: "john@example.com",
      created: "26-12-2024 6:52 AM",
      assigned: "Stonex",
      actions: (row) => <ActionButtons row={row} />,
    },
    {
      id: 10,
      name: "Jane Smith",
      email: "jane@example.com",
      created: "26-12-2024 6:52 AM",
      assigned: "Stonex",
      actions: (row) => <ActionButtons row={row} />,
    },{
      id: 11,
      name: "John Doe",
      email: "john@example.com",
      created: "26-12-2024 6:52 AM",
      assigned: "Stonex",
      actions: (row) => <ActionButtons row={row} />,
    },
    {
      id: 12,
      name: "Jane Smith",
      email: "jane@example.com",
      created: "26-12-2024 6:52 AM",
      assigned: "Stonex",
      actions: (row) => <ActionButtons row={row} />,
    },{
      id: 13,
      name: "John Doe",
      email: "john@example.com",
      created: "26-12-2024 6:52 AM",
      assigned: "Stonex",
      actions: (row) => <ActionButtons row={row} />,
    },
    {
      id: 14,
      name: "Jane Smith",
      email: "jane@example.com",
      created: "26-12-2024 6:52 AM",
      assigned: "Stonex",
      actions: (row) => <ActionButtons row={row} />,
    },{
      id: 15,
      name: "John Doe",
      email: "john@example.com",
      created: "26-12-2024 6:52 AM",
      assigned: "Stonex",
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
  const headers = ["Name", "Email", "Created", "Assigned", "Actions"];

  
  return (
    <div >
      <ScreenHeader
        title="Sub Admin"
        onAdd={() => console.log("Add action triggered")}
        onDelete={handleDelete}
        selectedRows={selectedRows}
      />
      <DynamicTable headers={headers} data={data} />
    </div>
  );
};

export default Admins;

