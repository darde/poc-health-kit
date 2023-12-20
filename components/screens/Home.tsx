import { StyleSheet, Text, View } from 'react-native';
import StatsCard from '../StatsCard';
import RingProgress from '../RingProgress';
import AppleHealthKit, { HealthInputOptions, HealthKitPermissions } from 'react-native-health'
import { useEffect, useState } from 'react';

const permissiions: HealthKitPermissions = {
  permissions: {
    read: [
      AppleHealthKit.Constants.Permissions.StepCount,
      AppleHealthKit.Constants.Permissions.DateOfBirth,
      AppleHealthKit.Constants.Permissions.BiologicalSex,
      AppleHealthKit.Constants.Permissions.Height,
      AppleHealthKit.Constants.Permissions.Weight,
      AppleHealthKit.Constants.Permissions.BloodPressureDiastolic,
      AppleHealthKit.Constants.Permissions.BloodPressureSystolic,
    ],
    write: [],
  }
}

const STEPS_GOAL = 10000

export default function App() {
  const [hasPermissions, setHasPermissions] = useState(false)
  const [steps, setSteps] = useState(0)

  useEffect(() => {
    AppleHealthKit.initHealthKit(permissiions, (err) => {
      if (err) {
        console.log('Error getting permissions. ', err)
        return
      }

      setHasPermissions(true)
    })
  }, [])

  useEffect(() => {
    if (!hasPermissions) {
      return
    }

    const options: HealthInputOptions = {
      date: new Date().toISOString(),
      includeManuallyAdded: false,
    }

    AppleHealthKit.getStepCount(options, (err, results) => {
      if (err) {
        console.log('Error getting the stpes. ', err)
        return
      }

      setSteps(results.value)
      console.log('steps results: ', results.value)
    })
  }, [hasPermissions])

  return (
    <View style={styles.container}>
      <RingProgress progress={steps / STEPS_GOAL} />
      <View style={styles.statsContainer}>
        <StatsCard label='Steps' value={steps.toString()} />
        <StatsCard label='Distance' value={`${0.75} Km`} />
        <StatsCard label='Flights Climbed' value={3} />
      </View>
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
    gap: 6,
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
});
