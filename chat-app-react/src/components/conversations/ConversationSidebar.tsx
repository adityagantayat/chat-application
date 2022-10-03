import { ConversationSidebarContainer, ConversationSidebarHeader, ConversationSidebarItemStyle, ConversationSidebarStyle } from '../../utils/styles';
import { TbEdit } from 'react-icons/tb';
import { FC, useContext, useState } from 'react';
import styles from './index.module.scss';

// import { CreateConversationModal } from '../modals/CreateConversationModal';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store';
// import { ConversationSelected } from './ConversationSelected';
// import { ConversationSidebarItem } from './ConversationSidebarItem';
// import { GroupSidebarItem } from '../groups/GroupSidebarItem';
import { Logo } from '../../utils/styles/index';
import { AuthContext } from '../../utils/context/AuthContext';
import CreateConversationModal from '../modals/CreateConversationModal';
import { Conversation } from '../../utils/types';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

type Props = {
	conversations: Conversation[];
};
export const ConversationSidebar: FC<Props> = () => {
	const [showModal, setShowModal] = useState(false);
	const { user } = useContext(AuthContext);
	const navigate = useNavigate();

	const getDisplayUser = (conversation: Conversation) => {
		return conversation.creator.id === user?.id ? conversation.recipient : conversation.creator;
	};
	const conversations = useSelector((state: RootState) => state.conversation.conversations);
	// const groups = useSelector((state: RootState) => state.groups.groups);

	// const selectedConversationType = useSelector(
	//   (state: RootState) => state.selectedConversationType.type
	// );

	return (
		<>
			{showModal && <CreateConversationModal setShowModal={setShowModal} />}
			<ConversationSidebarStyle>
				<ConversationSidebarHeader>
					<Logo
						src={user?.image}
						style={{
							marginLeft: '-8px',
							height: '50px',
							width: '50px',
							borderRadius: '50%',
						}}
					/>
					<h1>Conversations</h1>
					<div className={styles.editIcon} onClick={() => setShowModal(!showModal)}>
						<TbEdit size={35} />
					</div>
				</ConversationSidebarHeader>
				<ConversationSidebarContainer>
					{conversations.map((conversation) => (
						<ConversationSidebarItemStyle key={conversation.id} onClick={() => navigate(`/conversations/${conversation.id}`)}>
							<Logo
								src={conversation.recipient.id === user?.id ? conversation.creator.image : conversation.recipient.image}
								style={{
									marginLeft: '-8px',
									height: '40px',
									width: '40px',
									borderRadius: '50%',
								}}
							/>
							<div>
								<span className={styles.conversationName}>
									{getDisplayUser(conversation).firstName} {getDisplayUser(conversation).lastName}
								</span>
								<span className={styles.conversationLastMessage}>sample text</span>
							</div>
						</ConversationSidebarItemStyle>
					))}
					{/* <ConversationSelected /> */}
					{/* <section> */}
					{/* {selectedConversationType === 'private'
              ? conversations.map((conversation) => (
                  <ConversationSidebarItem
                    key={conversation.id}
                    conversation={conversation}
                  />
                ))
              : groups.map((group) => (
                  <GroupSidebarItem key={group.id} group={group} />
                ))} */}
					{/* </section> */}
				</ConversationSidebarContainer>
			</ConversationSidebarStyle>
		</>
	);
};
