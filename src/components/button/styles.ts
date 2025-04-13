import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 13,
        color: Colors.white,
        fontWeight: 400
    },
    primaryText: {
        fontSize: 17,
        color: Colors.white,
        fontWeight: "bold"
    },
    miniText: {
        fontSize: 13,
        color: Colors.dark,
        fontWeight: 400
    },
    miniTextSelected: {
        fontSize: 13,
        color: Colors.white,
        fontWeight: "bold"
    },
    primaryButton: {
        width: "100%",
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        flexDirection: "row",
        gap: 10
    },
    miniButton: {
        width: 90,
        height: 90,
        borderRadius: 16,
        backgroundColor: Colors.inputBg,
        alignItems:"center",
        justifyContent:"center"
    },
})

export default styles