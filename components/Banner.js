import { Text } from "@rneui/base";
import { Image } from "@rneui/themed";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const BASE_URI =
  "https://images.pexels.com/photos/2259232/pexels-photo-2259232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

export default function Banner() {
  return (
    <View style={styles.bannerImage}>
      <Image
        source={{
          uri: BASE_URI,
        }}
        containerStyle={styles.item}
        PlaceholderContent={<ActivityIndicator />}
      />
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
    backgroundColor: "#f2f2f2",
  },
  item: {
    flex: 1,
    width: "100%",
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
