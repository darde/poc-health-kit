import { View, Platform } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const index = () => {
  return (
    <View>
      {Platform.OS === "ios" ? (
        <Redirect href={"/home_ios"} />
      ) : (
        <Redirect href={"/home_android"} />
      )}
    </View>
  );
};

export default index;
