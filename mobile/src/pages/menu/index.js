import React from 'react';
import { View , Image , TouchableOpacity ,Text , TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import drugIcon from './icons8-tablets-32.png';

import styles from './styles'

export default function Menu(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {navigation.navigate('Drogas')}} style={styles.navegacao}>
                <Image source={drugIcon} style={{left : 35 , top : 12}}/>
                <Text style={{top : 18 , left : 20}}>Drogas</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('Dicionario')}} style={styles.navegacao}>
                <AntDesign name="book" size={24} color="black" style={{left : 40 , top : 15}}/>
                <Text style={{top : 26 , left : 10}}>Dicionário</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('Emergencia')}} style={styles.ajuda}>
                <MaterialCommunityIcons name="alarm-light-outline" size={25} color="black" style={{left : 40 , top : 15}}/>
                <Text style={{top : 26 , left : 28}}>Ajuda</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('Mais')}} style={styles.navegacao}>
                <Feather name="plus" size={25} color="black" style={{left : 40 , top : 15}}/>
                <Text style={{top : 26 , left : 32}}>Mais</Text>
                </TouchableOpacity>
        </View>
    )
}