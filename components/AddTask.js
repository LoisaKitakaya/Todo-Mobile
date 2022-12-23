import { Button, Overlay, Divider, Input } from "@rneui/themed";
import { View, StyleSheet, Text } from "react-native";

export default function AddTask({ visibleModal, toggleModalOverlay }) {
  return (
    <View>
      <Overlay isVisible={visibleModal} onBackdropPress={toggleModalOverlay}>
        <View style={{ width: 300 }}>
          <Text style={{ fontSize: 18 }}>Add new task</Text>
          <Divider style={{ marginTop: 5, marginBottom: 5 }} />
          <Input placeholder="Task" />
          <Input placeholder="Label" />
          <Input placeholder="Description" />
          <Input placeholder="Due date" />
          <View style={{ marginTop: 10, marginBottom: 5 }}>
            <Button
              color="secondary"
              title="Add task"
              onPress={toggleModalOverlay}
            />
          </View>
        </View>
      </Overlay>
    </View>
  );
}

const styles = StyleSheet.create({});
