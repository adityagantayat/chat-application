import { FC, useContext } from 'react';
import { formatRelative } from 'date-fns';
import { MessageContainerStyle, MessageItemContainer, MessageItemContent, MessageItemDetails, MessageItemLayout, ProfilePic } from '../../utils/styles';
import { MessageType } from '../../utils/types';
import { MessageItemHeader, MessageTime } from '../../utils/styles/index';
import { AuthContext } from '../../utils/context/AuthContext';

type Props = {
	messages: MessageType[];
};

export const MessageContainer: FC<Props> = ({ messages }) => {
	const { user } = useContext(AuthContext);
	const isUserMsg = (msg: MessageType) => {
		return msg.author.id === user?.id;
	};
	const isSameAuthor = (msg: MessageType) => {
		const current = messages.findIndex((item: MessageType) => item.id === msg.id);
		return messages[current]?.author?.id === messages[current + 1]?.author?.id;
	};
	return (
		<MessageContainerStyle>
			{messages.map((msg) => (
				<MessageItemContainer
					key={msg.id}
					justify={isUserMsg(msg) ? 'flex-end' : 'flex-start'}
					textAlign={isUserMsg(msg) ? '-webkit-right' : '-webkit-left'}
					padding={isSameAuthor(msg) ? '0 60px' : '5px 0'}
				>
					<MessageItemLayout flexDirection={isUserMsg(msg) ? 'row-reverse' : 'row'} justify={isUserMsg(msg) ? 'flex-end' : 'flex-start'}>
						<ProfilePic hidden={isSameAuthor(msg)} src={msg.author.image} style={{ width: '40px', height: '40px' }} />
						<MessageItemDetails>
							<MessageItemHeader hidden={isSameAuthor(msg)}>
								<span className='authorName'>
									{msg.author.firstName} {msg.author.lastName}
								</span>
							</MessageItemHeader>
							<div>
								<MessageItemContent bg_color={isUserMsg(msg) ? 'blueviolet' : 'teal'}>{msg.content}</MessageItemContent>
								<MessageTime className='time'>{formatRelative(new Date(msg.createdAt), new Date())}</MessageTime>
							</div>
						</MessageItemDetails>
					</MessageItemLayout>
				</MessageItemContainer>
			))}
		</MessageContainerStyle>
	);
};

export default MessageContainer;
