import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EmployeeForm from './components/EmployeeForm'; // Novo componente

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/employee" element={<EmployeeForm />} /> {/* Nova rota */}
            </Routes>
        </Router>
    );
}

export default App;