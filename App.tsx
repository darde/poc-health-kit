import "@tamagui/core/";
// import { TamaguiProvider } from "tamagui";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeStack from "./app/_layout";
import { useEffect } from "react";

export default function App() {
  // const [loaded] = useFonts({
  //   Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
  //   InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  // });

  useEffect(() => {
    console.log("loaded!!!!");
  }, []);

  return <HomeStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
