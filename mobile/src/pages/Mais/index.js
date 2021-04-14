import React ,{useEffect , useState} from 'react';
import { View , FlatList , TouchableOpacity ,Text , Image , TextInput , StyleSheet} from 'react-native';
import Menu from '../menu'
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import { Feather } from '@expo/vector-icons'; 
import styles from './styles'
import { split } from 'lodash';

export default function Mais(){
    const [resposta , setResposta] = useState([]);
    const [eventos , setEventos] = useState([]);
    const [respondido , setRespondido] = useState(false);

    //const userID = localStorage.getItem('id');
    const date = new Date();
    //const semanaGrafico = Array.from(Array(7).keys());
    const navigate = useNavigation();
    const userID = 5;

    useEffect(() => {
        api.post('/grafico' , {id : userID}).then(resp => setResposta(resp.data))
    } , [userID])

    useEffect(() => {
        api.get('/neweventos').then(resp => setEventos(resp.data));
    });

    function handleAnswer(){
        //talvez colocar tostring no gettime abaixo
        var data_respota = resposta.find(e => (
            e.dt_resposta.substring(0 , 11) == `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        ))//acho que vai ter que tirar o respondido
        if(data_respota || respondido == true){
            return(
                <View style={styles.pergunta}>
                    <Text style={{alignSelf : 'center' ,marginVertical : 10}}>Você ja respondeu hoje!</Text>
                    <Text style={{alignSelf : 'center'}}>Poderá responder novamente amanhã.</Text>
                </View>
            )
        }else{
            return(
                <View style={styles.pergunta}>
                    <Text style={{alignSelf : 'center'}}>Você usou alguma substancia hoje?</Text>
                    <View style={{ alignItems: 'flex-start',flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => {api.post('/editGrafico',{id : userID , resposta : true}); setRespondido(true)}}
                        style={{width : 60 , height : 40 , backgroundColor : 'green' , marginRight : 17 , left :90,top : 10}}>
                            <Text style={{color : 'white' ,top : 8 , left : 15}}>SIM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {api.post('/editGrafico',{id : userID , resposta : false}); setRespondido(true)}}
                        style={{width : 60 , height : 40 , backgroundColor : 'red' , left : 110 ,top : 10}}>
                            <Text style={{color : 'white',top : 8 , left : 13}}>NÃO</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }

    return(
        <View style={styles.container}>
            <FlatList data={[1]} keyExtractor={e => String(e)} style={{left : 7 , height : '89%'}} renderItem={() => (
            <View>
                <View>
                    <Text style={styles.title}>Social</Text>
                    <View style={{flexWrap: 'wrap', alignItems: 'flex-start',flexDirection:'row' , marginTop : 10}}>
                        {eventos.map(e => (
                            <View style={styles.SocialItens}>
                                <Text>IMAGEM</Text>
                                <Text style={styles.socialTitle}>{e.nome}</Text>
                                <Text style={styles.socialDescription}>{e.descricao}</Text>
                                <Text style={styles.socialLink}>{e.link}</Text>
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity
                    onPress={() => navigate.navigate('Social')}
                    style={{borderColor : 'black' , borderWidth : 2 , width : '90%' , marginTop : 15 , borderRadius : 5 , left : 12 , height : 50 , marginBottom : 10}}>
                        <Text style={{alignSelf : 'center' , justifyContent : 'center' ,top : 10}}> 
                        Visualizar eventos anteriores e mais.
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.title}>Grafico de controle</Text>                    
                    <View style={styles.grafico}>
                        <View style={{flexWrap: 'wrap', alignItems: 'flex-start',flexDirection:'row',bottom : 15}}>
                            {resposta.map(e => (
                                e.respostas ? <View style={{backgroundColor : 'green' , width : '8%' , height : 100, left : 2 , marginRight : 23}}/>
                                : <View style={{backgroundColor : 'green' , width : '8%' , height : 100, left : 2 , marginRight : 23 , display : 'none'}}/>
                            ))}
                        </View>
                        <View style={{ alignItems: 'flex-start',flexDirection:'row'}}>
                            {resposta.map(e => {
                                let data = new Date(e.dt_resposta);
                                return <Text style={{marginRight : 21,right : 2 ,marginBottom : 12, fontSize : 12}}>{`${data.getDate()}/${data.getMonth() + 1}`}</Text>
                            })}
                        </View>
                        <View style={{flexWrap: 'wrap', alignItems: 'flex-start',flexDirection:'row'}}>
                            {resposta.map(e => (
                                !e.respostas ? <View style={{backgroundColor : 'red' , width : '8%' , height : 100 , top : 15 , left : 2 , marginRight : 23}}/>
                                : <View style={{backgroundColor : 'red' , width : '8%' , height : 100 , top : 15 , left : 2 , marginRight : 23 , display : 'none'}}/>
                            ))}
                        </View>
                       </View>
                        {handleAnswer()}
                </View>
                <View>
                    <Text style={styles.title}>Configurações</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{left : 30}}>Excluir conta.</Text>
                </TouchableOpacity>
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