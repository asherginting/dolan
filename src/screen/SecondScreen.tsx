import React from 'react';
import {View, Text, Button} from 'react-native';

const SecondScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Halaman Kedua</Text>
      <Button
        title="Kembali ke Halaman Utama"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default SecondScreen;
