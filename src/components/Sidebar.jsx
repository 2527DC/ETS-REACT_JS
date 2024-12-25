import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  People, 
  DirectionsCar, 
  Description, 
  Assessment,
  BusinessCenter,
  Category,
  MonetizationOn
} from '@mui/icons-material';

const menuItems = [
  { title: 'Manage Drivers', icon: People, path: '/drivers' },
  { title: 'Vehicle Contracts', icon: Description, path: '/vehicle-contracts' },
  { title: 'Cost Center', icon: MonetizationOn, path: '/cost-center' },
  { title: 'Manage New Contracts', icon: BusinessCenter, path: '/new-contracts' },
  { title: 'Manage Vehicles', icon: DirectionsCar, path: '/vehicles' },
  { title: 'Manage Vehicle Types', icon: Category, path: '/vehicle-types' },
  { title: 'Daily Audit Report', icon: Assessment, path: '/audit-report' },
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();

  return (
    <div 
      className={`bg-gray-800 text-white h-screen transition-all duration-300 ${
        isExpanded ? 'w-64' : 'w-20'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
  <div className="p-4 flex items-center">
  <img src="https://via.placeholder.com/100" alt="Company Logo"className="w-20 h-20 mr-3"/>
  <h1 className={`text-xl font-bold ${!isExpanded && 'scale-0'} transition-all duration-300`}> Company Name </h1>
</div>

      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center px-4 py-3 transition-colors duration-200
              ${location.pathname === item.path ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          >
            <item.icon className="w-6 h-6" />
            <span className={`ml-4 ${!isExpanded && 'hidden'} whitespace-nowrap`}>
              {item.title}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;