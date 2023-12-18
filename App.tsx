import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StatsCard from './components/StatsCard';
import RingProgress from './components/RingProgress';

export default function App() {
  return (
    <View style={styles.container}>
      <RingProgress progress={0.5} />
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
    padding: 20,
    gap: 60,
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
});
