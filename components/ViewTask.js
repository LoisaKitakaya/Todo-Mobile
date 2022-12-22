import { Button, Overlay, Divider, Badge } from "@rneui/themed";
import { View, StyleSheet, Text } from "react-native";

export default function ViewTask({
  visible,
  toggleOverlay,
  providedData,
  badgeFilter,
}) {
  return (
    <View>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        style={styles.taskContainer}
      >
        <Text style={styles.taskText}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            ID:
          </Text>{" "}
          {providedData.id}
        </Text>
        <Divider style={{ marginTop: 5, marginBottom: 5 }} />
        <Text style={styles.taskText}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Task:
          </Text>{" "}
          {providedData.task}
        </Text>
        <Text style={styles.taskText}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Label:
          </Text>{" "}
          <Badge
            value={providedData.label}
            status={badgeFilter(providedData.label)}
          />
        </Text>
        <Text style={styles.taskText}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Description:
          </Text>{" "}
          {providedData.description}
        </Text>
        <Text style={styles.taskText}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Due:
          </Text>{" "}
          {providedData.due_date}
        </Text>
        <Text style={styles.taskText}>
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Complete:
          </Text>{" "}
          {providedData.complete ? <Text>True</Text> : <Text>False</Text>}
        </Text>
        <View style={{ marginTop: 10, marginBottom: 5 }}>
          {providedData.complete ? (
            <Button
              color="warning"
              title="Mark as incomplete"
              onPress={toggleOverlay}
            />
          ) : (
            <Button
              color="success"
              title="Mark as complete"
              onPress={toggleOverlay}
            />
          )}
        </View>
        <View style={{ marginTop: 10, marginBottom: 5 }}>
          <Button color="error" title="Delete task" onPress={toggleOverlay} />
        </View>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 15,
  },
});
