import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';

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
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: '#112340',
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
