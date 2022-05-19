import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Conversor from './src/Conversor';

export default function App() {
  return (
    <View style={styles.container}>
      <Conversor currencyA='USD' currencyB='BRL' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
