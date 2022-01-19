import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IconBackDark } from '../../../assets';
import { Gap } from '../..';
import { colors } from '../../../utils';

export default function Header() {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.text}>Daftar Akun</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textFamily: 'Nunito-Bold',
    fontSize: 20,
    color: colors.text.primary,
    colorBackground: 'black',
    textAlign: 'center',
    flex: 1,
    backgroundColor: 'white',
  },

  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.White,
    flexDirection: 'row',
  },
});
