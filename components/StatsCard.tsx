import { Text, View, StyleSheet } from "react-native"

type StatsCardProps = {
  label: string
  value: string | number
}

const StatsCard = ({ label, value  }: StatsCardProps) => (
  <View style={styles.statsContainer}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
)

const styles = StyleSheet.create({
  statsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  label: {
    color: 'white',
    fontSize: 20,
  },
  value: {
    fontSize: 35,
    fontWeight: '500',
    color: '#AFB3BE',
  },
})

export default StatsCard