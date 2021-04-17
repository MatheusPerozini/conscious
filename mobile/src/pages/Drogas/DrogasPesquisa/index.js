import React , {useState , useEffect} from 'react';
import { View , Image , TouchableOpacity ,Text , TextInput , FlatList} from 'react-native';
import { useNavigation  ,useRoute} from '@react-navigation/native';
import Menu from '../../menu'
import api from '../../../services/api';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

import styles from './styles'

export default function DrogasPesquisa(){
    const route = useRoute();
    const navigation = useNavigation();
    
    const pesquisa_anterior = route.params.pesquisa;
    
    const [drogas , setDrogas] = useState([]);
    const [pesquisar , setPesquisar] = useState(pesquisa_anterior);

    useEffect(() => {
        api.post('/drogaspesquisa' , {pesquisar}).then(resp => setDrogas(resp.data))
    }, [pesquisar]);

    async function searchHandle(pesquisar){
        useEffect(() => {
            api.post('/drogaspesquisa' , {pesquisar}).then(resp => setEventos(resp.data))
        })
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={{left : 8 , top : 37}} onPress={() => navigation.goBack()}><Ionicons name="arrow-back-outline" size={30} color="black" /></TouchableOpacity>
            <TextInput placeholder=' Nome da droga , tipo ...' style={styles.pesquisar}
            value={pesquisar} onChangeText={e => setPesquisar(e)}
            onSubmitEditing={() => searchHandle(pesquisar)}></TextInput>
            <FontAwesome name="search" size={24} color="black" style={{left : 360 , bottom : 32 , zIndex : 1}} />
            <FlatList data={[1]} 
            keyExtractor={incident => String(incident)} 
            style={{height : '77%' , width:'95%' , left : 25 , bottom : 5}}
            renderItem={() => (
                <View style={styles.lista}>
                    {drogas.length >= 1 ? drogas.map(e => (
                        <TouchableOpacity style={styles.itens} onPress={() => navigation.navigate('DrogaUnica' , {id : e.id})}>
                        <Text style={styles.title}>{e.nome}</Text>
                        </TouchableOpacity>
                    )) : 
                    <View>
                        <Text style={{alignSelf : 'center' , fontSize : 20 , left : 80}}>Nada encontrado.</Text>
                    </View>}
                </View>
            )}/>
            <Menu />
        </View>
    )
};