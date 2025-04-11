import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { InputScreenNavigationProp } from '../../type/Types';

export default function InputScreen() {
  const navigation = useNavigation<InputScreenNavigationProp>();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>InputScreen</Text>
      <Button title='go to output' onPress={() => navigation.navigate("output")} />
    </View>
  )
}