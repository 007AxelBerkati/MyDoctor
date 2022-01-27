import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Gap } from '../../atoms';
import { colors } from '../../../utils';

export default function Header({ onPress, title }) {
  return (
    <View style={styles.container}>
      <Button type={'icon-only'} icon={'back-dark'} onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: colors.text.primary,
    textAlign: 'center',
    flex: 1,
  },

  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.White,
    flexDirection: 'row',
  },
});
