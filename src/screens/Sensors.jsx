import { View, Text, StyleSheet, Button } from "react-native";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Gyroscope, Magnetometer } from "expo-sensors";
import { useEffect, useState } from "react";

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

export default function Sensors() {
    const [ giroscopio, setGiroscopio ] = useState({});
    const [ magneto, setMagneto ] = useState({});
    const [ cor, setCor ] = useState("#fff");
    const [ infoD, setInfoD ] = useState("");

    useEffect(() => {
        Gyroscope.addListener(giroscopioListner);
        Magnetometer.addListener(magnetoListner);
    }, []);

    const giroscopioListner = (data) => {
        setGiroscopio(data);
    }

    const magnetoListner = (data) => {
        setMagneto(data);
    }

    useEffect(() => {
      if (magneto.x <= (-5)) {
        setCor("#adfcff");
        setInfoD("Horizontal");
      }else if (magneto.x >= (5)) {
        setCor("#fff4ad");
        setInfoD("Horizontal");
      }else if (magneto.y <= (-5.875)) {
        setCor("#d3adff");
        setInfoD("Vertical");
      }else if (magneto.y >= (5.875)) {
        setCor("#ffadb4");
        setInfoD("Vertical");
      }else if (giroscopio.z >= (-36)) {
        setCor("#adffad");
        setInfoD("Inclinado");
      }
      else{
        setCor("#fff");
        setInfoD("Normal");
      }
    }, [giroscopio, magneto]);
  return (
    <View style={[styles.container, {backgroundColor: cor}]}>
      <Header title="Sensors" />
    <View style={styles.content}>
        <Text style={styles.sensor}>
            Giroscópio: {'\n'}
            x: {giroscopio.x} {'\n'}
            y: {giroscopio.y} {'\n'}
            z: {giroscopio.z} {'\n'}
        </Text>
        <Text style={styles.sensor}>
            Magneto: {'\n'}
            x: {magneto.x} {'\n'}
            y: {magneto.y} {'\n'}
            z: {magneto.z} {'\n'}
        </Text>
        <Text>
          Orientação de tela: {infoD}
        </Text>
    </View>
      <Footer />
    </View>
  );
}