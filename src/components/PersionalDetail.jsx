import { FaUpload } from "react-icons/fa";

const PersionalDetail = () => {
  // Define verification statuses
  const verificationStatuses = ["Pending", "Completed", "Rejected", "In Progress"];

  return (
    <div>
      <form>
        {['BGV', 'Police', 'Medical', 'Training'].map((verificationType) => (
          <div
            key={verificationType}
            className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-lg"
          >
            {/* Verification Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {verificationType} Status
              </label>
              <select className="w-full mt-1 rounded-md border border-gray-300 py-2 px-3">
                {verificationStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            {/* Expiry Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <input
                type="date"
                className="w-full mt-1 rounded-md border border-gray-300 py-2 px-3"
              />
            </div>

            {/* Document Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Document</label>
              <div className="flex items-center space-x-2 mt-1">
                <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                  <FaUpload className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">Upload file</span>
                  <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                </label>
              </div>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default PersionalDetail;
