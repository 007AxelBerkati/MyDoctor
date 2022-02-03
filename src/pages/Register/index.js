import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, Input } from '../../components';
import { Fire } from '../../config';
import { colors, showError, storeData, useForm } from '../../utils';

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

  const dispatch = useDispatch();

  const onContinue = () => {
    // console.log(form);

    dispatch({ type: 'SET_LOADING', value: true });
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((success) => {
        const data = {
          fullName: form.fullName,
          email: form.email,
          profession: form.profession,
          uid: success.user.uid,
        };
        dispatch({ type: 'SET_LOADING', value: false });
        setForm('reset');
        // https://firebase.com/users
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        storeData('user', data);

        navigation.navigate('UploadPhoto', data);
        // console.log('Register Sukses:', success);
        // ...
      })
      .catch((error) => {
        dispatch({ type: 'SET_LOADING', value: false });
        showError(error.message);

        // console.log('error', error);
      });
  };
  return (
    <>
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
    </>
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
