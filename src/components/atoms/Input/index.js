import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
<<<<<<< HEAD
import { colors, fonts } from '../../../utils';
=======
import { colors } from '../../../utils';
>>>>>>> 3b691fb8ad63a3eeb72905a2d4bf48eebc3fe9db

export default function Input({ label }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
  },
  label: {
<<<<<<< HEAD
    fontFamily: fonts.primary.normal,
=======
    fontFamily: 'Nunito-Regular',
>>>>>>> 3b691fb8ad63a3eeb72905a2d4bf48eebc3fe9db
    color: colors.text.secondary,
    marginBottom: 6,
  },
});
