import { View, StyleSheet, Button } from "react-native";
import Header from '../components/Header'
import Footer from '../components/Footer'
import * as ScreenOrientation from 'expo-screen-orientation'

export default function MyScreenOrientations( ) {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      gap: 10
    },
    content: {
      flex: 1,
      gap: 20,
      padding: 20,
      alignSelf: 'center',
    },
    contentTextStyle: {
      padding: 5,
      textAlignVertical: 'center',
      minHeight: 50,
      backgroundColor: '#969',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center'
    },
    footer: {
      backgroundColor: '#888',
      paddingHorizontal: 25,
      padding: 20,
    }
  });

  async function padrao() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
    
  }

  async function right() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT)
  }

  async function left() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)
  }

  async function Baixo() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_DOWN)
  }

  async function Baixo() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_DOWN)
  }

  async function Baixo() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_DOWN)
  }

    async function Baixo() {
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_DOWN)
  }


  return (
    <View style={styles.container}>
      <Header
        title="Orientação de tela" 
       />
      <View 
      style={styles.content} 
      >
         <Button title="Default" onPress={padrao} />  
         <Button title="Deitar Direita" onPress={right} />  
         <Button title="Deitar Esquerda" onPress={left} />  
         <Button title="Forçar Normal" onPress={padrao} />  
         <Button title="Forçar Inverter" onPress={padrao} />  
         <Button title="Forçar Normal2" onPress={padrao} />
         <Button title="Informar" onPress={padrao} />  
      </View>
    </View>
  );
}