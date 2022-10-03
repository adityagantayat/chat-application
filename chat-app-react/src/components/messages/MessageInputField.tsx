import React, { Dispatch, FC, SetStateAction } from 'react';
import { MessageInput, MessageInputContainer } from '../../utils/styles';

type Props = {
	content: string;
	setContent: Dispatch<SetStateAction<string>>;
	sendMsg: (e: React.FormEvent<HTMLFormElement>) => void;
};
const MessageInputField: FC<Props> = ({ content, setContent, sendMsg }) => {
	return (
		<MessageInputContainer>
			<form onSubmit={sendMsg} style={{ width: '100%' }}>
				<MessageInput value={content} onChange={(e) => setContent(e.target.value)} />
			</form>
		</MessageInputContainer>
	);
};

export default MessageInputField;
