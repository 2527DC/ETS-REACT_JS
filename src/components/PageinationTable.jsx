// import React, { useContext, useState } from "react";
// import { GlobalContext } from "../store/context";

// const DynamicTable = ({ headers, data }) => {
//     const { selectedRows, setSelectedRows } = useContext(GlobalContext);
//     const [currentPage, setCurrentPage] = useState(1);
//     const rowsPerPage = 15;

//     const toggleRowSelection = (id) => {
//         setSelectedRows((prev) =>
//             prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
//         );
//     };

//     const toggleSelectAll = () => {
//         const startIndex = (currentPage - 1) * rowsPerPage;
//         const currentData = data.slice(startIndex, startIndex + rowsPerPage);
//         const currentIds = currentData.map((row) => row.id);
        
//         if (currentIds.every(id => selectedRows.includes(id))) {
//             setSelectedRows(selectedRows.filter(id => !currentIds.includes(id)));
//         } else {
//             setSelectedRows([...selectedRows, ...currentIds]);
//         }
//     };

//     const indexOfLastRow = currentPage * rowsPerPage;
//     const indexOfFirstRow = indexOfLastRow - rowsPerPage;
//     const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

//     const totalPages = Math.ceil(data.length / rowsPerPage);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     return (
//         <div className="overflow-auto max-h-[685px]">
//             <table className="w-full border-collapse">
//                 <thead className="bg-gray-50 sticky top-0 z-10">
//                     <tr>
//                         <th className="px-6 py-3 text-left">
//                             <input
//                                 id="selectAllCheckbox"
//                                 type="checkbox"
//                                 onChange={toggleSelectAll}
//                                 checked={
//                                     currentData.length > 0 &&
//                                     currentData.every((row) => selectedRows.includes(row.id))
//                                 }
//                             />
//                         </th>
//                         {headers.map((header, index) => (
//                             <th
//                                 key={index}
//                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                             >
//                                 {header}
//                             </th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {currentData.length > 0 ? (
//                         currentData.map((row, rowIndex) => (
//                             <tr key={row.id || rowIndex} className="bg-white">
//                                 <td className="px-6 py-3">
//                                     <input
//                                         type="checkbox"
//                                         checked={selectedRows.includes(row.id)}
//                                         onChange={() => toggleRowSelection(row.id)}
//                                     />
//                                 </td>
//                                 {headers.map((header, cellIndex) => {
//                                     const key = header.toLowerCase();
//                                     const cell = row[key];
//                                     return (
//                                         <td
//                                             key={cellIndex}
//                                             className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900"
//                                         >
//                                             {typeof cell === "function" ? cell(row) : cell}
//                                         </td>
//                                     );
//                                 })}
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan={headers.length + 1} className="text-center py-3 w-full">
//                                 No data available
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>

//             {/* Pagination Controls */}
//             <div className="flex justify-center items-center py-3 space-x-2">
//                 <button
//                     onClick={() => handlePageChange(currentPage - 1)}
//                     disabled={currentPage === 1}
//                     className="px-4 py-2 border rounded disabled:opacity-50"
//                 >
//                     Previous
//                 </button>
//                 {Array.from({ length: totalPages }, (_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => handlePageChange(index + 1)}
//                         className={`px-4 py-2 border rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : ""}`}
//                     >
//                         {index + 1}
//                     </button>
//                 ))}
//                 <button
//                     onClick={() => handlePageChange(currentPage + 1)}
//                     disabled={currentPage === totalPages}
//                     className="px-4 py-2 border rounded disabled:opacity-50"
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default DynamicTable;
