import '@tamagui/core/'
import { TamaguiProvider } from 'tamagui'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/screens/Home'
import config from './tamagui.config'

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 6,
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
});
