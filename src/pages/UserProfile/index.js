import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Gap, Header, List, Profile } from '../../components';
import { colors } from '../../utils';
import { NavigationContainer } from '@react-navigation/native';

export default function UserProfile({ navigation }) {
  return (
    <View style={styles.page}>
      <Header title={'Profile'} onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name={'Lady Gaga'} desc={'Product Designer'} />
      <Gap height={14} />
      <List
        name={'Edit Profile'}
        chat={'Last Update Yesterday'}
        type={'next'}
        icon={'edit-profile'}
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List name={'Language'} chat={'Avaible in 12 Languages'} type={'next'} icon={'Language'} />
      <List name={'Give Us Rate'} chat={'On Google Play Store'} type={'next'} icon={'rate'} />
      <List name={'Help Center'} chat={'Read Our Guidelines'} type={'next'} icon={'help'} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.White,
    flex: 1,
  },
});
