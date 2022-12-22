import { View, StyleSheet, TouchableHighlight } from "react-native";
import { ListItem, Badge } from "@rneui/themed";
import { useEffect, useState } from "react";

import data from ".././data.json";
import axios from "axios";
import ViewTask from "./ViewTask";

const allTasks = data.data;

export default function Tasks() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [providedData, setProvidedData] = useState({});

  const fetchData = async () => {
    const url = "https://todo-flask-api.onrender.com/api/todo/";
    const config = {
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
      const resp = await axios.get(url, config);
      const data = await resp.data;
      setData(data.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.tasksContainer}>
      {data.map((task, index) => {
        return (
          <ListItem
            key={index}
            bottomDivider
            Component={TouchableHighlight}
            pad={20}
            onPress={() => {
              toggleOverlay();
              setProvidedData(task);
            }}
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
                <ListItem.Title
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {task.task}
                </ListItem.Title>
                <ListItem.Subtitle>
                  <Badge value={task.label} status={badgeFilter(task.label)} />
                </ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Subtitle>Due: {task.due_date}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
      <ViewTask
        visible={visible}
        toggleOverlay={toggleOverlay}
        providedData={providedData}
        badgeFilter={badgeFilter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tasksContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "column-reverse",
  },
});
