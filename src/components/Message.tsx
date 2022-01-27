import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type MessageProps = {
  text: string;
  isMe: boolean;
};

const Message: React.FC<MessageProps> = ({text, isMe}) => {
  return (
    <View style={{alignSelf: isMe ? 'flex-end' : 'flex-start'}}>
      <View
        style={[
          styles.container,
          {backgroundColor: isMe ? '#5B48E2' : '#303030'},
        ]}>
        {<Text style={styles.text}>{text}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#303030',
    padding: 10,
    marginBottom: 5,
    alignSelf: 'baseline',
  },
  text: {
    color: 'white',
    flexWrap: 'wrap',
    flexShrink: 1,
  },
});

export default Message;
