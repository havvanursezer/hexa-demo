import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const styles = StyleSheet.create({
    logoContainer: {
        width: screenWidth * .90,
        height: screenWidth * .90,
        borderRadius: 16
    },
    logoImg: {
        width: "100%",
        height: "100%"
    },
    promptContainer: {
        width: "100%",
        padding: 12,
        borderRadius: 12,
        backgroundColor: Colors.inputBg,
        gap: 5,
        marginTop: 15
    },
    promptHeader: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    promptText: {
        color: Colors.white,
        fontSize: 16
    },
    tag: {
        width: "25%",
        height: 25,
        backgroundColor: Colors.dark,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default styles