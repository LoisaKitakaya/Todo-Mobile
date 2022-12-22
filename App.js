import { Text, FAB } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";

import Banner from "./components/Banner";

export default function App() {
  return (
    <View style={styles.container}>
      <Banner />
      <ScrollView style={styles.subContainer}>
        <View
          style={{
            paddingBottom: 10,
            paddingTop: 10,
          }}
        ></View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut
          diam quam nulla porttitor. Condimentum id venenatis a condimentum
          vitae sapien pellentesque habitant morbi. Iaculis urna id volutpat
          lacus laoreet. Semper feugiat nibh sed pulvinar proin. In metus
          vulputate eu scelerisque felis imperdiet proin. Neque laoreet
          suspendisse interdum consectetur libero id faucibus nisl tincidunt.
          Amet dictum sit amet justo donec. Commodo odio aenean sed adipiscing
          diam donec adipiscing. Mollis aliquam ut porttitor leo. Risus quis
          varius quam quisque id. Viverra nibh cras pulvinar mattis nunc sed
          blandit. Integer feugiat scelerisque varius morbi enim nunc faucibus
          a. Ultrices eros in cursus turpis. Non arcu risus quis varius quam
          quisque id. Eu scelerisque felis imperdiet proin fermentum leo vel
          orci porta. Risus sed vulputate odio ut. In fermentum et sollicitudin
          ac orci phasellus egestas. Egestas congue quisque egestas diam in arcu
          cursus euismod. Viverra maecenas accumsan lacus vel. Dolor sit amet
          consectetur adipiscing elit pellentesque. Habitasse platea dictumst
          vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Nisi
          lacus sed viverra tellus. Nullam vehicula ipsum a arcu cursus.
          Faucibus turpis in eu mi bibendum neque egestas congue. Nunc lobortis
          mattis aliquam faucibus purus. Duis ut diam quam nulla porttitor massa
          id. Elementum integer enim neque volutpat ac tincidunt vitae semper.
          Nullam vehicula ipsum a arcu. Nunc sed velit dignissim sodales ut eu
          sem. Pellentesque habitant morbi tristique senectus. Sagittis id
          consectetur purus ut faucibus pulvinar elementum. Pharetra vel turpis
          nunc eget. Morbi blandit cursus risus at ultrices mi tempus imperdiet
          nulla. Risus at ultrices mi tempus imperdiet nulla malesuada.
          Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget.
          Tristique senectus et netus et malesuada fames ac turpis egestas. Diam
          quis enim lobortis scelerisque fermentum. Aliquam vestibulum morbi
          blandit cursus risus at ultrices mi tempus. Ipsum dolor sit amet
          consectetur adipiscing. Sed nisi lacus sed viverra tellus in hac
          habitasse. Adipiscing diam donec adipiscing tristique risus nec
          feugiat in. Nunc sed id semper risus in hendrerit gravida rutrum.
          Habitasse platea dictumst quisque sagittis purus. Nulla at volutpat
          diam ut venenatis tellus in metus. Nisi porta lorem mollis aliquam ut
          porttitor. Odio tempor orci dapibus ultrices in iaculis nunc sed
          augue. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu.
          Vitae tempus quam pellentesque nec. Egestas fringilla phasellus
          faucibus scelerisque eleifend donec pretium vulputate. Blandit cursus
          risus at ultrices mi tempus imperdiet. Sed lectus vestibulum mattis
          ullamcorper velit sed ullamcorper morbi. Amet mauris commodo quis
          imperdiet massa tincidunt nunc. Scelerisque eu ultrices vitae auctor.
          Amet nisl purus in mollis nunc sed id semper. Aliquet sagittis id
          consectetur purus ut faucibus pulvinar elementum. Vitae turpis massa
          sed elementum tempus egestas sed sed. At varius vel pharetra vel.
          Platea dictumst quisque sagittis purus sit amet volutpat consequat
          mauris. Auctor neque vitae tempus quam pellentesque nec nam aliquam
          sem. Dolor magna eget est lorem ipsum. Euismod quis viverra nibh cras
          pulvinar mattis nunc sed. In ante metus dictum at tempor commodo. Urna
          cursus eget nunc scelerisque viverra. Vel fringilla est ullamcorper
          eget nulla. Amet nisl suscipit adipiscing bibendum est ultricies
          integer. Placerat duis ultricies lacus sed turpis tincidunt.
        </Text>
        <View
          style={{
            paddingBottom: 20,
            paddingTop: 20,
          }}
        ></View>
      </ScrollView>
      <FAB
        visible={true}
        style={{
          position: "absolute",
          bottom: 20,
          right: 30,
        }}
        icon={{ name: "add", color: "black" }}
        color="#b6c7db"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subContainer: {
    padding: 8,
  },
});
