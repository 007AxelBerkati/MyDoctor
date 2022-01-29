import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DummyHospital1 } from '../../assets';
import { colors, fonts } from '../../utils';

export default function ListHospitals({ title, name, address, pic }) {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.imageStyle} />
      <View style={styles.tittleWrapper}>
        <Text style={styles.nameHospital}>{title}</Text>
        <Text style={styles.nameHospital}>{name}</Text>
        <Text style={styles.desc}>{address}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
  },
  imageStyle: {
    height: 60,
    width: 80,
    borderRadius: 11,
    marginRight: 16,
  },

  tittleWrapper: {},
  nameHospital: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  desc: {
    marginTop: 6,
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.secondary,
  },
});
