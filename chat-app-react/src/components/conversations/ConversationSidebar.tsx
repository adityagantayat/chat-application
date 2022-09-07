import {
  ConversationSidebarContainer,
  ConversationSidebarHeader,
  ConversationSidebarStyle,
} from '../../utils/styles';
import { TbEdit } from 'react-icons/tb';
import { useContext, useState } from 'react';
// import { CreateConversationModal } from '../modals/CreateConversationModal';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../store';
// import { ConversationSelected } from './ConversationSelected';
// import { ConversationSidebarItem } from './ConversationSidebarItem';
// import { GroupSidebarItem } from '../groups/GroupSidebarItem';
import { Logo } from '../../utils/styles/index';
import { AuthContext } from '../../utils/context/AuthContext';

export const ConversationSidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);

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
            src={user?.image}
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
