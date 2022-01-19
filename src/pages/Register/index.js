import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Gap, Header, Input } from '../../components';
import { colors } from '../../utils';

export default function Register() {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.container}>
        <Input label={'Full Name'} />
        <Gap height={24} />
        <Input label={'Pekerjaan'} />
        <Gap height={24} />
        <Input label={'Email Addres'} />
        <Gap height={24} />
        <Input label={'Password'} />
        <Gap height={40} />
        <Button title={'Continue'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 0,
    backgroundColor: 'white',
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
