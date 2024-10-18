import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);
  return (
    <View style={styles.container}>
      <Text>{contador}</Text>
      <Button 
        title="Cont + 1" 
        onPress={() => setContador(contador + 1)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
