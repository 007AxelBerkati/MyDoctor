import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconStar } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function RatedDoctor({ onPress, desc, name, avatar }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.imageStyle} />
      <View>
        <Text style={styles.names}>{name}</Text>
        <Text style={styles.job}>{desc}</Text>
      </View>
      <View style={styles.starsStyle}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 20,
    alignItems: 'center',
  },
  imageStyle: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  names: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textTransform: 'capitalize',
  },
  job: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
  starsStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
});
