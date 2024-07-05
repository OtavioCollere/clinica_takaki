import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import './global.css';
import CostumerPage from './pages/Costumers';
import AddCostumerPage from './pages/AddCostumer';
import ProcedurePage from './pages/Procedures';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }></Route>

          {/* Costumer routes */}
          <Route path="/costumers" element={ <CostumerPage/> }></Route>
          <Route path="/addCostumer" element={ <AddCostumerPage/> }></Route>

          {/* Procedures routes */}
          <Route path="/procedures" element={ <ProcedurePage/> }></Route>

          <Route path="*" element={<h1>not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
