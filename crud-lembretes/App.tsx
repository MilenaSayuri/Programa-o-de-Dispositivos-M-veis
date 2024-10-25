// import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

interface Lembrete {
  id: string;
  texto: string;
}

export default function App() {
  const [lembrete, setLembrete] = useState("");
  const [lembretes, setLembretes] = useState<Lembrete[]>([]);

  const adicionar = () => {
    if (lembrete.length >= 1) {
      const novoLembrete: Lembrete = {
        id: Date.now().toString(),
        texto: lembrete,
      };
      setLembretes((lembretesAtual) => [novoLembrete, ...lembretesAtual]);
      setLembrete("");
    } else {
      Alert.alert("É preciso digitar um lembrete");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um lembrete..."
        onChangeText={setLembrete}
        value={lembrete}
      />
      <Pressable style={styles.button} onPress={adicionar}>
        <Text style={styles.buttonText}>Salvar Lembrete</Text>
      </Pressable>
      
      <FlatList
        keyExtractor={(item) => item.id}
        style={styles.list}
        data={lembretes}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item.texto}</Text>
            <View style={styles.listItemButtons}>
              <Pressable>
                <AntDesign name="delete" size={24} />
              </Pressable>
              <Pressable>
                <AntDesign name="edit" size={24} />
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    paddingVertical: 40,
  },

  input: {
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    padding: 12,
    textAlign: "center",
    borderRadius: 4,
  },

  button: {
    width: "80%",
    backgroundColor: "#0096F3",
    padding: 12,
    borderRadius: 4,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  list: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
    marginTop: 12,
    borderRadius: 4,
    padding: 4,
  },

  listItem: {
    borderWidth: 1,
    borderColor: "#999",
    padding: 12,
    backgroundColor: "#f0f0f0",
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },

  listItemText: {
    textAlign: "center",
    width: "70%",
  },

  listItemButtons: {
    flexDirection: "row",
    width: '30%',
    justifyContent: 'space-evenly'
  },

});
