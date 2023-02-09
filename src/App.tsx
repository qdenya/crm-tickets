import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    
    <>
      <Router>
          <Sidebar />
          <Header 
            title = "Dashboard"
          />
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
      </Router>
      
    </>
  );
}

export default App;
