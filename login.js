
import { View,Text, TextInput, StyleSheet} from "react-native";
import { Appbar,Button } from 'react-native-paper';

export default function TelaLogin(){
    return(
        <View style={{backgroundColor:'#000000', flex:1,  }} >
   <Appbar.Header style={{backgroundColor:'#0E0E0E', borderBottomColor:'#4D4B4B', borderBottomWidth:2 }}>
    <Appbar.Content title='NOTAS' titleStyle={{color:'#FFFFFF', fontSize:28, fontWeight:"bold"}} style={{alignItems:'center'}} />
           </Appbar.Header>
    <View style={{justifyContent:'center', padding:20 , flex:1}}>
    <TextInput placeholder="Digite seu usuário" style={styles.input}/>

    <TextInput placeholder="Digite sua senha" style={styles.input}/>
<Button style={styles.botao}>Esqueceu a senha?</Button>

    </View>

    </View>

)
}
const styles = StyleSheet.create({
input:{backgroundColor:'white',padding:10, marginBottom:10, borderRadius:10
},
botao:{
textColor:'white'
}
})



