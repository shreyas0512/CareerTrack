import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import DashBoard from './components/DashBoard';
import Resume from './components/Resume';
import ResumeInput from './components/ResumeInput';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <HomePage />
    // <DashBoard />
    // <Resume />
    // <ResumeInput />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resumeinput" element={<ResumeInput />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
