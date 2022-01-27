import React, {useState} from 'react';
import type {ChatScriptType, UserType} from '../type';

export const useChat = (data: Array<ChatScriptType>, userData : Array<UserType>) => {
  const [chatData, setChatData] = useState(data);

  const addChatData = (message: string, sender: string) => {
    let lastItem = chatData[chatData.length - 1];
    let newChatData = JSON.parse(JSON.stringify(chatData));
    if (sender == lastItem.user_id) {
      newChatData[newChatData.length - 1].transcript.push({
        id: '' + Math.random(),
        date: new Date().getTime(),
        message: message,
      });
    } else {
      newChatData.push({
        id: '' + Math.random(),
        type: 'text',
        created_at: new Date().getTime(),
        user_id: sender,
        transcript: [
          {
            id: '' + Math.random(),
            date: new Date().getTime(),
            message: message,
          },
        ],
      });
    }
    setChatData(newChatData);
  };

  const findUserById = (userId: string) : UserType | undefined => {
    return userData.find(item => item.id == userId);
  };

  return {
    chatData,
    addChatData,
    findUserById
  };
};
