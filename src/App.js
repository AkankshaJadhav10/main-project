import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Form from './components/Form';
import Car1 from './components/Car1';
import Bike from './components/Bike';
import Travel from './components/Travel';
import Health from './components/Health';
import Cyber from './components/Cyber';
import Renewal from './components/Renewal';
import Main from './components/Main';
import LastPart from './components/LastPart';
function App() {
  return (
    <>
    <Main/>
   <Routes>
    <Route path="/car" element={<Car1/>}/>
    <Route path="/bike" element={<Bike/>}/>
    <Route path="/travel" element={<Travel/>}/>
    <Route path="/health" element={<Health/>}/>
    <Route path="/cyber" element={<Cyber/>}/>
    <Route path="/renewal" element={<Renewal/>}/>
   </Routes>
   <LastPart/>
    </>
  );
}

export default App;

