import { View, Text, StyleSheet, ScrollView, Modal, Settings, Alert } from "react-native";
import { Appbar, Button, Searchbar, FAB, IconButton, TextInput } from "react-native-paper";
import { useState, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

const urlDev = "http://localhost:3000"
const urlProduct = "https://api-backend-bd-tarde.onrender.com"



export default function Edicoes({ route }) {
  const navigator = useNavigation();

  const [lista, setLista] = useState({})

  const [desc, setDesc] = useState('')

  const [tit, setTit] = useState("")

  const { id } = route.params

  console.log(desc)
  console.log(tit)
  console.log(id)

  useEffect(() => {
    const load = async () => {
      const result = await fetch(`${urlProduct}/anotacao/${id}`)
      const resultAnot = await result.json()

      setLista(resultAnot)
    }

    load()


  }, [])

  console.log(lista)

  const excluir = async () => {
    const result = await fetch(`${urlProduct}/anotacao/${id}`,
      {
        method: "DELETE"
      }

    ).then(res => res)

    Alert.alert('Anotação excluída!', 'Você excluiu uma esta anotação', [
      {
        text: 'Ok',
        onPress: () => navigator.navigate('inicial'),
      }

    ])


    console.log('excluído')
  }

  return (
    <View style={{ backgroundColor: '#030303', flex: 1 }}>
      <Appbar.Header style={{
        backgroundColor: '#000000',
        borderBottomColor: "#4D4B4B", 
        borderBottomWidth: 2,
      }}>
        <TextInput placeholder="Título" selectionColor="white" activeOutlineColor="#4D4B4B"
          textColor="white" mode="outlined" style={{
                                              backgroundColor: '#000000', 
                                              fontSize: 22, 
                                              width: 165, 
                                              paddingLeft: 5,
                                                             }} value={lista.titulo} 
                                            onChangeText={(text) => setTit(text)} />
        <Appbar.Action icon="delete" 
                      size={40} color="#1573DD" 
                          onPress={() => excluir()} />
        <View style={{ flex: 1, paddingLeft: 10, paddingRight: 20 }} >

          <Button mode="Contained" textColor="white" buttonColor="#1B6FEE">
            SALVAR 
          </Button>

        </View>
      </Appbar.Header>

      <TextInput mode="outlined" textColor="white"
        value={lista.descricao}
        multiline={true} numberOfLines={10000}
        activeOutlineColor="#4D4B4B"
        style={{ backgroundColor: '#030303' }}
        onChangeText={(text) => setDesc(text)} />

    </View>
  )
}


