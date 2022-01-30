import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Gap, Header, Input, Profile } from '../../components';
import { colors } from '../../utils';

export default function UpdateProfile({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Header title={'Edit Profile'} onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Profile isRemove />
        <Gap height={26} />
        <Input label={'Full Name'} />
        <Gap height={24} />
        <Input label={'Pekerjaan'} />
        <Gap height={24} />
        <Input label={'Email Addres'} />
        <Gap height={24} />
        <Input label={'Password'} />
        <Gap height={40} />
        <Button title={'Save Profile'} onPress={() => navigation.goBack('UserProfile')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.White,
  },
  content: {
    padding: 40,
    paddingTop: 0,
    backgroundColor: colors.White,
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
