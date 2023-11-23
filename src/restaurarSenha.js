import { View, Text, TextInput, StyleSheet } from "react-native";
import { Appbar, Button } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

export default function TelaRestaurarSenha() {

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
        <Appbar.BackAction
          color="white"
          onPress={() => navigator.navigate("login")}
        />


        <Appbar.Content
          title="NOTAS"
          titleStyle={{ color: "#FFFFFF", 
                        fontSize: 28, 
                        fontWeight: "bold" }}

          style={{ alignItems: "center", 
                   marginLeft: -50 }}
        />
      </Appbar.Header>
      <View style={{ justifyContent: "center", padding: 20, flex: 1, gap: 9 }}>

        <TextInput placeholder="Informe seu e-mail" style={styles.input} />

        <TextInput placeholder="Informe seu nome de usuário" style={styles.input} />

        <TextInput placeholder="Digite a nova senha" style={styles.input} /> 

        <TextInput placeholder="Confirme sua senha" style={styles.input} />

        <View style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 20 }}>

          <Button mode="outlined" buttonColor="#01B1FD" 
              textColor="white" onPress={() => navigator.navigate('login')}>
            FINALIZAR
          </Button>
          
        </View>
      </View>
    </View>



  )
}

const styles = StyleSheet.create({
  input: { backgroundColor: "white", 
           padding: 10, 
           borderRadius: 10 },
});