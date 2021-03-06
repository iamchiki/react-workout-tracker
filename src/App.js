import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Create from './pages/Create';
import ViewWorkout from './pages/ViewWorkout';

function App() {
  return (
    <React.Fragment>
      <HeaderComponent></HeaderComponent>
      <main>
        <Routes>
          <Route path='/' element={<Navigate to='/home'></Navigate>} />
          <Route path='register' element={<Register></Register>} />
          <Route path='login' element={<Login></Login>}></Route>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='create' element={<Create></Create>}></Route>
          <Route
            path='view/:workoutId'
            element={<ViewWorkout></ViewWorkout>}></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
