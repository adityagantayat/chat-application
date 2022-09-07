import { ConversationChannelPageStyle } from '../../utils/styles';
import { Logo } from '../../utils/styles/index';
import Typewriter from 'typewriter-effect';
import { useContext } from 'react';
import { AuthContext } from '../../utils/context/AuthContext';
export const ConversationPanel = () => {
  // const user = {
  //   email: 'adityanarayan10@gmail.com',
  //   firstName: 'Aditya',
  //   lastName: 'Gantayat',
  //   password: 'qwerty',
  //   image:
  //     'https://firebasestorage.googleapis.com/v0/b/chat-bdbeb.appspot.com/o/1662269078078258D4C84-46E2-4F36-AC4A-C1E8C1984937.JPG?alt=media&token=df5805fd-df32-4f6e-a60f-53e2dd3e64b9',
  // };
  const { user } = useContext(AuthContext);
  return (
    <ConversationChannelPageStyle
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Logo
        style={{
          height: '300px',
          width: '300px',
          margin: '50px',
          borderRadius: '50%',
        }}
        src={user?.image}
      />
      {/* <Logo
        src={user?.image}
        style={{
          marginLeft: '-8px',
          height: '100px',
          width: '100px',
          borderRadius: '50%',
        }}
      /> */}
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              `<h1 style="color: #8f8f8f; font-family: Courier New; text-align: center;" >Welcome <span style="color: green; font-weight: 800; font-family: Courier New; font-style:italic;">${user?.firstName} ${user?.lastName}</span>!</h1>`
            )
            // .deleteAll()
            .typeString(
              '<h1 style="color: #8f8f8f; font-family: Courier New" >Open a conversation to start chatting...</h1>'
            )
            .start();
        }}
      />
    </ConversationChannelPageStyle>
  );
};
