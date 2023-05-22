import { View, Text, Button } from 'react-native';
import * as Battery from 'expo-battery';

import Header from '../components/Header'
import Footer from '../components/Footer'

import { useEffect, useState } from 'react';

export default function BatteryInfo() {

  const [nivelBateria, setNivelBateria] = useState();
  const [color, setColor] = useState('green')

  async function atualizarTudo() {
    bateria();
  }

  function verificaCor(){
    if( nivelBateria > 80 ){
      setColor('green');
    } else if( nivelBateria > 50 ){
      setColor('orange');
    } else if( nivelBateria > 30 ){
      setColor('yellow');
    } else {
      setColor('red');
    };
  };

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setNivelBateria(Math.round(nivel * 100));
  }

  useEffect(() => {
    bateria()
    verificaCor()
  }, [nivelBateria])

  return (
    <View>
      <Header
        title="Nível Bateria:"
      />
      <Text style={{
        color: color,             
        fontSize: 40,
        alignSelf: 'center',
        marginTop: 5,
        padding: 30,
      }}>
        {nivelBateria}%
      </Text>


      <View style={{
        paddingHorizontal: 25,
        padding: 20,
      }}>
        <Button
          title="Atualizar"
          onPress={atualizarTudo}>
        </Button>
      </View>
      <Footer />

    </View>
  )
};