import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Conversation, ConversationMessage, ConversationType } from '../utils/types';
import { getConversationMessages, getConversations } from '../utils/api';

export interface ConversationState {
	conversations: Conversation[];
	loading: boolean;
}

const initialState: ConversationState = {
	conversations: [],
	loading: false,
};
export const fetchConversationsThunk = createAsyncThunk('conversations/fetch', async () => {
	return getConversations();
});

export const conversationSlice = createSlice({
	name: 'conversations',
	initialState,
	reducers: {
		addConversation: (state, action: PayloadAction<Conversation>) => {
			// state.conversations.push(action.payload);
		},
	},
	extraReducers: (builder: ActionReducerMapBuilder<ConversationState>) => {
		builder
			.addCase(fetchConversationsThunk.fulfilled, (state, action) => {
				state.conversations = action.payload.data;
				state.loading = false;
			})
			.addCase(fetchConversationsThunk.pending, (state, action) => {
				state.loading = true;
			});
	},
});

// Action creators are generated for each case reducer function
export const { addConversation } = conversationSlice.actions;

export default conversationSlice.reducer;
