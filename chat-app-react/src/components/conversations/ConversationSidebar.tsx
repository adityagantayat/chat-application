import {
  ConversationSidebarContainer,
  ConversationSidebarHeader,
  ConversationSidebarStyle,
} from '../../utils/styles';
import { TbEdit } from 'react-icons/tb';
import { useState } from 'react';
// import { CreateConversationModal } from '../modals/CreateConversationModal';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store';
// import { ConversationSelected } from './ConversationSelected';
// import { ConversationSidebarItem } from './ConversationSidebarItem';
// import { GroupSidebarItem } from '../groups/GroupSidebarItem';
import { Logo } from '../../utils/styles/index';

export const ConversationSidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const user = {
    email: 'adityanarayan10@gmail.com',
    firstName: 'Aditya',
    lastName: 'Gantayat',
    password: 'qwerty',
    image:
      'https://firebasestorage.googleapis.com/v0/b/chat-bdbeb.appspot.com/o/1662269078078258D4C84-46E2-4F36-AC4A-C1E8C1984937.JPG?alt=media&token=df5805fd-df32-4f6e-a60f-53e2dd3e64b9',
  };
  // const conversations = useSelector(
  //   (state: RootState) => state.conversation.conversations
  // );
  // const groups = useSelector((state: RootState) => state.groups.groups);

  // const selectedConversationType = useSelector(
  //   (state: RootState) => state.selectedConversationType.type
  // );

  return (
    <>
      {/* {showModal && <CreateConversationModal setShowModal={setShowModal} />} */}
      <ConversationSidebarStyle>
        <ConversationSidebarHeader>
          <Logo
            src={user.image}
            style={{
              marginLeft: '-8px',
              height: '50px',
              width: '50px',
              borderRadius: '50%',
            }}
          />
          <h1>Conversations</h1>
          <div onClick={() => setShowModal(!showModal)}>
            <TbEdit size={35} />
          </div>
        </ConversationSidebarHeader>
        <ConversationSidebarContainer>
          {/* <ConversationSelected /> */}
          <section>
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
          </section>
        </ConversationSidebarContainer>
      </ConversationSidebarStyle>
    </>
  );
};
