import React from 'react';
import { ConversationChannelPageStyle } from '../../utils/styles/index';
import { useContext } from 'react';
import { AuthContext } from '../../utils/context/AuthContext';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getConversationMessages } from '../../utils/api';
import { MessageType } from '../../utils/types';
import MessagePanel from '../../components/messages/MessagePanel';

const ConversationChannelPage = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [messages, setMessages] = useState<MessageType[]>([]);

  useEffect(() => {
    getConversationMessages(parseInt(id!))
      .then(({ data }) => setMessages(data))
      .catch((err) => console.log(err));
  },[id])
  return (
    <ConversationChannelPageStyle>
      <MessagePanel messages={messages}></MessagePanel>
    </ConversationChannelPageStyle>
  );
};

export default ConversationChannelPage;
