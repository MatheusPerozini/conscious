import React ,{useState , useEffect} from 'react';
import { View , FlatList , TouchableOpacity ,Text , TextInput} from 'react-native';
import Menu from '../menu'
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import { FontAwesome } from '@expo/vector-icons'; 

import styles from './styles'

export default function Dicionario(){
    const [substancias , setSubstancias] = useState([]);

    const navigation = useNavigation();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    useEffect(() => {
        api.get('/substancias').then(resp => {setSubstancias(resp.data)});
    });

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
                        {substancias.map(i => {
                            let element = JSON.stringify(i.nome);
                            if(element.charAt(1).toLocaleUpperCase() == e){
                                return(
                                    <TouchableOpacity onPress={() => navigation.navigate('Substancia' , {id : i.id})}>
                                    <Text style={styles.itens}>{element.slice(1,-1)}</Text>
                                    </TouchableOpacity>
                                );}
                        })}
                    </View>
                    ))}
                </View>
            )}/>
            <Menu />
        </View>
    )
}