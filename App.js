import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <>
    <View style={styles1.container}>
      <Text>Sistema de Cadastro</Text>
    </View>
    <View style={styles2.container}>
      <Text numberOfLines={3} selectable={true}>Para conseguir ter acesso a esse sistema você precisa preencher corretamente as informações solicitadas abaixo:</Text>
    </View>
    <View styles={styles3.container}>
      <TextInput
        placeholder= 'Nome completo'
        style={{
        borderColor: 'gray',
        borderWidth: 1,
        height: 40,
        paddingHorizontal: 14
        }}
      />
      <TextInput
        placeholder= 'E-mail'
        style={{
        borderColor: 'gray',
        borderWidth: 1,
        height: 40,
        paddingHorizontal: 14
        }}
      />
      <TextInput
        onBlur={_=> alert('Seu código de confirmação é 249916')}
        keyboardType= 'numeric'
        placeholder= 'Telefone'
        style={{
        borderColor: 'gray',
        borderWidth: 1,
        height: 40,
        paddingHorizontal: 14
        }}
      />
      <TextInput
        keyboardType= 'numeric'
        placeholder= 'Código de confirmação'
        style={{
        borderColor: 'gray',
        borderWidth: 1,
        height: 40,
        paddingHorizontal: 14
        }}
      />
    </View>
    <View style={{padding:16}}>
      <Button 
      color='#6298'
      onPress={_=> alert('Cadastro realizado com sucesso!')}
      title={"Cadastre-se"}/>
    </View>
  </>
  );
}

const styles1 = StyleSheet.create({
  container: {
    backgroundColor: '#6298',
    alignItems: 'center',
    textAlign: 'justify',
    paddingVertical:50, 
  },
})

const styles2 = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'justify',
    paddingVertical: 30,
    color: 'green'
  },
})

const styles3 = StyleSheet.create({
  container: {
      borderColor: 'gray',
      borderWidth: 1,
      height: 40,
      paddingHorizontal: 14
  },
})
;

