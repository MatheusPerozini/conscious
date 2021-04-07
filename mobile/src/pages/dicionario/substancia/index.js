import React , {useState , useEffect} from 'react';
import { View , Image , TouchableOpacity ,Text , FlatList} from 'react-native';
import { useNavigation , useRoute } from '@react-navigation/native';
import Menu from '../../menu'
import api from '../../../services/api'

import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

import styles from './styles'

export default function Substancia(){
    const [a , seta] = useState([]);
    useEffect(() => {
        api.post(`/substanciasinfo/5`).then(resp => seta(resp.data));
    });

    const navigation = useNavigation();
    const route = useRoute();

    //const id = route.params.id;
    const test = 5;
    const resp = api.post(`/substanciasinfo/5`).then(resp => resp.data);

    return(
        <View style={styles.container}>
            <TouchableOpacity style={{left : 13 , top : 20 , backgroundColor : 'white' , width : '8%' , borderRadius : 70 ,zIndex : 1}} onPress={() => navigation.goBack()}><Ionicons name="arrow-back-outline" size={30} color="black" style={{left : 2}}/></TouchableOpacity>
            <FlatList data={[1]} keyExtractor={e => String(e)} style={{height : '89%' , bottom : 30}} renderItem={() => (
                <View>
                    <Image style={{width : '100%' , height : 300,}}/>
                    <Text style={{left : 20}}>{JSON.stringify(resp)} , a</Text>
                    <Text></Text>
                </View>
            )}/>
            <Menu />
        </View>
    )
};

/*
<Text style={styles.title}>{JSON.stringify(resp.data.nome)}</Text>
                    <Text style={styles.title}>Composição : {JSON.stringify(resp.data.composicao)}</Text>
                    <Text style={styles.title}>Efeitos :</Text>
                    <Text style={styles.description}><Feather name="circle" size={12} color="black" />{JSON.stringify(resp.data.efeitos)}</Text>
                    <Text style={styles.title}>Usos :{JSON.stringify(resp.data.usadas)}</Text>
                    <Text style={styles.title}>Curiosidades : {JSON.stringify(resp.data.curiosidades)}</Text>
*/