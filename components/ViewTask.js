import { Button, Overlay, Divider, Badge } from "@rneui/themed";
import { View, StyleSheet, Text } from "react-native";
import { API_KEY } from "@env";

export default function ViewTask({
  visible,
  toggleOverlay,
  providedData,
  badgeFilter,
  updated,
  setUpdated,
}) {
  const patchData = async (status) => {
    const url = `https://todo-flask-api.onrender.com/api/todo/${providedData.id}/`;

    const data = {
      complete: status,
    };

    const options = {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "x-api-key": `${API_KEY}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Accept: "application/json",
      },
    };

    try {
      const resp = await fetch(url, options);
      const data = await resp.json();
      console.log(data.data.payload);
    } catch (error) {
      console.log(error);
    }

    setUpdated(!updated);
  };

  const deleteData = async () => {
    const url = `https://todo-flask-api.onrender.com/api/todo/${providedData.id}/`;

    const options = {
      method: "DELETE",
      headers: {
        "x-api-key": `${API_KEY}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Accept: "application/json",
      },
    };

    try {
      const resp = await fetch(url, options);
      const data = await resp.json();
      console.log(data.data.payload);
    } catch (error) {
      console.log(error);
    }

    setUpdated(!updated);
  };

  return (
    <View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={{ width: 300 }}>
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
                onPress={() => {
                  patchData("false");
                  toggleOverlay();
                }}
              />
            ) : (
              <Button
                color="success"
                title="Mark as complete"
                onPress={() => {
                  patchData("true");
                  toggleOverlay();
                }}
              />
            )}
          </View>
          <View style={{ marginTop: 10, marginBottom: 5 }}>
            <Button
              color="error"
              title="Delete task"
              onPress={() => {
                deleteData();
                toggleOverlay();
              }}
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({
  taskText: {
    fontSize: 18,
  },
});
