import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DummyNews1 } from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function NewsItem() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Is it safe to stay at home during coronavirus?</Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image source={DummyNews1} style={styles.imageStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    paddingBottom: 12,
    paddingTop: 16,
  },

  titleWrapper: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
    maxWidth: '90%',
  },

  date: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 4,
  },

  imageStyle: {
    height: 60,
    width: 80,
    borderRadius: 20,
  },
});
