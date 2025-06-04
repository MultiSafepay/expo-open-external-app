import { checkIsAppInstalled, openApp, openAppInStore } from "expo-team-viewer";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const labels = {
  teamViewerApp: "com.teamviewer.quicksupport.market",
  iosApp: "tvqs://",
  iosAppName: "teamviewer-quicksupport",
  iosAppId: "id661649585",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#030303",
    padding: 5,
  },
});

export default function App() {
  const [appName, setAppName] = useState(labels.teamViewerApp);

  const checkInstalled = () => {
    const res = checkIsAppInstalled(appName);
    console.log("Is app installed:", res);
  };
  const openInstalledApp = () => {
    const res = openApp(appName);
    console.log("Open app result:", res);
  };
  const openStore = () => {
    const res = openAppInStore(appName);
    console.log("Open store result:", res);
  };
  return (
    <View style={styles.container}>
      <Text>Test actions</Text>
      <TextInput
        style={styles.input}
        value={appName}
        onChangeText={setAppName}
      />
      <Text />
      <Button
        title="Check if quickSupport is installed"
        onPress={checkInstalled}
      />
      <Text />
      <Button title="Open quickSupport" onPress={openInstalledApp} />
      <Text />
      <Button title="Open quickSupport in Store" onPress={openStore} />
    </View>
  );
}
