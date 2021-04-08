import React from 'react';
import { View , FlatList , TouchableOpacity ,Text , Image , TextInput} from 'react-native';
import Menu from '../menu'
import Switcher from '../switch';
//import api from '../../services/api';

import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import styles from './styles'

export default function Mais(){
    //const userID = localStorage.getItem('id');

    return(
        <View style={styles.container}>
            <FlatList data={[1]} keyExtractor={e => String(e)} style={{left : 7}} renderItem={() => (
            <View>
                <View>
                    <Text style={styles.title}>Social</Text>
                    <TextInput placeholder=' Presencial , data ....' style={styles.pesquisar} />
                    <FontAwesome name="search" size={24} color="black"  style={{left : 357 , bottom : 33 , zIndex : 1}}/>
                </View>
                <View>
                    <Text style={styles.title}>Grafico de controle</Text>
                </View>
                <View>
                    <Text style={styles.title}>Configurações</Text>
                </View>
                <Switcher />
                <TouchableOpacity>
                    <Feather name="log-out" size={24} color="black" />
                    <Text style={{left : 30 , bottom : 25}}>Deslogar</Text>
                </TouchableOpacity>
            </View>
            )}/>
            <Menu />
        </View>
    )
}