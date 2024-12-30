import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Users,
  Car,
  FileText,
  PieChart,
  Briefcase,
  Tags,
  DollarSign,
  PanelLeftClose,
  PanelLeftOpen,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  { title: "Manage Drivers", icon: Users, path: "/drivers" },
  { title: "Vehicle Contracts", icon: FileText, path: "/vehicle-contracts" },
  { title: "Cost Center", icon: DollarSign, path: "/cost-center" },
  { title: "Manage New Contracts", icon: Briefcase, path: "/new-contracts" },
  { title: "Manage Vehicles", icon: Car, path: "/vehicles" },
  { title: "Manage Vehicle Types", icon: Tags, path: "/vehicle-types" },
  { title: "Daily Audit Report", icon: PieChart, path: "/audit-report" },
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
   {

      isMobileMenuOpen? "": <button
      onClick={toggleMobileMenu}
      className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-800 text-white sm:hidden hover:bg-gray-700 transition-colors"
      >
      {">"}
      </button>
   }  

      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white transition-all  h-screen duration-300 fixed sm:relative z-40 
          ${isExpanded ? "w-64" : "w-20"}
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
        `}
      >
        {/* Sidebar Header */}
        <div className="px-3 py-4 flex items-center justify-between border-b  border-gray-700">
          {/* Conditionally Render Image */}
          {isExpanded && (
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&fit=crop&q=80"
              alt="Company Logo"
              className="w-12 h-12 rounded-lg object-cover"
            />
          )}
          <h1
            className={`ml-3 text-xl font-bold transition-all duration-300
              ${!isExpanded && "hidden"}
            `}
          >
            Dashboard
          </h1>
          {/* Sidebar Toggle Button */}
          <button
            onClick={toggleSidebar}
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-lg ml-2 hover:bg-gray-700 transition-colors"
          >
            {isExpanded ? (
              <PanelLeftClose size={20} className="text-gray-300" />
            ) : (
              <PanelLeftOpen size={20} className="text-gray-300" />
            )}
          </button>
          {/* Close Button for Mobile */}
          {isMobileMenuOpen && (
            <button
              onClick={toggleMobileMenu}
              className="sm:hidden flex items-center justify-center w-8 h-8 rounded-lg ml-2 hover:bg-gray-700 transition-colors"
            >
              <X size={20} className="text-gray-300" />
            </button>
          )}
        </div>

        {/* Menu Items */}
        <nav className="mt-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center p-2 transition-all duration-200 group
                  ${location.pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }
                  ${!isExpanded && "justify-center"}  // Center icons when collapsed
                `}
              >
                <Icon className={`w-6 h-6`} />
                {isExpanded && (
                  <span
                    className={`ml-4 transition-all duration-300`}
                  >
                    {item.title}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};

export default Sidebar;
