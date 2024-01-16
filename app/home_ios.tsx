import { StyleSheet, Text, View } from "react-native";
import StatsCard from "../components/StatsCard";
import RingProgress from "../components/RingProgress";
import AppleHealthKit, {
  HealthInputOptions,
  HealthKitPermissions,
  HealthUnit,
  HealthValue,
} from "react-native-health";
import { useEffect, useState } from "react";
import { getTokens } from "@tamagui/core";
import appleHealthKit from "react-native-health";
import { ActivityIndicator } from "react-native";

// const color = getTokens().color.primary

const permissiions: HealthKitPermissions = {
  permissions: {
    read: [appleHealthKit.Constants.Permissions.HeartRate],
    write: [],
  },
};

const STEPS_GOAL = 10000;

export default function HomeIOS() {
  const [hasPermissions, setHasPermissions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [heartRate, setHeartRate] = useState(0);

  useEffect(() => {
    setLoading(true);

    AppleHealthKit.initHealthKit(permissiions, (err) => {
      if (err) {
        console.log("Error getting permissions. ", err);
        setLoading(false);
        return;
      }

      setHasPermissions(true);
    });
  }, []);

  useEffect(() => {
    if (!hasPermissions) {
      return;
    }

    const todayDate = new Date().getDate();
    const todayMonthDate = new Date().getDate();
    const todayMonth = new Date().getMonth();
    const todayYear = new Date().getFullYear();

    console.log("date: ", new Date(2024, 0, 16).toISOString());

    let options: HealthInputOptions = {
      startDate: new Date(2024, 0, 16).toISOString(), // required
      ascending: false, // optional; default false
      limit: 10, // optional; default no limit
    };

    AppleHealthKit.getHeartRateSamples(
      options,
      (err: Object, results: Array<HealthValue>) => {
        if (err) {
          console.log("err: ", err);
          return;
        }
        console.log({ results });
        const samples = results.map((result) => result.value);
        const samplesSum = samples.reduce((acc, value) => acc + value, 0);
        const avgRate = Math.round(samplesSum / samples.length);

        setHeartRate(avgRate);
        setLoading(false);
      }
    );
  }, [hasPermissions]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={42} color={"pink"} />
      ) : (
        <>
          <Text style={styles.header}>She Matters</Text>
          <Text style={styles.label}>Your average heart rate so far is:</Text>
          <Text style={styles.value}>{heartRate.toString()}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    gap: 30,
  },
  header: {
    fontSize: 48,
    color: "pink",
  },
  label: {
    textAlign: "center",
    fontSize: 28,
    color: "#fff",
  },
  value: {
    fontSize: 32,
    color: "#f00",
  },
});
