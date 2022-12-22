import { ScrollView, StyleSheet, TouchableHighlight } from "react-native";
import { ListItem, Badge } from "@rneui/themed";

import data from ".././data.json";

const allTasks = data.data;

export default function Tasks() {
  const badgeFilter = (label) => {
    if (label === "Personal") {
      return "success";
    } else if (label === "Work") {
      return "warning";
    } else if (label === "Social") {
      return "primary";
    } else if (label === "Urgent") {
      return "error";
    }
  };

  return (
    <ScrollView style={styles.tasksContainer}>
      {allTasks.map((task, index) => {
        return (
          <ListItem
            key={index}
            bottomDivider
            Component={TouchableHighlight}
            pad={20}
            onPress={() => console.log("Press")}
          >
            <ListItem.Content>
              <ListItem.Content
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <ListItem.Title>{task.task}</ListItem.Title>
                <ListItem.Subtitle>
                  <Badge value={task.label} status={badgeFilter(task.label)} />
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Subtitle>Due: {task.due}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tasksContainer: {
    flex: 1,
    height: "100%",
  },
});
