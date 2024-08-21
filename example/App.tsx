import { checkIsAppInstalled, openApp, openAppInStore } from "expo-team-viewer";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [appName, setAppName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Test actions</Text>
      <TextInput value={appName} onChangeText={setAppName} />
      <Text />
      <Button
        title="Check if quickSupport is installed"
        onPress={() => checkIsAppInstalled(appName)}
      />
      <Text />
      <Button title="Open quickSupport" onPress={() => openApp(appName)} />
      <Text />
      <Button
        title="Open quickSupport in Store"
        onPress={() => openAppInStore(appName)}
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
