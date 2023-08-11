import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card';
import Header from './src/components/Header';
import Lista from './src/components/Lista';
import MyButton from './src/components/MyButton';
import UniversityData from './src/components/UniversityData';
import UserData from './src/components/UserData';

export default function App() {

  const [key, setKey] = useState(0);

  const fetchNewUser = () => {
    setKey(key + 1);
  };

  const items = [
    { name: 'Fulano', idade: 20 },
    { name: 'Beltrano', idade: 22 },
    { name: 'Ciclano', idade: 19 },
    { name: 'Jhon Doe', idade: 30 },
  ]

  return (
    <View style={styles.container}>
      <Card backgroundColor="lightblue" />
      <Header title="Lista de Pessoa: "/>
      <Lista items={items}/>

      <UserData key={key}/>
      <MyButton onPress={fetchNewUser}/>

      <UniversityData />
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
