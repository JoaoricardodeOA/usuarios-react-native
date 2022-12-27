import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { useState } from 'react';
import Usuarios from '../services/Usuarios';


export default function Login(props) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const navegar = (e) =>{
    e.preventDefault();
    const log = {nome,senha}
    Usuarios.setPasswordAndUsername(log);
    Usuarios.login().then((response)=>{
      alert(response.data.mensagem)
      props.navigation.navigate('home');
  }).catch(error => {
      console.log(log)
      console.log(error)
      alert(error.response.data.mensagem)
  })
  }
  return (
    <View style={{alignItems: 'center',justifyContent: 'center'}}>
      <TextInput placeholder='nome' value = {nome} onChange = {(e) => setNome(e.target.value)} style={{ width:'80%',fontSize:19, marginTop:'40%'}}/>
      <TextInput placeholder='senha' secureTextEntry={true} style={{width:'80%',fontSize:19}} value = {senha} onChange = {(e) => setSenha(e.target.value)}/>
      <Button title='home' onPress={(e)=>navegar(e)} />
      <StatusBar style="auto" />
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