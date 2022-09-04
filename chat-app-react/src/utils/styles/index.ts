import styled, { css } from 'styled-components';
import {
  ContextMenuProps,
  ConversationSelectedProps,
  MessageItemContentProps,
  PageProps,
} from './styleTypes';

export const DARK = '#131313';
export const SIDEBAR_WIDTH = 350;

export const InputField = styled.input`
  background-color: inherit !important;
  outline: none;
  border: none;
  color: #fff !important;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
  font-family: Menlo;
`;
export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
  box-shadow: 7px 6px 24px -1px rgba(38, 37, 37, 0.88);
  -webkit-box-shadow: 7px 6px 24px -1px rgba(38, 37, 37, 0.88);
  -moz-box-shadow: 7px 6px 24px -1px rgba(38, 37, 37, 0.88);
`;
export const InputLabel = styled.label`
  font-family: Menlo;
  display: block;
  color: #8f8f8f;
  font-size: 14px;
  margin: 4px 0;
`;
export const Button = styled.button`
  width: 100%;
  color: green;
  background-color: inherit;
  outline: none;
  border-left: 0.1px solid green;
  border-top: 0.1px solid green;
  border-radius: 10px;
  font-family: Menlo;
  font-weight: 600;
  font-size: 18px;
  height: 70px;
  padding: 20px 0;
  box-shadow: 12px 8px 39px -13px rgba(35, 122, 35, 0.3);
  -webkit-box-shadow: 12px 8px 39px -13px rgba(35, 122, 35, 0.3);
  -moz-box-shadow: 12px 8px 39px -13px rgba(35, 122, 35, 0.3);
  &:hover {
    cursor: pointer;
    /* transform: scale(1.02); */
    transition: all 0.4s ease;
    color: rgb(104, 248, 152);
    background-color: #8f8f8f;
    border: 0.5px solid green;
  }
`;
export const Logo = styled.img`
  height: 100px;
  width: 100px;
  text-align: center;
`;
export const FileLabel = styled.label`
  height: 80px;
  font-family: Menlo;
  cursor: pointer;
  margin-top: 10px;
  text-align: center;
  width: 50%;
  background-color: #131313;
  padding: 20px 16px;
  border-radius: 10px;
  font-size: 20px;
  box-sizing: border-box;
  box-shadow: 7px 6px 24px -1px rgba(38, 37, 37, 0.88);
  -webkit-box-shadow: 7px 6px 24px -1px rgba(38, 37, 37, 0.88);
  -moz-box-shadow: 7px 6px 24px -1px rgba(38, 37, 37, 0.88);
  color: #8f8f8f;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: all 0.4s ease;
    color: #1a1a1a;
    background-color: #8f8f8f;
  }
`;
export const Page = styled.div<PageProps>`
  height: 100%;
  background-color: #131212;
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

export const ConversationSidebarStyle = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${SIDEBAR_WIDTH}px;
  background-color: #1a1a1a;
  border-right: 1px solid black;
  border-radius: 10px;
  box-shadow: 4px 3px 12px -1px rgba(38, 37, 37, 0.88);
  -webkit-box-shadow: 4px 3px 12px -1px rgba(38, 37, 37, 0.88);
  -moz-box-shadow: 4px 3px 12px -1px rgba(38, 37, 37, 0.88);
  overflow-y: scroll;
  margin-right: 6px;
  &::-webkit-scrollbar {
    display: none;
    /* width: 10px;
    height: 5px; */
  }
  /* &::-webkit-scrollbar-thumb {
    background-color: #2d2d2d;
  } */
`;

export const ConversationSidebarHeader = styled.header`
  position: fixed;
  width: ${SIDEBAR_WIDTH}px;
  top: 0;
  left: 0;
  font-family: Menlo;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  box-sizing: border-box;
  color: #8f8f8f;
  background-color: #151515;
  border-radius: 10px;
  height: 100px;
  box-shadow: 4px 3px 12px -1px rgba(38, 37, 37, 0.88);
  -webkit-box-shadow: 4px 3px 12px -1px rgba(38, 37, 37, 0.88);
  -moz-box-shadow: 4px 3px 12px -1px rgba(38, 37, 37, 0.88);
  border-bottom: 1px solid #5454543d;
  & h1 {
    font-weight: 600;
  }
`;

export const ConversationChannelPageStyle = styled.div`
  height: 100%;
  margin-left: ${SIDEBAR_WIDTH}px;
`;

export const ConversationSidebarContainer = styled.div`
  margin-top: 100px;
`;

export const ConversationSidebarItemStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 32px;
  box-sizing: border-box;
  border-bottom: 1px solid #5454543d;
  background-color: #131313;
`;

export const OverlayStyle = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000000c4;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalContainerStyle = styled.div`
  background-color: #121212;
  width: 650px;
  box-sizing: border-box;
  border-radius: 10px;
`;

export const ModalHeaderStyle = styled.header`
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
  & h2 {
    font-weight: 500;
    margin: 0;
  }
`;

export const ModalContentBodyStyle = styled.div`
  padding: 24px;
`;

export const TextField = styled.textarea`
  font-family: 'Inter';
  outline: none;
  border: none;
  background-color: inherit;
  color: #fff;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
  resize: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MessagePanelHeaderStyle = styled.header`
  background-color: #151515;
  border-bottom: 1px solid #5454543d;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
`;

export const MessagePanelStyle = styled.div`
  position: relative;
  background: inherit;
  height: calc(100% - 100px);
  box-sizing: border-box;
`;

export const MessagePanelBody = styled.div`
  height: calc(100%);
  display: flex;
  flex-direction: column;
  padding: 32px 32px 10px 32px;
  padding-top: 0;
  box-sizing: border-box;
`;

export const MessageContainerStyle = styled.div`
  height: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 10px 0;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MessageInputContainer = styled.div`
  box-sizing: border-box;
  background-color: #101010;
  border-radius: 5px;
  width: 100%;
  padding: 24px 32px;
`;

export const MessageInput = styled.input`
  background-color: inherit;
  outline: none;
  border: none;
  color: #454545;
  font-family: 'Inter';
  box-sizing: border-box;
  font-size: 18px;
  width: 100%;
  padding: 0;
  margin: 4px 0;
  resize: none;
`;

export const MessageItemContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 5px 0;
  word-break: break-all;
`;

export const MessageItemAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #0094fd;
`;

export const MessageItemDetails = styled.div`
  flex: 1;
`;

export const MessageItemHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .time {
    color: #6d6d6d;
    font-size: 14px;
    font-weight: bold;
  }
  .authorName {
    font-weight: 600;
    font-size: 16px;
  }
`;

export const MessageItemContent = styled.div<MessageItemContentProps>`
  padding: ${({ padding }) => padding};
  width: 100%;
`;

export const ContextMenuStyle = styled.div<ContextMenuProps>`
  border-radius: 8px;
  box-sizing: border-box;
  position: fixed;
  width: 200px;
  background-color: #252525;
  ${(props) => css`
    top: ${props.top}px;
    left: ${props.left}px;
  `}
  ul {
    list-style-type: none;
    margin: 0;
    padding: 10px;
  }
  ul li {
    padding: 14px 16px;
    border-radius: 8px;
  }
  ul li:hover {
    cursor: pointer;
    background-color: #1f1f1f;
  }
`;

export const MessageTypingStatus = styled.div`
  width: 100%;
  font-size: 15px;
  color: #adadad;
  box-sizing: border-box;
  margin-top: 10px;
  height: 20px;
`;

export const EditMessageInputField = styled.input`
  outline: none;
  border: none;
  background-color: #222;
  color: #bababa;
  font-family: 'Inter';
  box-sizing: border-box;
  font-size: 15px;
  padding: 18px 22px;
  border-radius: 5px;
  margin: 4px 0;
  width: 100%;
`;

export const EditMessageActionsContainer = styled.div`
  font-size: 12px;
  & span {
    color: #1d77ff;
  }
`;

export const ConversationSelectedStyle = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 20px 32px;
  background-color: #0f0f0f;
  border-bottom: 1px solid #4343435f;
  box-sizing: border-box;
`;

export const ConversationSelectedItem = styled.div<ConversationSelectedProps>`
  padding: 12px 28px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  background-color: #212121;
  color: #f0f0f0;
  ${(props) =>
    props.selected &&
    css`
      background-color: #444444;
    `};
`;
