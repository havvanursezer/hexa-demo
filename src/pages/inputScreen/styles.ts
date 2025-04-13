import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: Colors.inputBg,
        height: 175,
        borderRadius: 16,
        padding: 20,
        justifyContent:"space-between"
    },
    logoContainer: { 
        width: Dimensions.get("screen").width 
    }
})

export default styles