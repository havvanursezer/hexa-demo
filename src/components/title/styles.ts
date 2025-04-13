import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 10,
    },
    textStyle: {
        color: Colors.white,
        fontSize: 17,
        fontWeight: "bold"
    },
})

export default styles