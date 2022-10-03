import React, { Dispatch, FC } from 'react';
import { Button, InputContainer, InputField, InputLabel, TextField } from '../../utils/styles';
import styles from './index.module.scss';
import { Conversation } from '../../utils/types';
import { useDispatch } from 'react-redux';
import { addConversation } from '../../store/conversationSlice';

type Props = {
	setShowModal: Dispatch<React.SetStateAction<boolean>>;
};

export const CreateConversationForm: FC<Props> = ({ setShowModal }) => {
	const dispatch = useDispatch();
	return (
		<form className={styles.createConversationForm}>
			<section>
				<InputContainer>
					<InputLabel>Recipient</InputLabel>
					<InputField />
				</InputContainer>
			</section>
			<section className={styles.message}>
				<InputContainer>
					<InputLabel>Message (optional)</InputLabel>
					<TextField />
				</InputContainer>
			</section>
			<Button
				onClick={(e) => {
					e.preventDefault();
					// dispatch(addConversation({id:1, }))
				}}
			>
				Start Conversation
			</Button>
		</form>
	);
};

// export default CreateConversationForm
