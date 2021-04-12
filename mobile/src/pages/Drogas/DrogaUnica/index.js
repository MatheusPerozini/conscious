import React , {useEffect , useState} from 'react';
import { View , Image , TouchableOpacity ,Text , FlatList , StyleSheet} from 'react-native';
import { useNavigation , useRoute } from '@react-navigation/native';
import Menu from '../../menu'
import api from '../../../services/api';

import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
//aqui vai ter o test que vai rodas entre os arquivos com base no id que tiver no route
import test from '../../../assets/drogas/test.jpg'

import styles from './styles'

export default function DrogaUnica(){
    const [resp , setResp] = useState([]);
    const [style , setStyle] = useState(false);

    const navigation = useNavigation();
    const userID = localStorage.getItem('id');
    const id = useRoute.params.id

    useEffect(() => {
        api.post(`/drogas/${id}`).then(resp => setResp(resp.data[0]));
    });

    const ajustavel = StyleSheet.create({
        first : {
            zIndex : style ? 1 : -1
        },
        second : {
            zIndex : style ? -1 : 1
        }
    });

    async function HandleSalvar(){
        if(style == false){
            await api.post(`/salvar/${id}` , {id : userID});
        }else{
            await api.post(`/desalvar/${id}` , {id : userID});
        }
        setStyle(!style);
    }
    //criar o botão salvar née
    //sempre manter o ultime Text vazio , pois server como um espaçamento
    //bota o slice que as vezes vai e as vezes não
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{left : 13 , top : 20 , backgroundColor : 'white' , width : '8%' , borderRadius : 70 ,zIndex : 1}} 
            onPress={() => navigation.goBack()}><Ionicons name="arrow-back-outline" size={30} color="black" style={{left : 2}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => HandleSalvar}
            style={{left : 25 , top : 20 , backgroundColor : 'white' , width : '8%' , borderRadius : 70 ,zIndex : 1}}>
            <FontAwesome name="bookmark-o" size={30} color="black"  style={ajustavel.first} />
            <FontAwesome name="bookmark" size={30} color="black" style={ajustavel.second} /></TouchableOpacity>
            <FlatList data={[1]} keyExtractor={e => String(e)} style={{height : '89%' , bottom : 30}} renderItem={() => (
                <View>
                    <Image source={test} style={{width : '100%' , height : 300,}}/>
                    <Text style={styles.title}>OLHA O ID DENTRO DO ARQUIVO E TIRA DO COMENTARIO</Text>
                    <Text style={styles.title}>{JSON.stringify(resp.nome)}</Text>
                    <Text style={styles.description}>
                    &nbsp;&nbsp;&nbsp;&nbsp;{JSON.stringify(resp.descricao)}
                    </Text>
                    <Text style={styles.title}>Composição :</Text>
                    <Text style={styles.description}>{JSON.stringify(resp.substancias_presentes)}</Text>
                    <Text style={styles.title2}>Tipo de droga : {JSON.stringify(resp.tipo)}</Text>
                    <Text style={styles.title}>Consequências :</Text>
                    <Text style={styles.description}><Feather name="circle" size={12} color="black" /> {JSON.stringify(resp.consequencias)}</Text>
                    <Text style={styles.title}>Riscos e cuidados :</Text>
                    <Text style={styles.description}>{JSON.stringify(resp.riscos)}</Text>
                    <Text>Duração de {JSON.stringify(resp.duracao)}</Text>
                    <Text style={styles.title}>Curiosidades :</Text>
                    <Text style={styles.description}>{JSON.stringify(resp.curiosidades)}</Text>
                    <Text></Text>
                </View>
            )}/>
            <Menu />
        </View>
    )
};