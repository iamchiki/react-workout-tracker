import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Create from './pages/Create';

function App() {
  return (
    <React.Fragment>
      <HeaderComponent></HeaderComponent>
      <main>
        <Routes>
          <Route path='register' element={<Register></Register>} />
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='create' element={<Create></Create>}></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
