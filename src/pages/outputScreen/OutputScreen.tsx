import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { OutputResponse, OutputScreenNavigationProp, RootStackParamList } from '../../type/Types';
import BackgroundGradient from '../../components/backgroundGradient/BackgroundGradient';
import Title from '../../components/title/Title';
import styles from './styles';
import Button from '../../components/button/Button';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import * as Clipboard from 'expo-clipboard';

type OutputScreenRouteProp = RouteProp<RootStackParamList, 'output'>;

export default function OutputScreen() {
  const navigation = useNavigation<OutputScreenNavigationProp>();
  const route = useRoute<OutputScreenRouteProp>();
  const { docId } = route.params;

  const [data, setData] = useState<OutputResponse>();

  useEffect(() => {
    const getData = async () => {
      const docSnap = await getDoc(doc(db, 'userInputs', docId));
      if (docSnap.exists()) {
        setData(docSnap.data() as OutputResponse);
      }
    };
    getData();
  }, [docId]);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(data?.text as string);
  };

  return (
    <BackgroundGradient>
      <View style={{ flex: 1, gap: 5 }}>
        <Title title='Your Design' closeEnabled onPress={() => navigation.goBack()} />
        <View style={styles.logoContainer}>
          <Image style={styles.logoImg} source={data?.imgUrl} />
        </View>
        <View style={styles.promptContainer}>
          <View style={styles.promptHeader}>
            <Text style={[styles.promptText, { fontWeight: "bold" }]}>
              Prompt
            </Text>
            <Button type='copy' title='Copy' onPress={copyToClipboard} />
          </View>
          <Text style={styles.promptText}>
            {data?.text}
          </Text>
          <View style={styles.tag}>
            <Text style={[styles.promptText, { fontSize: 12 }]}>
              {data?.selectedScheme?.title}
            </Text>
          </View>
        </View>
      </View>
    </BackgroundGradient>
  )
}