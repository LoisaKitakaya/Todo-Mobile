import { Button, Overlay, Divider, Input } from "@rneui/themed";
import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { API_KEY } from "@env";

export default function AddTask({
  visibleModal,
  toggleModalOverlay,
  updated,
  setUpdated,
}) {
  const [task, setTask] = useState("");
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const postData = async () => {
    const url = "https://todo-flask-api.onrender.com/api/todo/";

    const data = {
      task: task,
      label: label,
      description: description,
      due_date: date,
    };

    const options = {
      method: "POST",
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

  return (
    <View>
      <Overlay isVisible={visibleModal} onBackdropPress={toggleModalOverlay}>
        <View style={{ width: 300 }}>
          <Text style={{ fontSize: 18 }}>Add new task</Text>
          <Divider style={{ marginTop: 5, marginBottom: 5 }} />
          <Input
            value={task}
            placeholder="Task"
            onChangeText={(text) => setTask(text)}
          />
          <Input
            value={label}
            placeholder="Label"
            onChangeText={(text) => setLabel(text)}
          />
          <Input
            value={description}
            placeholder="Description"
            onChangeText={(text) => setDescription(text)}
          />
          <Input
            value={date}
            placeholder="Due Date"
            onChangeText={(text) => setDate(text)}
          />
          <View style={{ marginTop: 10, marginBottom: 5 }}>
            <Button
              color="secondary"
              title="Add task"
              onPress={() => {
                postData();
                toggleModalOverlay();
              }}
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({});
