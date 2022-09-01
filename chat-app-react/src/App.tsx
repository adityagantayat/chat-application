import React from 'react';
import {
  Outlet,
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/login' element={<LoginPage />} />
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
      </Router>
    </>
  );
}

export default App;
