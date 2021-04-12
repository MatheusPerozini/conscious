import React ,{useEffect , useState} from 'react';
import { View , FlatList , TouchableOpacity ,Text , Image , TextInput , StyleSheet} from 'react-native';
import Menu from '../menu'
//import api from '../../services/api';

import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import styles from './styles'

export default function Mais(){
    const [resposta , setResposta] = useState(true);
    //const userID = localStorage.getItem('id');
    const semanaGrafico = Array.from(Array(7).keys());

//se selecionar semana , faz um map loop em que ele ira gerar 14 graficos , um de cada lado , e ira
//dar display dependendo das repostas
//se selecionar mes fazer aparecer 60 graficos , um de cada lado tbm
    return(
        <View style={styles.container}>
            <FlatList data={[1]} keyExtractor={e => String(e)} style={{left : 7 , height : '89%'}} renderItem={() => (
            <View>
                <View>
                    <Text style={styles.title}>Social</Text>
                    {//aki ficava o código de busca
                    }
                    <View style={{flexWrap: 'wrap', alignItems: 'flex-start',flexDirection:'row'}}>
                        <View style={styles.SocialItens}>
                            <Text>IMAGEM</Text>
                            <Text>Biolocast</Text>
                            <Text>Clique para o ouvir</Text>
                        </View>
                        <View style={styles.SocialItens}>
                            <Text>IMAGEM</Text>
                            <Text>AN</Text>
                            <Text>Ir para o site</Text>
                        </View>
                        <View style={styles.SocialItens}>
                            <Text>IMAGEM</Text>
                            <Text>Test</Text>
                            <Text>Ir para o site</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                    style={{borderColor : 'black' , borderWidth : 2 , width : '90%' , marginTop : 10 , borderRadius : 5 , left : 12 , height : 50}}>
                    <Text style={{alignSelf : 'center' , justifyContent : 'center' ,top : 10}}> Visualizar eventos anteriores e mais.</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.title}>Grafico de controle</Text>                    
                    <View style={styles.grafico}>
                        <View style={{flexWrap: 'wrap', alignItems: 'flex-start',flexDirection:'row',bottom : 15}}>
                            {semanaGrafico.map(e => (
                                <View style={{backgroundColor : 'green' , width : '8%' , height : 100, left : 2 , marginRight : 23}}/>
                            ))}
                        </View>
                        <View style={{ alignItems: 'flex-start',flexDirection:'row'}}>
                            {semanaGrafico.map(e => (
                                <Text style={{marginRight : 15 , marginBottom : 12}}>Dia {e}</Text>
                            ))}
                        </View>
                        <View style={{flexWrap: 'wrap', alignItems: 'flex-start',flexDirection:'row'}}>
                            {semanaGrafico.map(e => (
                                <View style={{backgroundColor : 'red' , width : '8%' , height : 100 , top : 15 , left : 2 , marginRight : 23}}/>
                            ))}
                        </View>
                       </View>
                        {resposta ? 
                        <View style={styles.pergunta}>
                            <Text style={{alignSelf : 'center' ,marginVertical : 10}}>Você ja respondeu hoje!</Text>
                            <Text style={{alignSelf : 'center'}}>Poderá responder novamente amanhã.</Text>
                        </View>
                         : 
                        <View style={styles.pergunta}>
                            <Text style={{alignSelf : 'center'}}>Você usou alguma substancia hoje?</Text>
                            <View style={{ alignItems: 'flex-start',flexDirection:'row'}}>
                            <TouchableOpacity style={{width : 60 , height : 40 , backgroundColor : 'green' , marginRight : 17 , left :90,top : 10}}>
                                <Text style={{color : 'white' ,top : 8 , left : 15}}>SIM</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width : 60 , height : 40 , backgroundColor : 'red' , left : 110 ,top : 10}}>
                                <Text style={{color : 'white',top : 8 , left : 13}}>NÃO</Text>
                            </TouchableOpacity>
                            </View>
                        </View>}
                </View>
                <View>
                    <Text style={styles.title}>Configurações</Text>
                </View>
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
/*
<TextInput placeholder=' Presencial , data ....' style={styles.pesquisar} />
                    <FontAwesome name="search" size={24} color="black"  style={{left : 357 , bottom : 33 , zIndex : 1}}/>
*/