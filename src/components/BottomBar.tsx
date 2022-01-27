import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type {AddChatFunction} from '../type';

type BottomBarProps = {
  addChatData: AddChatFunction;
};

const BottomBar: React.FC<BottomBarProps> = ({addChatData}) => {
  const [isEditMode, setEditMode] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');

  return (
    <View style={styles.container}>
      {isEditMode ? (
        <Icon name="chevron-right" size={30} color="#4578D8" />
      ) : (
        <>
          <Icon name="plus-circle" size={23} color="#4578D8" />
          <Icon name="camera" size={23} color="#4578D8" style={styles.icon} />
          <Icon name="image" size={23} color="#4578D8" style={styles.icon} />
          <Icon
            name="microphone"
            size={23}
            color="#4578D8"
            style={styles.icon}
          />
        </>
      )}
      <View style={{flexGrow: 1}}>
        <TextInput
          style={styles.input}
          placeholder="Aa"
          placeholderTextColor={'#7a7a7a'}
          autoFocus={true}
          onChangeText={text => {
            setCurrentMessage(text);
          }}
          defaultValue={currentMessage}
        />
        <Icon
          name="emoticon-happy"
          size={23}
          color="#4578D8"
          style={styles.emoticon}
        />
      </View>
      <Icon
        name="send"
        size={30}
        color="#4578D8"
        style={styles.icon}
        onPress={() => {
          addChatData(currentMessage, '1');
          setCurrentMessage('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    paddingHorizontal: 15,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  icon: {
    marginLeft: 15,
  },
  input: {
    backgroundColor: '#333333',
    borderRadius: 20,
    height: 40,
    marginLeft: 15,
    paddingLeft: 15,
    color: 'white',
  },
  emoticon: {
    position: 'absolute',
    right: 10,
    top: 8,
  },
});

export default BottomBar;
