import { FC, useContext } from 'react';
import { formatRelative } from 'date-fns';
import { MessageContainerStyle, MessageItemContainer, MessageItemContent, MessageItemDetails, MessageItemLayout, ProfilePic } from '../../utils/styles';
import { MessageType } from '../../utils/types';
import { MessageItemHeader, MessageTime } from '../../utils/styles/index';
import { AuthContext } from '../../utils/context/AuthContext';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../store';

type Props = {
	messages: MessageType[];
};

export const MessageContainer: FC<Props> = ({ messages }) => {
	const { user } = useContext(AuthContext);
	const { id } = useParams();
	const conversationMessages = useSelector((state: RootState) => state.messages.messages);
	const isUserMsg = (msg: MessageType) => {
		return msg.author.id === user?.id;
	};
	const isSameAuthor = (msg: MessageType) => {
		if (msgs) {
			const current = msgs.messages.findIndex((item: MessageType) => item.id === msg.id);
			return msgs.messages[current]?.author?.id === msgs.messages[current + 1]?.author?.id;
		}
	};
	const msgs = conversationMessages.find((cm) => cm.id === parseInt(id!));

	if (!msgs) return null;
	return (
		<MessageContainerStyle>
			{msgs?.messages?.map((msg) => (
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
								<MessageItemContent bg_color={isUserMsg(msg) ? 'blueviolet' : 'linear-gradient(#ee5988, rgb(167,151,255) 70%, rgb(0, 229, 255) 100%)'}>
									{msg.content}
								</MessageItemContent>
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
