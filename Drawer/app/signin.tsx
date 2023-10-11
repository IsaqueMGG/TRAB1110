import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";
export default function App() {
  return (
    <View style={styles.container}>
      <Link href="home"> <Text>Começar</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
