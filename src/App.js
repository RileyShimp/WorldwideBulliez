import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Puppies from './pages/Puppies';
import Studs from './pages/Studs';
import Home from './pages/Home';
import Contact from './pages/Contact';
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/studs' element={<Studs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/puppies' element={<Puppies/>}/>
        </Routes>
      </div>
      </>
    </div>
  );
}

export default App;
