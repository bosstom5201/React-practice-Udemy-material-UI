import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
//components
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header />
        <Box sx={{ display: 'flex' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Routes>
              <Route path="" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </>
  )
}

export default App
