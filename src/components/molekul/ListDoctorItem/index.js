import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DummyDoctor4 } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function ListDoctorItem({ profile, name, chat }) {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.imageStyle} />
      <View style={styles.titleWrapper}>
        <Text style={styles.names}>{name}</Text>
        <Text style={styles.chat}>{chat}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    padding: 16,
    alignItems: 'center',
  },

  titleWrapper: {
    flex: 1,
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
  },
});
