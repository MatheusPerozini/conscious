import React , {useState , useEffect} from 'react';
import { View , Image , TouchableOpacity ,Text , FlatList} from 'react-native';
import { useNavigation , useRoute } from '@react-navigation/native';
import Menu from '../../menu'
import api from '../../../services/api'

import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

import styles from './styles'

export default function Substancia(){
    const [resp , setResp] = useState([]);

    const navigation = useNavigation();
    const route = useRoute();
    //const id = route.params.id;
    const id = 5;

    useEffect(() => {
        api.post(`/substanciasinfo/${id}`).then(resp => setResp(resp.data[0]));
    });
    
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{left : 13 , top : 20 , backgroundColor : 'white' , width : '8%' , borderRadius : 70 ,zIndex : 1}} onPress={() => navigation.goBack()}><Ionicons name="arrow-back-outline" size={30} color="black" style={{left : 2}}/></TouchableOpacity>
            <FlatList data={[1]} keyExtractor={e => String(e)} style={{height : '89%' , bottom : 30}} renderItem={() => (
                <View>
                    <Image style={{width : '100%' , height : 300,}}/>
                    <Text style={styles.title}>OLHA O ID DENTRO DO ARQUIVO E TIRA DO COMENTARIO</Text>
                    <Text style={styles.title}>{JSON.stringify(resp.nome).slice(1,-1)}</Text>
                    <Text style={styles.title}>Composição :</Text>
                    <Text style={styles.description}>{JSON.stringify(resp.composicao).slice(1,-1)}</Text>
                    <Text style={styles.title}>Efeitos : </Text>
                    <Text style={styles.description}><Feather name="circle" size={12} color="black" /> {JSON.stringify(resp.efeitos).slice(1,-1)}</Text>
                    <Text style={styles.title}>Usos :</Text>
                    <Text style={styles.description}>{JSON.stringify(resp.usadas).slice(1,-1)}</Text>
                    <Text style={styles.title}>Curiosidades :</Text>
                    <Text style={styles.description}>{JSON.stringify(resp.curiosidades).slice(1,-1)}</Text>
                    <Text></Text>
                    <Text></Text>
                </View>
            )}/>
            <Menu />
        </View>
    )
};