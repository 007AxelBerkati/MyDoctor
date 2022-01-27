import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DummyUser } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function HomeProfile() {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.imageStyle} />
      <View>
        <Text style={styles.names}>Shayna Melinda</Text>
        <Text style={styles.job}>Product Designer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
  },
  job: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
});
