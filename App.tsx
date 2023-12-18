import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StatsCard from './components/StatsCard';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <StatsCard label='Steps' value={1219} />
        <StatsCard label='Distance' value={`${0.75} Km`} />
        <StatsCard label='Flights Climbed' value={3} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
});
