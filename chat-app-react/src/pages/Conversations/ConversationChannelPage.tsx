import React from 'react';
import { ConversationChannelPageStyle } from '../../utils/styles/index';
import { useContext } from 'react';
import { AuthContext } from '../../utils/context/AuthContext';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getConversationMessages } from '../../utils/api';
import { MessageEventPayload, MessageType } from '../../utils/types';
import MessagePanel from '../../components/messages/MessagePanel';
import { SocketContext } from '../../utils/context/SocketContext';

const ConversationChannelPage = () => {
	const { user } = useContext(AuthContext);
	const socket = useContext(SocketContext);
	const { id } = useParams();
	const [messages, setMessages] = useState<MessageType[]>([]);

	useEffect(() => {
		getConversationMessages(parseInt(id!))
			.then(({ data }) => setMessages(data))
			.catch((err) => console.log(err));
	}, [id]);

	useEffect(() => {
		socket.on('connected', () => console.log('Connected'));
		socket.on('onMessage', (payload: MessageEventPayload) => {
			const { conversation, ...message } = payload;
			setMessages((prev) => [message, ...prev]);
		});
		return () => {
			socket.off('connected');
			socket.off('onMessage');
		};
	}, []);

	return (
		<ConversationChannelPageStyle>
			<MessagePanel messages={messages}></MessagePanel>
		</ConversationChannelPageStyle>
	);
};

export default ConversationChannelPage;
