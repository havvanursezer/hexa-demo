import React, { ReactNode } from 'react';
import { Dimensions, Image, SafeAreaView, StyleSheet, View, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import { BackgroundGradientProps } from '../../type/Types';


const BackgroundGradient: React.FC<BackgroundGradientProps> = ({ children, style }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#09090B" }}>
            <View style={{ flex: 1, zIndex: 111, paddingHorizontal:20 }}>
                {children}
            </View>
            <BlurView
                intensity={50} // 0-100 arası değer (210 gibi yüksek değerler için 100 kullanın)
                tint="dark" // "light", "dark", "default" veya "extraLight"
                style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height, position: "absolute" }}
            >
                <Image style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height }} source={require("../../assets/linearBg.png")} />
            </BlurView>
        </SafeAreaView>
    );
};

export default BackgroundGradient;
