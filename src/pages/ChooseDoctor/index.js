import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Header, List } from '../../components';
import { DummyDoctor1 } from '../../assets';
import { colors } from '../../utils';

export default function ChooseDoctor({ navigation }) {
  return (
    <View>
      <Header title={'Pilih Dokter Anak'} type={'dark'} onPress={() => navigation.goBack()} />
      <List
        type={'next'}
        profile={DummyDoctor1}
        name="Alexander Janie"
        chat={'Wanita'}
        onPress={() => navigation.navigate('Chatting')}
      />
      <List type={'next'} profile={DummyDoctor1} name="Alexander Janie" chat={'Wanita'} />
      <List type={'next'} profile={DummyDoctor1} name="Alexander Janie" chat={'Wanita'} />
      <List type={'next'} profile={DummyDoctor1} name="Alexander Janie" chat={'Wanita'} />
      <List type={'next'} profile={DummyDoctor1} name="Alexander Janie" chat={'Wanita'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  headerStyle: {},
});
