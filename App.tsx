import { Platform, StyleSheet } from "react-native";
import SafeAreaView, { SafeAreaProvider } from "react-native-safe-area-view";
import Home from "./src/views/home";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 50 : 60,
    backgroundColor: "#8B8B8B",
    flex: 1,
  },
});
