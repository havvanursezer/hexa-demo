import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Route from './src/route/Route';

export default function App() {
  return (
    <View style={styles.container}>
      <Route/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
