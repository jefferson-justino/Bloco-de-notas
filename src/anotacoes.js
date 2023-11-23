import { View, Text, StyleSheet, ScrollView, Modal, Settings, Alert } from "react-native";
import { Appbar, Button, Searchbar, FAB, IconButton, TextInput } from "react-native-paper";
import { useState, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

const urlDev = "http://localhost:3000"
const urlProduct = "https://api-backend-bd-tarde.onrender.com"


export default function Anotacoes() {

  const navigator = useNavigation();

  const [desc, setDesc] = useState('')
  const [tit, setTit] = useState("")

  console.log(desc)
  console.log(tit)

  const load = async () => {
    const result = await fetch(`${urlProduct}/anotacao`,
      {
        method: "POST",
        headers: {
          titulo: tit,
          descricao: desc
        },
      }

    ).then(res => res)


    Alert.alert('Anotação salva!', 'O que deseja fazer?', [
      {
        text: 'Sair',
        onPress: () => navigator.navigate('inicial'),
      },
      {
        text: 'Continuar escrevendo'

      }
    ])

    const resultAnot = await result.json()

    console.log('resultAnot', resultAnot)

  }

  return (
    <View style={{ backgroundColor: '#030303', flex: 1 }}>
      <Appbar.Header style={{
        backgroundColor: '#000000',
        borderBottomColor: "#4D4B4B", borderBottomWidth: 2,
      }}>
        <TextInput placeholder="Título" selectionColor="white" 
          activeOutlineColor="#4D4B4B"
          textColor="white" mode="outlined"
          onChangeText={(text) => setTit(text)}
          style={{
                  backgroundColor: '#000000', 
                  fontSize: 22, 
                  width: 165, 
                  paddingLeft: 5,
                }}/>
                
        <View style={{ flex: 1, paddingLeft: 80, paddingRight: 20 }} >

          <Button mode="Contained" textColor="white" buttonColor="#1B6FEE"
            onPress={() => load()} >SALVAR</Button>

        </View>

      </Appbar.Header>
      <TextInput mode="outlined" textColor="white" 
        multiline={true} numberOfLines={10000}
        activeOutlineColor="#4D4B4B"
        style={{ backgroundColor: '#030303' }}
        onChangeText={(text) => setDesc(text)} />

    </View>
  )
}


