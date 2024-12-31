import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drivers from './components/Drivers';
import RegisterDriver from './maincompoents/RegisterDriver';
import { useContext, useState } from 'react';

import Sidebar from './maincompoents/Sidebar';
import { Menu } from 'lucide-react';
import GlobalContext from './store/context';




function App() {
  const { isHovered, setIsHovered } = useContext(GlobalContext); // Correct usage

   const handlenav=()=>{
setIsHovered(true)
  }
  return (
    <Router>
    
      <div className="flex">
      
      <div className="flex h-screen bg-gray-100">
      <Sidebar  />

    </div>
    
        <main className="flex-1 bg-gray-100 ">
          {/*  only  this will be displayed in the  small screen  */}
        <nav className="flex items-center justify-between p-4 bg-red-500 shadow-md lg:hidden">
    {/* Menu Button */}
      <button
         onClick={handlenav}
        className="text-white hover:bg-red-600 p-2 rounded-lg"
        aria-label="Toggle Menu"
      >
        <Menu size={24} />
      </button>
      {/* Branding / Logo */}

      <h1 className="text-white text-lg font-bold">MyApp</h1>

  
     
    </nav>
          <Routes>
          <Route path="/" element={<RegisterDriver/> } />
            <Route path="/drivers" element={<Drivers/>} />
            <Route path="/" element={<h1>Vehicle Contracts</h1>} />
            <Route path="/vehicle-contracts" element={<h1>Vehicle Contracts</h1>} />
            <Route path="/cost-center" element={<h1>Cost Center</h1>} />
            <Route path="/new-contracts" element={<h1>Manage New Contracts</h1>} />
            <Route path="/vehicles" element={<h1>Manage Vehicles</h1>} />
            <Route path="/vehicle-types" element={<h1>Manage Vehicle Types</h1>} />
            <Route path="/audit-report" element={<h1>Daily Audit Report</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;