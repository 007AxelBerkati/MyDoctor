import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
<<<<<<< HEAD
import { colors, fonts } from '../../utils';
=======
>>>>>>> 3b691fb8ad63a3eeb72905a2d4bf48eebc3fe9db

export default function Login() {
  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label={'Email Address'} />
      <Gap height={24} />
      <Input label={'Password'} />
      <Gap height={10} />
      <Link title={'Forgot My Password'} size={12} />
      <Gap height={24} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link title={'Create New Account'} size={16} align={'center'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
<<<<<<< HEAD
    backgroundColor: colors.White,
    flex: 1,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.text.primary,
=======
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: '#112340',
>>>>>>> 3b691fb8ad63a3eeb72905a2d4bf48eebc3fe9db
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
