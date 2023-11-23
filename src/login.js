import { View, Text, TextInput, StyleSheet } from "react-native";
import { Appbar, Button } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

export default function TelaLogin() {
  const navigator = useNavigation();
  return (
    <View style={{ backgroundColor: "#000000", flex: 1 }}>
      <Appbar.Header
        style={{
          backgroundColor: "#0E0E0E",
          borderBottomColor: "#4D4B4B",
          borderBottomWidth: 2,
        }}
      >
        <Appbar.Content
          title="NOTAS"
          titleStyle={{ color: "#FFFFFF", 
                        fontSize: 28, 
                        fontWeight: "bold" }}
          style={{ alignItems: "center" }}/>
      </Appbar.Header>
      <View style={{ justifyContent: "center", padding: 20, flex: 1, gap: 8 }}>

        <TextInput placeholder="Digite seu usuário"
         style={styles.input} />
         
        <TextInput placeholder="Digite sua senha" 
        style={styles.input} secureTextEntry />

        <Button textColor="white" onPress={() => navigator.navigate('restaurar')}>
          Esqueceu a senha?
        </Button>

        <View style={{ paddingLeft: 50, paddingRight: 50, gap: 8 }}>

          <Button mode="outlined" buttonColor="#1B6FEE" textColor="white" 
                  onPress={() => navigator.navigate('inicial')}>
            ENTRAR
          </Button>

          <Button
            mode="outlined"
            buttonColor="#01B1FD"
            textColor="white"
            onPress={() => navigator.navigate("cadastro")}>
            CADASTAR
          </Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: { backgroundColor: "white", padding: 10, borderRadius: 10 },
});
