import { FAB, Text, Tab, TabView } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Banner from "./components/Banner";
import Tasks from "./components/Tasks";

export default function App() {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <Banner />
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "black",
          height: 3,
        }}
        style={{
          backgroundColor: "#b6c7db",
        }}
        iconPosition="right"
      >
        <Tab.Item
          title="Tasks"
          titleStyle={{ fontSize: 15, color: "#000" }}
          icon={{ name: "list", type: "ionicon", color: "black" }}
        />
        <Tab.Item
          title="Stats"
          titleStyle={{ fontSize: 15, color: "#000" }}
          icon={{ name: "bar-chart", type: "ionicon", color: "black" }}
        />
        <Tab.Item
          title="About"
          titleStyle={{ fontSize: 15, color: "#000" }}
          icon={{ name: "help-circle", type: "ionicon", color: "black" }}
        />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <ScrollView>
            <Text style={{ fontSize: 40, marginLeft: 13, marginTop: 20 }}>
              Todo List
            </Text>
            <Tasks />
            <View
              style={{
                paddingBottom: 20,
                paddingTop: 20,
              }}
            ></View>
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Text h1>Stats</Text>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Text h1>About</Text>
        </TabView.Item>
      </TabView>
      <FAB
        visible={true}
        style={{
          position: "absolute",
          bottom: 20,
          right: 30,
        }}
        icon={{ name: "add", color: "black" }}
        color="#b6c7db"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
