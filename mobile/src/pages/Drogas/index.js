import React , {useState , useEffect} from 'react';
import { View , TouchableOpacity ,Text , TextInput , FlatList ,Switch} from 'react-native';
import Menu from '../menu'
import Switcher from '../switch'
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';

import styles from './styles'

export default function Drogas(){
    const navigate = useNavigation();

    return(
        <View >
            <TouchableOpacity style={styles.primeiro}><Text style={{top : 15 , right : 100}}>Salvos </Text>
            <Entypo name="bookmark" size={30} color="black" style={{left : 135 , bottom : 10}} /></TouchableOpacity>
            <FontAwesome name="search" size={24} color="black" style={{left : 325 , top : 24 , zIndex : 1}} />
            <TextInput placeholder=' Nome da droga , tipo ...' style={styles.pesquisar} onSubmitEditing={() => navigate.navigate('DrogasPesquisa')}></TextInput>
            <FlatList data={[1]} keyExtractor={incident => String(incident)} style={{height : '68%'}} renderItem={() => (
                <View>
                    <Switcher />
                    <TouchableOpacity style={styles.itens}><Text style={{right : 80}}>aaaa</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.itens}><Text style={{right : 80}}>aaaa</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.itens}><Text style={{right : 80}}>aaaa</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.itens}><Text style={{right : 80}}>aaaa</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.itens}><Text style={{right : 80}}>aaaa</Text></TouchableOpacity>
                    
                </View>
            )}/>
            <Menu />
        </View>
    )
}