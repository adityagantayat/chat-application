import React from 'react';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<div>Home</div>}></Route>
        <Route
          path='conversations'
          element={
            <div>
              <div>conversations</div>
              <Outlet />
            </div>
          }
        >
          <Route path=':id' element={<div>conv id</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
