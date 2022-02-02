import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button } from '../../atoms';
import { colors, fonts } from '../../../utils';

export default function InputChat() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis Pesan untuk Nairobi" />
      <Button type={'btn-icon-send'} disable />
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    fontFamily: fonts.primary.normal,
    fontSize: 14,
    maxHeight: 45,
  },
});
