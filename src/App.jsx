import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DriverForm from './components/DriverForm';
import Drivers from './components/Drivers';
import Analysis from './components/Analysis';
import RegisterDriver from './maincompoents/RegisterDriver';

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <Routes>
          <Route path="/" element={<RegisterDriver/> } />
            <Route path="/drivers" element={<Drivers/>} />
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