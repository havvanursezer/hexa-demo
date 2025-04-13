import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { InputScreenNavigationProp } from '../../type/Types';
import BackgroundGradient from '../../components/backgroundGradient/BackgroundGradient';
import Title from '../../components/title/Title';
import Button from '../../components/button/Button';
import { Stars } from '../../components/icons/Icons';
import CreateStatusBar from '../../components/createStatusBar/CreateStatusBar';

export default function InputScreen() {
  const navigation = useNavigation<InputScreenNavigationProp>();
  return (
    <BackgroundGradient>
      <Title title='AI Logo' alignCenter/>
      <Title title='Enter Your Prompt' buttonTitle='🎲 Surprise me'/>
      <Button onPress={()=>{console.log("first")}} title='Create' size={"primary"}>
        <Stars/>
      </Button>
      <Button onPress={()=>{console.log("first")}} size='mini' title='Monogram' imgUrl={require("../../assets/monogram.png")}/>
      <Button onPress={()=>{console.log("first")}} size='mini' title='No Style'/>
      <CreateStatusBar title="Creating Your Design..." subtitle='Ready in 2 minutes' status="pending"/>
      <CreateStatusBar imgUrl={require("../../assets/monogram.png")} title="Creating Your Design..." subtitle='Ready in 2 minutes' status="fullfilled"/>
      <CreateStatusBar title="Creating Your Design..." subtitle='Ready in 2 minutes' status="rejected"/>
      <Title title='Your Design' closeEnabled/>
    </BackgroundGradient>
  )
}