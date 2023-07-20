 
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
// import HomePage from './Pages/HomePage';
// import Programs from './Pages/Programs';
// import Pricing from './Pages/Pricing';
// import Blogs from './Pages/Blogs';

function App() {
  return (
    <div className="App">
       
    <Navbar/>
       <Routes>
        
        {/* <Route path='/' element={<HomePage/>}  /> */}
        {/* <Route path='/Programs' element={<Programs/>}  />
        <Route path='/Pricing' element={<Pricing/>}  />
        <Route path='/Blogs' element={<Blogs/>}  /> */}
       </Routes>
    </div>
  );
}

export default App;
