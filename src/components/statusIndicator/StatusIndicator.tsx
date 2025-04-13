import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StatusIndicatorProp } from '../../type/Types';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../theme/colors';
import { CircleAlert } from '../icons/Icons';
import CustomSpinner from '../spinner/Spinner';
import styles from './styles';

const StatusIndicator: React.FC<StatusIndicatorProp> = ({ title, status, subtitle, imgUrl, onPress }) => {
    return (
        <TouchableOpacity disabled={onPress ? false : true} onPress={() => onPress ? onPress() : null} style={styles.container}>
            <View style={[styles.imgWrapper, { backgroundColor: status === "rejected" ? Colors.softRed : Colors.darkBg, }]}>
                {
                    status === "pending" ? <CustomSpinner/>:
                        status === "fullfilled" ? <Image style={[styles.imgWrapper, { height: "100%" }]} source={imgUrl} /> :
                            status === "rejected" ? <CircleAlert width={25} height={25} /> : null
                }
            </View>
            {
                status === "fullfilled" ?
                    <LinearGradient
                        colors={[Colors.blue, Colors.purple]}
                        style={styles.textWrapper}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={styles.title}>{title}</Text>
                        <Text style={[styles.subtitle, { color: Colors.white }]}>{subtitle}</Text>
                    </LinearGradient>
                    :
                    <View style={[styles.textWrapper, { backgroundColor: status === "rejected" ? Colors.red : Colors.inputBg }]}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={[styles.subtitle, { color: status === "pending" ? Colors.dark : Colors.white }]}>{subtitle}</Text>
                    </View>
            }
        </TouchableOpacity>
    );
};

export default StatusIndicator;