import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type HeaderProps = {
  name: string;
  groupAvatar: string;
  status: number;
};

const Header: React.FC<HeaderProps> = ({name, groupAvatar, status}) => {
  return (
    <View style={styles.container}>
      <Icon name="arrow-left" size={23} color="#9A2FEF" />
      <View style={styles.groupAvatar}>
        {groupAvatar ? (
          <Image source={{uri: groupAvatar}} />
        ) : (
          <Icon name="account-group" size={23} color="#9A2FEF" />
        )}
        {status == 1 && (
          <Icon
            name="circle-small"
            size={40}
            color="green"
            style={styles.statusIcon}
          />
        )}
      </View>
      <Text style={styles.title}>{name}</Text>
      <View style={{flexDirection: 'row'}}>
        <Icon name="phone" size={23} color="#9A2FEF" />
        <Icon name="video" size={23} color="#9A2FEF" style={styles.icon} />
        {status == 1 && <Icon name="circle-medium" size={23} color="green" />}
        <Icon
          name="information"
          size={23}
          color="#9A2FEF"
          style={styles.icon}
        />
      </View>
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
  },
  groupAvatar: {
    marginLeft: 15,
    flexDirection: 'row',
  },
  statusIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    color: 'white',
    flexGrow: 1,
    marginHorizontal: 15,
    fontSize: 18,
    fontWeight: '600',
  },
  icon: {
    marginLeft: 15,
  },
});

export default Header;
