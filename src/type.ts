export type ChatMessageType = {
  id: string;
  date: 1407386139;
  message: string;
};

export type ChatScriptType = {
  id: string;
  type: string;
  created_at: number;
  user_id: string;
  transcript: Array<ChatMessageType>;
};

export type UserType = {
    id: string;
    name: string;
    created_at: number;
    avatar: string;
    status: number;
  };

export type AddChatFunction = (message: string, sender: string) => void;
