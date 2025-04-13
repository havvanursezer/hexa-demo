import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { OutputScreenNavigationProp } from '../../type/Types';
import BackgroundGradient from '../../components/backgroundGradient/BackgroundGradient';
import Title from '../../components/title/Title';
import styles from './styles';
import Button from '../../components/button/Button';

export default function OutputScreen() {
  const navigation = useNavigation<OutputScreenNavigationProp>();
  return (
    <BackgroundGradient>
      <View style={{ flex: 1, gap: 5 }}>
        <Title title='Your Design' closeEnabled onPress={()=> navigation.goBack()} />
        <View style={styles.logoContainer}>
          <Image style={styles.logoImg} source={require("../../assets/logo.png")} />
        </View>
        <View style={styles.promptContainer}>
          <View style={styles.promptHeader}>
            <Text style={[styles.promptText, { fontWeight: "bold" }]}>
              Prompt
            </Text>
            <Button type='copy' title='Copy' onPress={() => { console.log("copied..") }} />
          </View>
          <Text style={styles.promptText}>
            A professional logo for Harrison & Co. Law Firm, using balanced serif fonts
          </Text>
          <View style={styles.tag}>
            <Text style={[styles.promptText, { fontSize: 12 }]}>
              Monogram
            </Text>
          </View>
        </View>
      </View>
    </BackgroundGradient>
  )
}