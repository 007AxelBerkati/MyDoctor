import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  DummyDoctor4,
  IconEditProfile,
  IconHelp,
  IconLanguage,
  IconNext,
  IconRate,
} from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function List({ profile, name, chat, type, onPress, icon, desc }) {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />;
    }
    if (icon === 'language') {
      return <IconLanguage />;
    }
    if (icon === 'rate') {
      return <IconRate />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    return <IconEditProfile />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.imageStyle} />}
      <View style={styles.titleWrapper}>
        <Text style={styles.names}>{name}</Text>
        <Text style={styles.chat}>{chat}</Text>
        <Text style={styles.chat}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titleWrapper: {
    flex: 1,
    marginLeft: 16,
  },
  imageStyle: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },

  names: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },

  chat: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
