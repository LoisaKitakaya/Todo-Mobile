import { View, StyleSheet, TouchableHighlight } from "react-native";
import { ListItem, Badge, Overlay, Text } from "@rneui/themed";
import { useEffect, useState } from "react";
import { API_KEY } from "@env";
import axios from "axios";

import ViewTask from "./ViewTask";
import AddTask from "./AddTask";

export default function Tasks({ visibleModal, toggleModalOverlay }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [providedData, setProvidedData] = useState({});
  const [updated, setUpdated] = useState(false);

  const fetchData = async () => {
    const url = "https://todo-flask-api.onrender.com/api/todo/";
    const config = {
      headers: {
        "x-api-key": `${API_KEY}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        Accept: "application/json",
      },
    };

    setLoading(true);

    try {
      const resp = await axios.get(url, config);
      const data = await resp.data;
      setData(data.data.payload);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [updated]);

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
    <>
      {loading ? (
        <Overlay isVisible={true}>
          <Text>Loading...</Text>
        </Overlay>
      ) : (
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
                      <Badge
                        value={task.label}
                        status={badgeFilter(task.label)}
                      />
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
            setUpdated={setUpdated}
            updated={updated}
          />
          <AddTask
            visibleModal={visibleModal}
            toggleModalOverlay={toggleModalOverlay}
            setUpdated={setUpdated}
            updated={updated}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  tasksContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "column-reverse",
  },
});
