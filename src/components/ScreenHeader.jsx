
import { DeleteForeverRounded } from "@mui/icons-material";
import {  Plus } from "lucide-react";

const ScreenHeader = ({ title, onAdd, onDelete, selectedRows }) => {
    return (
      <div className="flex flex-row bg-blue-300 p-3 justify-between rounded">
        <div className="flex ">
          <h1 className="text-xl font-bold">{title}</h1>
          <button
            onClick={onAdd}
            className="p-1 ml-5 bg-blue-400 flex text-lg items-center rounded-lg text-white"
          >
            <Plus size={20} />
          </button>
        </div>
        {selectedRows.length > 0 && (
          <button
            onClick={onDelete}
            className="p-1 ml-5 bg-red-500 text-white px-1  rounded"
          >
            <DeleteForeverRounded size={20} />
          </button>
        )}
      </div>
    );
  };
  export default ScreenHeader