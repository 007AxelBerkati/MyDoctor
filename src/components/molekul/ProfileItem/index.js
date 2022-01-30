import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, fonts } from '../../../utils';
import { Button } from '../..';

export default function ProfileItem({ label, value }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  label: {
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 8,
  },
  value: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
});
