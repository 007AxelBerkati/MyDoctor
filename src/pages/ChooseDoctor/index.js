import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { DummyDoctor1 } from '../../assets';
import { Header, List } from '../../components';
import { Fire } from '../../config';
import { colors } from '../../utils';

export default function ChooseDoctor({ navigation, route }) {
  const [listDoctor, setListDoctor] = useState([]);
  const itemCategory = route.params;

  useEffect(() => {
    callDoctorByCategory(itemCategory.category);
  }, []);

  const callDoctorByCategory = (category) => {
    // dokter umum
    // psikiater

    Fire.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then((res) => {
        console.log('data list doctor : ', res.val());
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          console.log('data category doctor pharsing : ', data);
          setListDoctor(data);
        }
      });
  };
  return (
    <View>
      <Header
        title={`Pilih ${itemCategory.category}`}
        type={'dark'}
        onPress={() => navigation.goBack()}
      />
      {listDoctor.map((doctor) => {
        return (
          <List
            type={'next'}
            profile={{ uri: doctor.data.photo }}
            name={doctor.data.fullName}
            chat={doctor.data.gender}
            onPress={() => navigation.navigate('DoctorProfile', doctor)}
          />
        );
      })}
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
