import { View, Text, TextInput, FlatList, ImageProps, Pressable, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { InputScreenNavigationProp, LogoInterface, StatusTypes } from '../../type/Types';
import BackgroundGradient from '../../components/backgroundGradient/BackgroundGradient';
import Title from '../../components/title/Title';
import Button from '../../components/button/Button';
import styles from '../../components/title/styles';
import { Colors } from '../../theme/colors';
import StatusIndicator from '../../components/statusIndicator/StatusIndicator';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export default function InputScreen() {
  const navigation = useNavigation<InputScreenNavigationProp>();
  const [promptText, setPromptText] = useState<string>("")
  const [selectedLogo, setSelectedLogo] = useState<LogoInterface>({
    id: 0,
    title: "No Style"
  })
  const [status, setStatus] = useState<StatusTypes>()
  const [statusTitle, setStatusTitle] = useState<string>("")
  const [statusSubTitle, setStatusSubTitle] = useState<string>("")
  const [imgUrl, setImgUrl] = useState<ImageProps>()
  const [isFocused, setIsFocused] = useState(false);
  const logoStyles: Array<LogoInterface> = [
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
        setImgUrl(require("../../assets/logo.png"))
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

  const handleSubmit = async () => {
    const docRef = await addDoc(collection(db, 'userInputs'), {
      text: promptText,
      imgUrl: require("../../assets/logo.png"),
      selectedScheme: selectedLogo,
      createdAt: new Date()
    });

    navigation.navigate('output', { docId: docRef.id });
  };

  return (
    <BackgroundGradient>
      <Pressable onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
        <Title title='AI Logo' alignCenter />
        <View style={{ flex: 1 }}>
          {
            status && <StatusIndicator title={statusTitle} subtitle={statusSubTitle} status={status} imgUrl={imgUrl} onPress={() => status === "fullfilled" ? handleSubmit() : null} />
          }
          <Title onPress={() => setPromptText("A professional logo for Harrison & Co. Law Firm, using balanced serif fonts")} title='Enter Your Prompt' buttonTitle='🎲 Surprise me' />
          <View style={[styles.inputContainer, { borderWidth: isFocused ? 1 : 0, borderColor: Colors.white }]}>
            <TextInput
              value={promptText}
              onChangeText={(value) => { setPromptText(value) }}
              style={{ color: Colors.white }}
              multiline
              maxLength={500}
              placeholderTextColor={Colors.dark}
              placeholder='A blue lion logo reading ‘HEXA’ in bold letters'
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)} />
            <View>
              <Text style={{ fontSize: 11, color: Colors.dark }}>{promptText?.length}/500</Text>
            </View>
          </View>
          <Title title='Logo Styles' />
          <FlatList
            horizontal
            style={styles.logoContainer}
            contentContainerStyle={{ gap: 10, height: 120 }}
            data={logoStyles}
            renderItem={({ item, index }) => {
              return (
                <Button selected={item?.id === selectedLogo?.id} key={index} onPress={() => { setSelectedLogo(item) }} size='mini' title={item.title} imgUrl={item.imgUrl} />
              )
            }}/>
        </View>
        <Button onPress={createFunc} title='Create' size={"primary"} />
      </Pressable>
    </BackgroundGradient>
  )
}