import { StyleSheet } from "react-native";
import { Colors } from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
      },
      spinner: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: Colors.white,
        borderTopColor: Colors.dark,
        borderRadius: 20,
      }
})

export default styles