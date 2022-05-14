import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Button } from "react-native";

import { HelloWorld } from "../components/HelloWorld";
import { useRootNavigation } from "../navigation";

export function Home() {
  const { navigate } = useRootNavigation();
  return (
    <View style={styles.container}>
      <HelloWorld />
      <Button title="Open todo list" onPress={() => navigate("TodoList")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
