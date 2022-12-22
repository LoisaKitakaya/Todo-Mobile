import { View, StyleSheet } from "react-native";

export default function Banner() {
  return <View style={styles.bannerImage} />;
}

const styles = StyleSheet.create({
  bannerImage: {
    width: "100%",
    height: 30,
    backgroundColor: "#b6c7db",
  },
});
