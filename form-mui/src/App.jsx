import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import FormIntecap from "./components/FormIntecap";
import FormRegister from "./components/FormRegister";


export default function App() {
  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<FormIntecap />} />
          <Route path="/Login" element={<FormIntecap />} />
          <Route path="/register" element={<FormRegister />} />
          
        </Routes>
      </Router>



    </>
  )
}
