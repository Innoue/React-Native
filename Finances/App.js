import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import AuthProvider from './src/contexts/auth';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle="light-content"/>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131313',
  },
});
