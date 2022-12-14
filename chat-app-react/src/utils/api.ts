import axios, { AxiosRequestConfig } from 'axios';
import { Conversation, CreateMessageParams, CreateUserParams, FetchMessagePayload, MessageType, User, UserCredentialsParams } from './types';

const BASE_URL = process.env.REACT_APP_API_URL;
const config: AxiosRequestConfig = { withCredentials: true };

export const postRegisterUser = async (data: CreateUserParams) => axios.post(`${BASE_URL}/auth/register`, data, config);

export const postLoginUser = async (data: UserCredentialsParams) => axios.post(`${BASE_URL}/auth/login`, data, config);

export const getAuthUser = () => axios.get<User>(`${BASE_URL}/auth/status`, config);

export const getConversations = () => axios.get<Conversation[]>(`${BASE_URL}/conversations`, config);

export const getConversationById = (id: number) => axios.get<Conversation>(`${BASE_URL}/conversations/${id}`, config);

export const getConversationMessages = (conversationId: number) => axios.get<FetchMessagePayload>(`${BASE_URL}/messages/${conversationId}`, config);

export const postNewMessage = (data: CreateMessageParams) => axios.post(`${BASE_URL}/messages`, data, config);

// export const postNewConversation = (data: CreateConversationParams) =>
//   axiosClient.post<Conversation>(`/conversations`, data, config);

// export const deleteMessage = ({ id, messageId }: DeleteMessageParams) =>
//   axiosClient.delete<DeleteMessageResponse>(
//     `/conversations/${id}/messages/${messageId}`,
//     config
//   );

// export const editMessage = ({ content, id, messageId }: EditMessagePayload) =>
//   axiosClient.patch<MessageType>(
//     `/conversations/${id}/messages/${messageId}`,
//     { content },
//     config
//   );

// export const fetchGroups = () => axiosClient.get<Group[]>(`/groups`, config);

// export const fetchGroupById = (id: number) =>
//   axiosClient.get<Group>(`/groups/${id}`, config);

// export const fetchGroupMessages = (id: number) =>
//   axiosClient.get<FetchGroupMessagePayload>(`/groups/${id}/messages`, config);

// export const postGroupMessage = ({ id, content }: CreateMessageParams) =>
//   axiosClient.post(`/groups/${id}/messages`, { content }, config);

// export const searchUsers = (query: string) =>
//   axiosClient.get<User[]>(`/users/search?query=${query}`, config);

// export const createGroup = (params: CreateGroupParams) =>
//   axiosClient.post(`/groups`, params, config);

// export const deleteGroupMessage = ({
//   id,
//   messageId,
// }: DeleteGroupMessageParams) =>
//   axiosClient.delete<DeleteGroupMessageResponse>(
//     `/groups/${id}/messages/${messageId}`,
//     config
//   );

// export const editGroupMessage = ({
//   content,
//   id,
//   messageId,
// }: EditMessagePayload) =>
//   axiosClient.patch<GroupMessageType>(
//     `/groups/${id}/messages/${messageId}`,
//     { content },
//     config
//   );

// export const addGroupRecipient = ({ id, email }: AddGroupRecipientParams) =>
//   axiosClient.post(`/groups/${id}/recipients`, { email }, config);

// export const removeGroupRecipient = ({
//   id,
//   userId,
// }: RemoveGroupRecipientParams) =>
//   axiosClient.delete<Group>(`/groups/${id}/recipients/${userId}`, config);

// export const updateGroupOwner = ({
//   id,
//   newOwnerId,
// }: UpdateGroupOwnerParams) =>
//   axiosClient.patch(`/groups/${id}/owner`, { newOwnerId }, config);

// export const leaveGroup = (id: number) =>
//   axiosClient.delete(`/groups/${id}/recipients/leave`, config);
