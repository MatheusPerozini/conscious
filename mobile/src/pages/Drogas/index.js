import React from 'react';
import { View , Image , TouchableOpacity ,Text , TextInput} from 'react-native';
import Menu from '../menu'

import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

import styles from './styles'

export default function Drogas(){
    return(
        <View >
            <TouchableOpacity style={styles.primeiro}><Text style={{top : 10 , right : 100}}>Salvos </Text>
            <Entypo name="bookmark" size={24} color="black" style={{left : 135 , bottom : 10}}/></TouchableOpacity>
            <FontAwesome name="search" size={24} color="black" style={{left : 325 , top : 32}} />
            <TextInput placeholder='  Nome da droga , tipo ...' style={styles.pesquisar}></TextInput>
            <TouchableOpacity style={styles.itens}><Text style={{right : 80}}>Ecstasys (Balas)</Text></TouchableOpacity>
            <TouchableOpacity style={styles.itens}><Text style={{right : 90}}>LSDs (Doces)</Text></TouchableOpacity>
            <TouchableOpacity style={styles.itens}><Text style={{right : 95}}>Cogumelos</Text></TouchableOpacity>
            <TouchableOpacity style={styles.itens}><Text style={{right : 110}}>Todas</Text></TouchableOpacity>
            <Menu />
        </View>
    )
}