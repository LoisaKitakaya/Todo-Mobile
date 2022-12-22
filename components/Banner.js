import { Text } from "@rneui/base";
import { View, StyleSheet } from "react-native";

export default function Banner() {
  return (
    <View style={styles.bannerImage}>
      <View style={styles.statsContainer}>
        <View style={styles.stats}>
          <Text style={styles.bannerText}>Total tasks</Text>
          <Text style={styles.bannerText}>30</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.bannerText}>Done</Text>
          <Text style={styles.bannerText}>30</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.bannerText}>Undone</Text>
          <Text style={styles.bannerText}>30</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerImage: {
    width: "100%",
    height: 150,
    backgroundColor: "#b6c7db",
  },
  stats: {
    marginRight: 45,
  },
  statsContainer: {
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    left: 35,
    top: 50,
  },
  bannerText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
