import React, { FC, useState } from 'react';
import { MessagePanelStyle, MessagePanelBody } from '../../utils/styles/index';
import { MessageType } from '../../utils/types';
import { MessageContainer } from './MessageContainer';
import MessageInputField from './MessageInputField';
import { MessagePanelHeader } from './MessagePanelHeader';
import { useParams } from 'react-router-dom';
import { postNewMessage } from '../../utils/api';

type Props = {
	messages: MessageType[];
};
const MessagePanel: FC<Props> = ({ messages }) => {
	const [content, setContent] = useState<string>('');
	const { id } = useParams();

	// * function to post the message
	const sendMsg = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!id || !content) return;
		const conversationId = parseInt(id);
		try {
			await postNewMessage({ conversationId, content });
			setContent('');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<MessagePanelStyle>
			<MessagePanelHeader />
			<MessagePanelBody>
				<MessageContainer messages={messages} />
				<MessageInputField content={content} setContent={setContent} sendMsg={sendMsg} />
			</MessagePanelBody>
		</MessagePanelStyle>
	);
};

export default MessagePanel;
