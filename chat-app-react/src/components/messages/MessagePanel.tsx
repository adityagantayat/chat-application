import React, { FC } from 'react';
import { MessagePanelStyle, MessagePanelBody } from '../../utils/styles/index';
import { MessageType } from '../../utils/types';
import { MessageContainer } from './MessageContainer';
import MessageInputField from './MessageInputField';
import { MessagePanelHeader } from './MessagePanelHeader';

type Props = {
	messages: MessageType[];
};
const MessagePanel: FC<Props> = ({ messages }) => {
	return (
		<MessagePanelStyle>
			<MessagePanelHeader />
			<MessagePanelBody>
				<MessageContainer messages={messages} />
				<MessageInputField />
			</MessagePanelBody>
		</MessagePanelStyle>
	);
};

export default MessagePanel;
