import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import Header from '../components/Header'
import Footer from '../components/Footer'
import * as ScreenOrientation from 'expo-screen-orientation'

export default function MyScreenOrientations() {

  
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

  const [cor, setCor] = useState("#000000");
  const [infoD, setInfoD] = useState("");

  // useEffect(() => {
  //   async function getOrientation() {
  //     const orientation = await ScreenOrientation.getOrientationAsync();
  //     setInfoD(orientation);
  //   }
  //   getOrientation();
  // }, []);

  useEffect(() => {
    // Get the initial orientation when the component mounts
    informar();
  }, []);

  async function padrao() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.DEFAULT);
    setCor("#e80000");
  }

  async function right() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
    setCor("#46e800");
  }

  async function left() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    setCor("#46e800");
  }

  async function inverter() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_DOWN);
    setCor("#e80000");
  }

    async function info() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP);
    setCor("#e80000");
  }

  async function informar() {
    const orientation = await ScreenOrientation.getOrientationAsync();
    setInfoD(orientation);
  }


  return (
    <View style={[styles.container, { backgroundColor: cor }]}>
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
         <Button title="Forçar Inverter" onPress={inverter} />  
         <Button title="Forçar Normal2" onPress={padrao} />
         <Button title="Informar" onPress={info} />
      </View>
    </View>
  );
}