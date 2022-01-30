import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, Header, Input } from '../../components';
import { colors, useForm } from '../../utils';

export default function Register({ navigation }) {
  // const [fullName, setFullName] = useState('');
  // const [profession, setProfession] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [form, setForm] = useForm({
    fullName: '',
    email: '',
    profession: '',
    password: '',
  });

  const onContinue = () => {
    console.log(form);
    // navigation.navigate('UploadPhoto');
  };
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title={'Daftar Akun'} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label={'Full Name'}
            value={form.fullName}
            onChangeText={(value) => setForm('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label={'Pekerjaan'}
            value={form.profession}
            onChangeText={(value) => setForm('profession', value)}
          />
          <Gap height={24} />
          <Input
            label={'Email Addres'}
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label={'Password'}
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry={true}
          />
          <Gap height={40} />
          <Button title={'Continue'} onPress={onContinue} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 0,
    backgroundColor: colors.White,
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
