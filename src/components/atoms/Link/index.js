import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import { colors, fonts } from '../../../utils';
=======
>>>>>>> 3b691fb8ad63a3eeb72905a2d4bf48eebc3fe9db

export default function Link({ title, size, align }) {
  return (
    <View>
      <Text style={styles.text(size, align)}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: (size, align) => ({
<<<<<<< HEAD
    fontFamily: fonts.primary.normal,
    fontSize: size,
    color: colors.text.secondary,
=======
    fontFamily: 'Nunito-Regular',
    fontSize: size,
    color: '#7D8797',
>>>>>>> 3b691fb8ad63a3eeb72905a2d4bf48eebc3fe9db
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
