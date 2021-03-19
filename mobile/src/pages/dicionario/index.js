import React from 'react';
import { View , FlatList , TouchableOpacity ,Text , TextInput} from 'react-native';
import Menu from '../menu'
import { useNavigation } from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons'; 

import styles from './styles'

export default function Dicionario(){
    const navigation = useNavigation();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return(
        <View style={styles.container}>
            <TextInput placeholder=' Nome da substância , composição ...' style={styles.pesquisar}></TextInput>
            <FontAwesome name="search" size={24} color="black"  style={{left : 360 , bottom : 33 , zIndex : 1}}/>
            <FlatList data={[1]} keyExtractor={e => String(e)} style={{height : '80%'}} renderItem={() => (
                <View style={styles.alfabeto}>
                {alphabet.map(e => (
                    <TouchableOpacity><Text style={{fontSize : 15 , marginVertical:7}}>{e}</Text></TouchableOpacity>
                ))}
            </View>
            )}/>
            <FlatList data={[1]} keyExtractor={e => String(e)} style={styles.menuSubstancias} renderItem={() => (
                <View style={styles.lista}>
                    {alphabet.map(e => (
                        <View>
                        <Text style={styles.title}>{e}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Substancia')}>
                            <Text style={styles.itens}>Canabidiol (C21H30O2)</Text>
                        </TouchableOpacity>
                    </View>
                    ))}
                </View>
            )}/>
            <Menu />
        </View>
    )
}