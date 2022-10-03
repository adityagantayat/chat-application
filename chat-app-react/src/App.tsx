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
import { PropsWithChildren } from 'react';
import { Socket } from 'socket.io-client';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/index';
import { enableMapSet } from 'immer';

enableMapSet();
type Props = {
	user?: User;
	setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
	socket: Socket;
};

// * providers for context, redux and socket
function AppWithProviders({ children, user, setUser }: PropsWithChildren & Props): JSX.Element {
	return (
		<ReduxProvider store={store}>
			<AuthContext.Provider value={{ user, updateAuthUser: setUser }}>
				<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
			</AuthContext.Provider>
		</ReduxProvider>
	);
}

function App() {
	const [user, setUser] = useState<User>();
	return (
		<>
			<Router>
				<AppWithProviders user={user} setUser={setUser} socket={socket}>
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
				</AppWithProviders>
			</Router>
		</>
	);
}

type AuthProps = {
	children: React.ReactNode;
};

const RequireAuth: FC<AuthProps> = ({ children }) => {
	const { loading, user } = useAuth();
	const location = useLocation();
	if (loading) return <div>Loading...</div>;
	if (user) return <>{children}</>;
	return <Navigate to='/login' state={{ from: location }} replace />;
};

export default App;
