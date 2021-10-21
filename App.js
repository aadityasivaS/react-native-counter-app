import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Appbar, FAB, Text } from "react-native-paper";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Counter App" />
      </Appbar.Header>
      <View style={styles.container}>
        <Text style={{ fontSize: 64 }}>{count}</Text>
      </View>
      <View style={styles.fixedView}>
        <FAB icon="plus" label="Add" onPress={() => setCount(count + 1)} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  fixedView: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
