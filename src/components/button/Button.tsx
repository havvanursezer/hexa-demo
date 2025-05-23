import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { ButtonProp } from '../../type/Types';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../theme/colors';
import { Block, Cancel, Copy, Stars } from '../icons/Icons';

const Button: React.FC<ButtonProp> = ({ title, size, imgUrl, selected, onPress, type }) => {
    return (
        <TouchableOpacity onPress={() => onPress()} style={size === "primary" ? styles.primaryButton : { alignItems: "center", gap: 5 }}>
            {
                size === "mini" &&
                <View style={[styles.miniButton, { borderWidth: selected ? 2 : 0, borderColor: Colors.white }]}>
                    {
                        imgUrl ? <Image source={imgUrl} style={styles.logoImg} resizeMode='cover' />
                            :
                            <Block />
                    }
                </View>
            }
            <View style={{ flexDirection: "row", gap: 5 }}>
                {
                    type === "copy" && <Copy />
                }
                <Text style={[size === "primary" ? styles.primaryText : size === "mini" && !selected ? styles.miniText : size === "mini" && selected ? styles.miniTextSelected : styles.textStyle]}>{title}</Text>
            </View>
            {
                size === "primary" && <Stars />
            }
            {
                type === "cancel" && <Cancel />
            }
            {
                size === "primary" &&
                <LinearGradient
                    colors={[Colors.blue, Colors.purple]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={[styles.primaryButton, { position: "absolute", zIndex: -1 }]}
                />
            }
        </TouchableOpacity>
    );
};

export default Button;