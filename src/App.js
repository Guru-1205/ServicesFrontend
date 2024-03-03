import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from "./Home";
import AddServiceMember from './pages/AddServiceMember';
import UpdateServiceMember from './pages/UpdateServiceMember';
import DeleteServiceMember from './pages/DeleteServiceMember';
import ViewServiceMember from './pages/ViewServiceMember';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/addServiceMember" element={<AddServiceMember />}></Route>
          <Route exact path="/updateServiceMember" element={<UpdateServiceMember />}></Route>
          <Route exact path="/deleteServiceMember" element={<DeleteServiceMember />}></Route>
          <Route exact path="/viewServiceMember" element={<ViewServiceMember/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
