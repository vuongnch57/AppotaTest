import React, {useRef, useEffect} from 'react';
import Header from '../components/Header';
import BottomBar from '../components/BottomBar';
import Message from '../components/Message';
import {
  KeyboardAvoidingView,
  View,
  Platform,
  ScrollView,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useChat} from '../hooks/useChat';
import ChatData from '../data/chat.json';
import UserData from '../data/user.json';
import type {ChatScriptType, ChatMessageType} from '../type';

const ChatScreen = () => {
  const scrollViewRef = useRef();
  const {chatData, addChatData, findUserById} = useChat(ChatData, UserData);

  useEffect(() => {
    const interval = setInterval(() => {
      addChatData('This is auto reply message', '3');
    }, 5000);
    return () => clearInterval(interval);
  }, [chatData]);

  const renderMessage = (transcript: Array<ChatMessageType>, isMe: boolean) => {
    return transcript.map(item => {
      return <Message text={item.message} isMe={isMe} key={item.id} />;
    });
  };

  const chatScripts = chatData.map(item => {
    const user = findUserById(item.user_id);
    if (!user) {
      return null;
    }
    if (user.id == '1') {
      return (
        <View
          style={[styles.scripts, {flexDirection: 'row-reverse'}]}
          key={item.id}>
          <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
            {renderMessage(item.transcript, true)}
          </View>
        </View>
      );
    }
    return (
      <View style={styles.scripts} key={item.id}>
        {user.avatar ? (
          <Image source={{uri: user.avatar}} style={styles.avatar} />
        ) : (
          <Icon
            name="account-circle"
            size={23}
            color="#4578D8"
            style={styles.avatar}
          />
        )}
        {user.status == 1 && (
          <Icon
            name="circle-medium"
            size={23}
            color="green"
            style={styles.statusIcon}
          />
        )}
        <View style={{flexDirection: 'column', marginLeft: 15}}>
          <Text style={styles.userName}>{user.name}</Text>
          {renderMessage(item.transcript, false)}
        </View>
      </View>
    );
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{width: '100%', height: '100%'}}>
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <Header name="Group chat" groupAvatar={''} status={1} />
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef?.current?.scrollToEnd({animated: true})
          }
          showsVerticalScrollIndicator={false}>
          <View style={{paddingBottom: 50}}>{chatScripts}</View>
        </ScrollView>
        <BottomBar addChatData={addChatData} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scripts: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  avatar: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  userName: {
    fontSize: 12,
    color: '#3F3F3F',
    marginBottom: 5,
  },
  statusIcon: {
      position: 'absolute',
      left: 10,
      bottom: 0
  },
});

export default ChatScreen;
