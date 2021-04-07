import React , {useState , useEffect} from 'react';
import { View , Image , TouchableOpacity ,Text , TextInput , FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Menu from '../../menu'
import api from '../../services/api';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

import styles from './styles'

export default function DrogasPesquisa(){
    const [drogas , setDrogas] = useState([]);
    const [pesquisa , setPesquisa] = useState('');

    const navigation = useNavigation();

    async function searchhandle(text){
        useEffect(() => {
            const resp = await api.post('/drogaspesquisa' , {pesquisar : text});
            setDrogas(resp.data);
        });
    }

//ATENÇÃO
//ATENÇÃO
//PREGUIÇA FDS KKKKKKKKKKKKKKKKKKKKK
//            onEndReached={carregamento_tela} onEndReachedThreshold={0.2}
//FALTA FAZER O NGC QUE RECARREGA CONFORME CHEGA EMBAIXO NA PAGINA
//ATENÇÃO
//ATENÇÃO
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{left : 8 , top : 37}} onPress={() => navigation.goBack()}><Ionicons name="arrow-back-outline" size={30} color="black" /></TouchableOpacity>
            <TextInput placeholder=' Nome da droga , tipo ...' style={styles.pesquisar}
            value={pesquisa} onChange={e => setPesquisa(e.target.value)}
            onSubmitEditing={() => {searchhandle(pesquisa)}}></TextInput>
            <FontAwesome name="search" size={24} color="black" style={{left : 360 , bottom : 32 , zIndex : 1}} />
            <FlatList data={drogas} 
            keyExtractor={incident => String(incident.id)} 
            style={{height : '77%' , width:'95%' , left : 25 , bottom : 5}}
            renderItem={({item : incident}) => (
                <View style={styles.lista}>
                    <TouchableOpacity style={styles.itens} onPress={() => navigation.navigate('DrogaUnica' , {id : incident.id})}>
                        <Text style={styles.title}>{incident.nome}</Text>
                    </TouchableOpacity>
                </View>
            )}/>
            <Menu />
        </View>
    )
};
/*
SE NÃO FUNCIONAR , TENTA ESSSE AKI KRL AAAA
{drogas.map(e => (
                        <TouchableOpacity style={styles.itens} onPress={() => navigation.navigate('DrogaUnica' , {id : e.id})}>
                            <Text style={styles.title}>{e.nome}</Text>
                        </TouchableOpacity>
                    ))}
*/