import React from 'react';
import { ConversationChannelPageStyle } from '../../utils/styles/index';
import { useContext } from 'react';
import { AuthContext } from '../../utils/context/AuthContext';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MessageEventPayload, MessageType } from '../../utils/types';
import MessagePanel from '../../components/messages/MessagePanel';
import { SocketContext } from '../../utils/context/SocketContext';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { addMessage, fetchMessagesThunk } from '../../store/messageSlice';

const ConversationChannelPage = () => {
	const { user } = useContext(AuthContext);
	const socket = useContext(SocketContext);
	const { id } = useParams();
	const conversations = useSelector((state: RootState) => state.conversation.conversations);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		const conversationId = parseInt(id!);
		dispatch(fetchMessagesThunk(conversationId));
	}, [id]);

	useEffect(() => {
		socket.on('connected', () => console.log('Connected'));
		console.log('recall');
		socket.on('onMessage', (payload: MessageEventPayload) => {
			// const { conversation, ...message } = payload;
			dispatch(addMessage(payload));
		});
		return () => {
			socket.off('connected');
			socket.off('onMessage');
		};
	}, []);

	return (
		<ConversationChannelPageStyle>
			<MessagePanel></MessagePanel>
		</ConversationChannelPageStyle>
	);
};

export default ConversationChannelPage;
