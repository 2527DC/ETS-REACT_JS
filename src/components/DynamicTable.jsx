    import React, { useContext } from "react";
    import { GlobalContext } from "../store/context";

    const DynamicTable = ({ headers, data }) => {
        const { selectedRows, setSelectedRows } = useContext(GlobalContext);

        const toggleRowSelection = (id) => {
            setSelectedRows((prev) =>
                prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
            );
        };

        const toggleSelectAll = () => {
            if (selectedRows.length === data.length) {
                setSelectedRows([]);
            } else {
                setSelectedRows(data.map((row) => row.id));
            }
        };

        return (
            <div className="overflow-auto max-h-[685px]">
                <table className="w-full border-collapse">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-3 text-left">
                                <input
                                    id="selectAllCheckbox"
                                    type="checkbox"
                                    onChange={toggleSelectAll}
                                    checked={selectedRows.length === data.length && data.length > 0}
                                />
                            </th>
                            {headers.map((header, index) => (
                                <th
                                    key={index}
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ? (
                            data.map((row, rowIndex) => (
                                <tr key={row.id || rowIndex} className="bg-white">
                                    <td className="px-6 py-3">
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(row.id)}
                                            onChange={() => toggleRowSelection(row.id)}
                                        />
                                    </td>
                                    {headers.map((header, cellIndex) => {
                                        const key = header.toLowerCase();
                                        const cell = row[key];
                                        return (
                                            <td
                                                key={cellIndex}
                                                className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900"
                                            >
                                                {typeof cell === "function" ? cell(row) : cell}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={headers.length + 1} className="text-center py-3 w-full">
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    };

    export default DynamicTable;
