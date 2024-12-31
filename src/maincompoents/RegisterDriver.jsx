import { useState } from "react";
import PersionalDetail from "../components/PersionalDetail";
import DocumentUpload from "../components/DocumentUpload";

const RegisterDriver = () => {
  const [activeTab, setActiveTab] = useState(true); // No type assertion in plain JavaScript

  return (
    <>
      <div className=" mt-4 "><h1 className="text-2xl  ml-4 text-tertiary-dark font-bold"> ADD DRIVER</h1></div>

   <div className="mt-3 p-3 ">
  <nav className="">
      <button  onClick={() => setActiveTab(true)}
              className={`${
                activeTab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 text-lg border-b-4 font-medium `}>
        Persional Details 
      </button>
      <button onClick={() => setActiveTab(false)}
              className={`${
                !activeTab 
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-3 text-lg border-b-4 font-medium `}>
        Documents
      </button>
  </nav>
   </div>
        {/* content section  */}
      <div>
        {
          activeTab?<PersionalDetail/>:""
        }
      </div>
</>
  );
};

export default RegisterDriver;
