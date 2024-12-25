import { useState } from "react";
import PersionalDetail from "../components/PersionalDetail";
import DocumentUpload from "../components/DocumentUpload";

const RegisterDriver = () => {
  const [activeTab, setActiveTab] = useState('personal'); // No type assertion in plain JavaScript

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Add Driver</h1>
          <p className="mt-2 text-sm text-red-600">
            Please enter all the (*) mandatory fields
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('personal')}
              className={`${
                activeTab === 'personal'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              PERSONAL DETAILS
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`${
                activeTab === 'documents'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              DOCUMENTS
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="mb-8">
          {activeTab === 'personal' ? (
            <PersionalDetail onSubmit={(data) => console.log('Personal details:', data)} />
          ) : (
            <DocumentUpload onSubmit={(data) => console.log('Documents:', data)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterDriver;
