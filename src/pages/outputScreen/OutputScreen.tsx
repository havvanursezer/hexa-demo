import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { OutputScreenNavigationProp } from '../../type/Types';

export default function OutputScreen() {
  const navigation = useNavigation<OutputScreenNavigationProp>();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>OutputScreen</Text>
      <Button title='go back' onPress={() => navigation.goBack()} />
    </View>
  )
}