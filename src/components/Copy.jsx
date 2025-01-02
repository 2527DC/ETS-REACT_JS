// import { FaUpload } from "react-icons/fa";

// const DocumentUpload = () => {
//   const verificationStatuses = ["Pending", "Success", "Faild", "In Progress",];
//   const verificationTypes = ['BGV', 'Police Verification', 'Medical Verification', 'Training Verification',];

//   return (
//     <form>
//       {verificationTypes.reduce((rows, verificationType, index) => {
//         if (index % 2 === 0) {
//           rows.push(verificationTypes.slice(index, index + 2));
//         }
//         return rows;
//       }, []).map((row, rowIndex) => (
//         <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//           {row.map((verificationType) => (
//             <div
//               key={verificationType}
//               className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 border rounded-lg"
//             >
//               {/* Verification Status */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   {verificationType} Status
//                 </label>
//                 <select className="w-full mt-1 rounded-md border border-gray-300 py-2 px-3">
//                   {verificationStatuses.map((status) => (
//                     <option key={status} value={status}>
//                       {status}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Expiry Date */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
//                 <input
//                   type="date"
//                   className="w-full mt-1 rounded-md border border-gray-300 py-2 px-3"
//                 />
//               </div>

//               {/* Document Upload */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Document</label>
//                 <div className="flex items-center space-x-2 mt-1">
//                   <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
//                     <FaUpload className="h-5 w-5 text-gray-400 mr-2" />
//                     <span className="text-sm text-gray-600">Upload file</span>
//                     <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
//                   </label>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </form>
//   );
// };

// export default DocumentUpload;


// import React from "react";
// import { InputFields, OptionInput } from "./smallcomponents";
// import { Building, User } from "lucide-react";

// const DocumentUpload = () => {
//   const inputData = [
//     {
//       id: "License Number",
//       label: "License Number",
//       placeholder: "License Number",
//       type: "text",
//       required: true,
//       Icon: User,
//       name: "licensenumber",
//     },
//     {
//       id: "Expiredate",
//       label: "Expire Date",
//       placeholder: "Expire Date",
//       type: "date",
//       required: true,
//       Icon: User,
//       name: "expiredate",
//     },
//     {
//       id: "Document-Licence",
//       label: "Document",
//       placeholder: "Document-Licence",
//       type: "file",
//       required: true,
//       Icon: User,
//       name: "email",
//     },
//     {
//       id: "phone-number",
//       label: "Phone Number",
//       placeholder: "Enter Phone Number",
//       type: "tel",
//       required: false,
//       Icon: User,
//       name: "phoneNumber",
//     },
//     {
//       id: "address",
//       label: "Address",
//       placeholder: "Enter Address",
//       type: "text",
//       required: true,
//       Icon: User,
//       name: "address",
//     },
//     {
//       id: "driver-id",
//       label: "Driver ID",
//       placeholder: "Enter Driver ID",
//       type: "text",
//       required: false,
//       Icon: User,
//       name: "driverId",
//     },
//   ];

//   const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad"];
//   // Chunk inputData into groups of 6
//   const rows = inputData.reduce((acc, curr, index) => {
//     if (index % 6 === 0) {
//       acc.push(inputData.slice(index, index + 6));
//     }
//     return acc;
//   }, []);

//   return (
//     <form>
//       {rows.map((row, rowIndex) => (
//         <div
//           key={rowIndex}
//           className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 ml-2 mr-2"
//         >
//           {row.reduce((grids, input, index) => {
//             if (index % 3 === 0) {
//               grids.push(row.slice(index, index + 3));
//             }
//             return grids;
//           }, []).map((grid, gridIndex) => (
//             <div key={gridIndex} className="grid grid-cols-3 gap-4 p-4 border rounded-lg">
//                    <OptionInput
//           options={cities}
//           Icon={Building}
//           def="Select City"
//           required={true}
//           label="City"
//           name="city"
//           value={""}
//           onChange={""}
//         />
//               {grid.map((input) => (
//                 <div key={input.id}>
            
//                   <InputFields
//                     id={input.id}
//                     label={input.label}
//                     placeholder={input.placeholder}
//                     type={input.type}
//                     required={input.required}
//                     Icon={input.Icon}
//                     name={input.name}
//                     value={input.value}
//                     onChange={input.onChange}
//                   />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       ))}
//     </form>
//   );
// };

// export default DocumentUpload;











import React, { useState } from "react";
import { InputFields, OptionInput } from "./smallcomponents";
import { Building, User } from "lucide-react";

const DocumentUpload = () => {
  const optionArray= ["Option 1", "Option 2", "Option 3"]
  const GOVIDoptionArray= ["Adharcard", "Option 2", "Option 3"]
  const inputData = [

    {
      id: "LicenseNumber",
      label: "License Number",
      placeholder: "License Number",
      type: "text",
      required: true,
      Icon: User,
      name: "licenseNumber",
  
    },
    {
      id: "Lic-ED",
      label: "Expire Date",
      placeholder: "Expire Date",
      type: "date",
      required: true,
      Icon: User,
      name: "Lic-ED",
    },
    {
      id: "lic-doc",
      label: "Document",
      placeholder: "lic-doc",
      type: "file",
      required: true,
      Icon: User,
      name: "lic-doc",
    }, 
    {
      id: "BGV",
      label: "BGV Status",
      required: true,
      Icon: User,
      name: "bgv",
      component: "OptionInput",
      options: optionArray,
      def: "Pending",
    },
    {
      id: "bgv-ED",
      label: "Expire Date",
      placeholder: "Expire Date",
      type: "date",
      required: true,
      Icon: User,
      name: "bgv-ED",
    },
    {
      id: "bgv-doc",
      label: "Document",
      placeholder: "bgv-doc",
      type: "file",
      required: true,
      Icon: User,
      name: "bgv-doc",
    }, 
    // Police Verification
    {
      id: "Police-Verification",
      label: "Police Verification Status",
      required: true,
      Icon: User,
      name: "police-verification",
      component: "OptionInput",
      options: optionArray,
      def: "Pending",
    },
    {
      id: "police-ED",
      label: "Expire Date",
      placeholder: "Expire Date",
      type: "date",
      required: true,
      Icon: User,
      name: "police-ED",
    },
    {
      id: "police-doc",
      label: "Document",
      placeholder: "police-doc",
      type: "file",
      required: true,
      Icon: User,
      name: "police-doc",
    },
  
    // Medical Verification
    {
      id: "Medical-Verification",
      label: "Medical Verification Status",
      required: true,
      Icon: User,
      name: "medical-verification",
      component: "OptionInput",
      options:optionArray,
      def: "Pending",
    },
    {
      id: "medical-ED",
      label: "Expire Date",
      placeholder: "Expire Date",
      type: "date",
      required: true,
      Icon: User,
      name: "medical-ED",
    },
    {
      id: "medical-doc",
      label: "Document",
      placeholder: "medical-doc",
      type: "file",
      required: true,
      Icon: User,
      name: "medical-doc",
    },
  
    // Training Verification
    {
      id: "Training-Verification",
      label: "Training Verification Status",
      required: true,
      Icon: User,
      name: "training-verification",
      component: "OptionInput",
      options:optionArray,
      def: "Pending",
    },
    {
      id: "training-ED",
      label: "Expire Date",
      placeholder: "Expire Date",
      type: "date",
      required: true,
      Icon: User,
      name: "training-ED",
    },
    {
      id: "training-doc",
      label: "Document",
      placeholder: "training-doc",
      type: "file",
      required: true,
      Icon: User,
      name: "training-doc",
    },
    {
      id: "govID",
      label: "GOV ID",
      required: true,
      Icon: User,
      name: "govID",
      component: "OptionInput",
      options:GOVIDoptionArray,
      def: "Select ID",
    },
    {
      id: "idnumber",
      label: "ID NUMBER",
      placeholder: "ID NUMBER",
      type: "Text",
      required: true,
      Icon: User,
      name: "adharID",
    },
    {
      id: "training-doc",
      label: "Document",
      placeholder: "training-doc",
      type: "file",
      required: true,
      Icon: User,
      name: "training-doc",
    },
    {
      id: "inductiondate",
      label: "Induction Date",
      placeholder: "Induction Date",
      type: "date",
      required: true,
      Icon: User,
      name: "inductionDate",
    },
    {
      id: "training-doc",
      label: " Induction Document",
      placeholder: "training-doc",
      type: "file",
      required: true,
      Icon: User,
      name: "training-doc",
    },
    {
      id: "currentaddress",
      label: "Cuerrent Address",
      placeholder: "Current Address",
      type: "file",
      required: true,
      Icon: User,
      name: "CurrentAddress",
    },
    {
      id: "eyetestexpiry",
      label: "EyeTest Expiry Date",
      placeholder: "Induction Date",
      type: "date",
      required: true,
      Icon: User,
      name: "inductionDate",
    },
    {
      id: "training-doc",
      label: "EyeTest ED Document",
      placeholder: "training-doc",
      type: "file",
      required: true,
      Icon: User,
      name: "training-doc",
    },
    {
      id: "letterofundertaking",
      label: "Letter of Undertaking",
      placeholder: "Letter of Undertaking",
      type: "file",
      required: true,
      Icon: User,
      name: "letterofundertaking",
    },
  ];
  
  const [formData, setFormData] = useState({
    licenseNumber: "",
    "Lic-ED": "",
    "lic-doc": null, // File fields initialized as null
    bgv: "",
    "bgv-ED": "",
    "bgv-doc": null,
    "police-verification": "",
    "police-ED": "",
    "police-doc": null, 
    "medical-verification": "",
    "medical-ED": "",
    "medical-doc": null,
    "training-verification": "",
    "training-ED": "",
    "training-doc": null,
    govID: "",
    adharID: "",
    inductionDate: "",
    CurrentAddress: null,
    letterofundertaking: null, // File input for this field
  });
  
  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
  
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? (files && files[0]) : value, // Store file object or value
    }));
  };
  
  
  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad"];
  // Chunk inputData into groups of 6
  const rows = inputData.reduce((acc, curr, index) => {
    if (index % 6 === 0) {
      acc.push(inputData.slice(index, index + 6));
    }
    return acc;
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form Data:", formData);
  };

  return (
<form onSubmit={handleSubmit} className="">
  {rows.map((row, rowIndex) => (
    <div
      key={rowIndex}
      className=" grid grid-cols-1 xl:grid-cols-2 gap-3 mb-4 mr-3 ml-3 "
    >
      {row.reduce((grids, input, index) => {
        // Group inputs into sets of 3
        if (index % 3 === 0) {
          grids.push(row.slice(index, index + 3));
        }
        return grids;
      }, []).map((grid, gridIndex) => (
        <div
          key={gridIndex}
          className="  grid md:grid-cols-3 gap-4 p-4 gap-1 border rounded-lg"
        >
          {grid.map((input, inputIndex) => (
            <div key={input.id}>
              {input.component === "OptionInput" ? (
                // Render OptionInput
                <OptionInput
                  label={input.label}
                  required={input.required}
                  Icon={input.Icon}
                  name={input.name}
                  options={input.options}
                  value={formData[input.name] || input.def}
                  onChange={handleChange}
                  def={input.def}
                />
              ) : (
                // Render InputFields
                <InputFields
                  id={input.id}
                  label={input.label}
                  placeholder={input.placeholder}
                  type={input.type}
                  required={input.required}
                  Icon={input.Icon}
                  name={input.name}
                  value={formData[input.name]||""}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  ))}

<div className="p-3">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
</form>

  );
};

export default DocumentUpload;
