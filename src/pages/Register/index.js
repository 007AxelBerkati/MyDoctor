import React from 'react';
<<<<<<< HEAD
import { StyleSheet, View } from 'react-native';
=======
import { StyleSheet, Text, View } from 'react-native';
>>>>>>> 3b691fb8ad63a3eeb72905a2d4bf48eebc3fe9db
import { Button, Gap, Header, Input } from '../../components';
import { colors } from '../../utils';

export default function Register({ navigation }) {
  return (
    <View style={styles.page}>
<<<<<<< HEAD
      <Header onPress={() => navigation.goBack()} title={'Daftar Akun'} />
=======
      <Header />
>>>>>>> 3b691fb8ad63a3eeb72905a2d4bf48eebc3fe9db
      <View style={styles.container}>
        <Input label={'Full Name'} />
        <Gap height={24} />
        <Input label={'Pekerjaan'} />
        <Gap height={24} />
        <Input label={'Email Addres'} />
        <Gap height={24} />
        <Input label={'Password'} />
        <Gap height={40} />
<<<<<<< HEAD
        <Button title={'Continue'} onPress={() => navigation.navigate('UploadPhoto')} />
=======
        <Button title={'Continue'} />
>>>>>>> 3b691fb8ad63a3eeb72905a2d4bf48eebc3fe9db
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 0,
<<<<<<< HEAD
    backgroundColor: colors.White,
=======
    backgroundColor: 'white',
>>>>>>> 3b691fb8ad63a3eeb72905a2d4bf48eebc3fe9db
  },

  page: {
    backgroundColor: colors.White,
    flex: 1,
  },

  text: {
    textFamily: 'Nunito-Bold',
    fontSize: 20,
  },
});
