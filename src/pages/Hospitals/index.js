import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ILHospitalBG } from '../../assets';
import { ListHospitals } from '../../components';
import { Fire } from '../../config';
import { colors, fonts, showError } from '../../utils';

export default function Hospitals() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    Fire.database()
      .ref('hospitals/')
      .once('value')
      .then((res) => {
        console.log('data : ', res.val());
        if (res.val()) {
          setHospitals(res.val());
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {hospitals.map((item) => {
          return (
            <ListHospitals
              key={item.id}
              title={item.title}
              name={item.name}
              address={item.address}
              pic={item.pic}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.White,
    textAlign: 'center',
  },

  desc: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.White,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.White,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
