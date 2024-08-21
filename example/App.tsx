import {
  checkIsQuickSupportInstalled,
  openQuickSupport,
  openQuickSupportInStore,
} from "expo-team-viewer";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Test actions</Text>
      <Text />
      <Button
        title="Check if quickSupport is installed"
        onPress={checkIsQuickSupportInstalled}
      />
      <Text />
      <Button title="Open quickSupport" onPress={openQuickSupport} />
      <Text />
      <Button
        title="Open quickSupport in Store"
        onPress={openQuickSupportInStore}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
