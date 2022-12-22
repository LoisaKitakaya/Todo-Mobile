import { Text } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Banner from "./components/Banner";

export default function App() {
  return (
    <View style={styles.container}>
      <Banner />
      <View style={styles.subContainer}>
        <Text>This is very weird</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cffafe",
  },
  subContainer: {
    padding: 8,
  },
});
