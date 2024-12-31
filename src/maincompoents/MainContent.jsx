import { Menu } from 'lucide-react';

const MainContent = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">John Doe</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard Overview</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Stats Cards */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-500 text-sm font-medium">Total Drivers</h3>
              <p className="text-2xl font-semibold text-gray-900">245</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-500 text-sm font-medium">Active Vehicles</h3>
              <p className="text-2xl font-semibold text-gray-900">182</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-500 text-sm font-medium">Total Contracts</h3>
              <p className="text-2xl font-semibold text-gray-900">1,234</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-gray-500 text-sm font-medium">Revenue</h3>
              <p className="text-2xl font-semibold text-gray-900">$45,678</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">New driver registration completed</p>
                        <p className="text-xs text-gray-400">2 hours ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100">
                    Add New Driver
                  </button>
                  <button className="p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100">
                    Create Contract
                  </button>
                  <button className="p-4 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100">
                    Register Vehicle
                  </button>
                  <button className="p-4 bg-orange-50 text-orange-700 rounded-lg hover:bg-orange-100">
                    Generate Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainContent;