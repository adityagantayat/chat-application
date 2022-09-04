import React from 'react';
import {
  Outlet,
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import { ConversationPage } from './pages/Conversations/ConversationsPage';
import { LoginPage } from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ConversationChannelPage from './pages/Conversations/ConversationChannelPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='conversations' element={<ConversationPage />}>
            <Route path=':id' element={<ConversationChannelPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
