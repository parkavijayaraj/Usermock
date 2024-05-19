import React, { useState } from 'react';
import Home from './pages/Home';
import User from './pages/User';
import Edit from './pages/Edit';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './pages/Create';

const App = () => {
  const[id,setId]=useState(0)
  return (

    <div>
    
      <BrowserRouter >
            <div>
                <NavBar />
            </div>
           <Routes>
            <Route  path='/' element={<Home />} />
             <Route  path='/user' element={<User setId={setId}/>} />
             <Route path='/edit/:id' element={<Edit id={id}/>} />
            <Route path='/create' element={<Create />}/>
            </Routes>
            <div>
               <Footer />
            </div>
            </BrowserRouter>
           
    </div>
  );
};

export default App;