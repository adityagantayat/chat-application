import React, { FC, useState } from 'react';
import { Route, Routes, BrowserRouter as Router, useLocation, Navigate } from 'react-router-dom';
import { ConversationPage } from './pages/Conversations/ConversationsPage';
import { LoginPage } from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ConversationChannelPage from './pages/Conversations/ConversationChannelPage';
import { useAuth } from './utils/hooks/useAuth';
import { AuthContext } from './utils/context/AuthContext';
import { User } from './utils/types';
import { SocketContext, socket } from './utils/context/SocketContext';

function App() {
	const [user, setUser] = useState<User>();
	return (
		<>
			<Router>
				<AuthContext.Provider value={{ user, updateAuthUser: setUser }}>
					<SocketContext.Provider value={socket}>
						<Routes>
							<Route path='/register' element={<RegisterPage />}></Route>
							<Route path='/login' element={<LoginPage />} />
							<Route
								path='conversations'
								element={
									<RequireAuth>
										<ConversationPage />
									</RequireAuth>
								}
							>
								<Route path=':id' element={<ConversationChannelPage />} />
							</Route>
						</Routes>
					</SocketContext.Provider>
				</AuthContext.Provider>
			</Router>
		</>
	);
}

type Props = {
	children: React.ReactNode;
};

const RequireAuth: FC<Props> = ({ children }) => {
	const { loading, user } = useAuth();
	const location = useLocation();
	if (loading) return <div>Loading...</div>;
	if (user) return <>{children}</>;
	return <Navigate to='/login' state={{ from: location }} replace />;
};

export default App;
