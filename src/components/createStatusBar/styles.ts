import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 70,
        width:"100%"
    },
    imgWrapper: {
        width: 70,
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    textWrapper: {
        flex:1,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        justifyContent:"center",
        padding:20
    },
    title: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 13,
        color: Colors.white,
    }
})

export default styles