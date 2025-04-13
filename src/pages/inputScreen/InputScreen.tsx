import { View, Text, TextInput, FlatList, ImageProps } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { InputScreenNavigationProp, StatusTypes } from '../../type/Types';
import BackgroundGradient from '../../components/backgroundGradient/BackgroundGradient';
import Title from '../../components/title/Title';
import Button from '../../components/button/Button';
import styles from '../../components/title/styles';
import { Colors } from '../../theme/colors';
import StatusIndicator from '../../components/statusIndicator/StatusIndicator';

export default function InputScreen() {
  const navigation = useNavigation<InputScreenNavigationProp>();
  const [propmptText, setPromptText] = useState<string>("")
  const [selectedLogo, setSelectedLogo] = useState<number>(0)
  const [status, setStatus] = useState<StatusTypes>()
  const [statusTitle, setStatusTitle] = useState<string>("")
  const [statusSubTitle, setStatusSubTitle] = useState<string>("")
  const [imgUrl, setImgUrl] = useState<ImageProps>()
  const logoStyles = [
    {
      id: 0,
      title: "No Style"
    },
    {
      id: 1,
      title: "Monogram",
      imgUrl: require("../../assets/monogram.png")
    },
    {
      id: 2,
      title: "Abstract",
      imgUrl: require("../../assets/abstract.png")
    },
    {
      id: 3,
      title: "Mascot",
      imgUrl: require("../../assets/mascot.png")
    }
  ]

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (status === "pending") {
      const randomTime = Math.floor(Math.random() * 30000) + 30000;

      timer = setTimeout(() => {
        setStatus("fullfilled");
        setStatusTitle("Your Design is Ready!");
        setStatusSubTitle("Tap to see it.");
        setImgUrl(require("../../assets/monogram.png"))
      }, randomTime);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [status]);

  const createFunc = () => {
    setStatus("pending"),
      setStatusTitle("Creating Your Design..."),
      setStatusSubTitle("Ready in 2 minutes")
  }

  return (
    <BackgroundGradient>
      {/* 
      <Title title='Enter Your Prompt' buttonTitle='🎲 Surprise me'/>
      <Button onPress={()=>{console.log("first")}} title='Create' size={"primary"}>
        <Stars/>
      </Button>
      <Button onPress={()=>{console.log("first")}} size='mini' title='Monogram' imgUrl={require("../../assets/monogram.png")}/>
      <Button onPress={()=>{console.log("first")}} size='mini' title='No Style'/>
      <CreateStatusBar title="Creating Your Design..." subtitle='Ready in 2 minutes' status="pending"/>
      <CreateStatusBar imgUrl={require("../../assets/monogram.png")} title="Creating Your Design..." subtitle='Ready in 2 minutes' status="fullfilled"/>
      <CreateStatusBar title="Creating Your Design..." subtitle='Ready in 2 minutes' status="rejected"/>
      <Title title='Your Design' closeEnabled/> */}
      <Title title='AI Logo' alignCenter />
      <View style={{ flex: 1 }}>
        {
          status && <StatusIndicator title={statusTitle} subtitle={statusSubTitle} status={status} imgUrl={imgUrl} onPress={() => status === "fullfilled" ? navigation.navigate("output") : null} />
        }

        <Title title='Enter Your Prompt' buttonTitle='🎲 Surprise me' />
        <View style={styles.inputContainer}>
          <TextInput value={propmptText} onChangeText={(value) => { setPromptText(value) }} style={{ color: Colors.white }} multiline maxLength={500} placeholderTextColor={Colors.dark} placeholder='A blue lion logo reading ‘HEXA’ in bold letters' />
          <View>
            <Text style={{ fontSize: 11, color: Colors.dark }}>{propmptText?.length}/500</Text>
          </View>
        </View>
        <Title title='Logo Styles' />
        <FlatList
          horizontal
          style={styles.logoContainer}
          contentContainerStyle={{ gap: 10 }}
          data={logoStyles}
          renderItem={({ item, index }) => {
            return (
              <Button selected={item.id === selectedLogo} key={index} onPress={() => { setSelectedLogo(index) }} size='mini' title={item.title} imgUrl={item.imgUrl} />
            )
          }}
        />
      </View>
      <Button onPress={createFunc} title='Create' size={"primary"} />
    </BackgroundGradient>
  )
}