import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import Usuarios from '../services/Usuarios';
import { DataTable } from 'react-native-paper';



export default function Home(props) {
    const [usuarios, setUsuarios] = useState([]);

    const getTodos = () => {
        Usuarios.getUsuarios().then((response) => {
            setUsuarios(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
            props.navigation.navigate('login');
        })
    }

    useEffect(() => {
        getTodos();
    }, [])
  return (
    <View style={{justifyContent: 'center'}}>
      <DataTable>
        <DataTable.Header>
        <DataTable.Title>Nome</DataTable.Title>
        <DataTable.Title>Acessos</DataTable.Title>
        </DataTable.Header>
        {
                                usuarios.map(
                                    usuario =>
                                    <DataTable.Row key = {usuario.id}>
                                        <DataTable.Cell>{usuario.nome}</DataTable.Cell>
                                        <DataTable.Cell>{usuario.roles}</DataTable.Cell>
                                    </DataTable.Row>
                                )
         }
      </DataTable>
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