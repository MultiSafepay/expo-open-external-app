import { StyleSheet, Text, View } from 'react-native';

import * as ExpoTeamViewer from 'expo-team-viewer';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoTeamViewer.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
