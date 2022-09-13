export type PageProps = Partial<{
	display: string;
	justifyContent: string;
	alignItems: string;
}>;

export type InputContainerProps = Partial<{
	backgroundColor: string;
}>;

export type MessageItemContentProps = Partial<{
	padding: string;
	bg_color: string;
}>;
export type MessageContainerProps = Partial<{
	justify: string;
	textAlign: string;
	padding: string;
}>;
export type MessageItemLayoutProps = Partial<{
	flexDirection: string;
	justify: string;
}>;
export type ContextMenuProps = {
	top: number;
	left: number;
};

export type ConversationSelectedProps = {
	selected: boolean;
};
