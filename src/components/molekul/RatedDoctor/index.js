import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { DummyDoctor1, DummyDoctor2, DummyDoctor3, IconStar } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function RatedDoctor() {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.imageStyle} />
      <View>
        <Text style={styles.names}>Alexa Rayhan</Text>
        <Text style={styles.job}>Pediatrician</Text>
      </View>
      <View style={styles.starsStyle}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 20,
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
  starsStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
});
