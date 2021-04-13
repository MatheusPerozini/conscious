import React ,{useState ,useEffect} from 'react';
import { View , FlatList , TouchableOpacity ,Text , Image , TextInput , StyleSheet} from 'react-native';
import Menu from '../../menu'
import api from '../../../services/api';

import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

export default function Social(){
    const [pesquisa , setPesquisa] = useState('');
    const [eventos , setEventos] = useState([]);

    useEffect(() => {
        api.post('/eventos' , {pesquisa}).then(resp => setEventos(resp.data));
    });

    async function searchHandle(pesquisa){
        useEffect(() => {
            api.post('/eventos' , {pesquisa}).then(resp => setEventos(resp.data))
        })
    }

    return(
        <View style={styles.container}>
            <TextInput placeholder=' Local , data ....' style={styles.pesquisar} value={pesquisa} onChangeText={e => setPesquisa(e)}
            onSubmitEditing={() => searchHandle(pesquisa)}/>
            <FontAwesome name="search" size={24} color="black"  style={{left : 362 , bottom : 33 , zIndex : 1}}/>
            <FlatList data={[1]} keyExtractor={e => String(e)} style={{width : '98%' , left : 5 , height : '80%' , bottom : 15}} renderItem={() => (
                <View style={styles.lista}>
                    {eventos.map(e => (
                        <View style={styles.itens}>
                            <Text>IMAGEM</Text>
                            <Text style={styles.title}>{e.nome}</Text>
                            <Text style={styles.description}>{e.descricao}</Text>
                            <Text style={styles.link}>{e.link}</Text>
                        </View>
                    ))}
                </View>
            )}/>
  
            <Menu />
        </View>
    )
}