import * as React from 'react';
import { Button, View } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View>
            <Button title='Informações da Bateria' onPress={() => navigation.navigate('BatteryInfo')} />
            <Button title='Informações do Dispositivo' onPress={() => navigation.navigate('DeviceInfo')} />
            <Button title='Informações da Orientação' onPress={() => navigation.navigate('MyScreenOrientation')} />
        </View>
    )
}