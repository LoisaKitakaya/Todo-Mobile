import { Button, Overlay, Divider, Input } from "@rneui/themed";
import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function AddTask({
  visibleModal,
  toggleModalOverlay,
  updated,
  setUpdated,
}) {
  const [task, setTask] = useState("Task");
  const [label, setLabel] = useState("Label");
  const [description, setDescription] = useState("Description");
  const [date, setDate] = useState("Due Date");

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
        "x-api-key":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNfaWQiOiJiYjQyMzcwYzNmMzE0MTA0ODcxZGM1OTBlZjdmYWViZSJ9.o59LgFsKIYMLLkkGhQKwgJGQCQKOribNutpExK8Tqwc",
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
          <Input placeholder={task} onChangeText={(text) => setTask(text)} />
          <Input placeholder={label} onChangeText={(text) => setLabel(text)} />
          <Input
            placeholder={description}
            onChangeText={(text) => setDescription(text)}
          />
          <Input placeholder={date} onChangeText={(text) => setDate(text)} />
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
