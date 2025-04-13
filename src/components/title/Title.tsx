import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import { TitleProps } from '../../type/Types';
import Button from '../button/Button';

const Title: React.FC<TitleProps> = ({ title, alignCenter, buttonTitle, onPress, closeEnabled }) => {

  const handlePress = () => {
    if (onPress) onPress();
  };

  return (
    <View style={[styles.container, { justifyContent: alignCenter ? "center" : "space-between", alignItems: "center" }]}>
      <Text style={[styles.textStyle, { fontSize: alignCenter ? 17 : 20 }]}>{title}</Text>

      {buttonTitle && <Button onPress={handlePress} title={buttonTitle} />}

      {closeEnabled && <Button type="cancel" onPress={handlePress} />}
    </View>
  );
};

export default Title