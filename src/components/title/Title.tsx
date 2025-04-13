import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { TitleProps } from '../../type/Types';
import Button from '../button/Button';
import { Cancel } from '../icons/Icons';

const Title: React.FC<TitleProps> = ({ title, alignCenter, buttonTitle, onPress, closeEnabled }) => {
  return (
    <View style={[styles.container, { justifyContent: alignCenter ? "center" : "space-between", alignItems:"center" }]}>
      <Text style={[styles.textStyle,{fontSize: alignCenter ? 17 : 20}]}>{title}</Text>
      {
        buttonTitle &&
        <Button onPress={() => onPress ? onPress() : null} title={buttonTitle} />
      }
      {
        closeEnabled &&
        <Button onPress={() => onPress ? onPress() : null}>
          <Cancel/>
        </Button>
      }
    </View>
  );
};

export default Title