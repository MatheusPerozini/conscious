import React ,{useState , useEffect , useRef , createRef} from 'react';
import { View , FlatList , TouchableOpacity ,Text , TextInput , StyleSheet , Keyboard, UIManager , findNodeHandle, RefreshControl} from 'react-native';
import Menu from '../menu'
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import { FontAwesome } from '@expo/vector-icons'; 

import styles from './styles'

export default function Dicionario(){
    const [pesquisa , setPesquisa] = useState('');
    const [substancias , setSubstancias] = useState([]);
    const [bug , setBug] = useState(false);

    const navigation = useNavigation();
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const flat = useRef();
    const substanciaRef = useRef([]);
    const Refs = [];

    useEffect(() => {
        api.get('/substancias').then(resp => {setSubstancias(resp.data)});
    } , [substancias]);

/*
    substanciaRef.current = substancias.map((element , i) => substanciaRef.current[i] ?? createRef());
    console.log(substanciaRef)
*/
    Keyboard.addListener('keyboardDidShow' , () => setBug(true))
    Keyboard.addListener('keyboardDidHide' , () => setBug(false))

    const ajustavel = StyleSheet.create({
        altura : {
            bottom : bug ? 330 : 585
        }
    });

    function Teste(){
        const handle = findNodeHandle(flat.current);
        UIManager.measure(handle , (x , y , w , h ,pagex) => {
            console.log(pagex)
        })
    }


    function handleSearch(){
        try {
            console.log(pesquisa);
            substanciaRef.map(e => console.log(e))
            const index = substanciaRef.find(e => e == pesquisa);
            console.log(index);
            const handle = findNodeHandle(substanciaRef[index].current);
            UIManager.measure(handle , (x , y , w , h ,pagex , pagey) => {
                console.log(pagey)
                flat.current.scrollToOffset({offset : pagey , animated : true})
            })
        } catch (error) {
            //checar se a primeira letra a maiuscula
            if(pesquisa.charAt(0) == pesquisa.charAt(0).toUpperCase()){
                flat.current.scrollToItem({item : pesquisa.charAt(0) , animated : true})
            }else{
                flat.current.scrollToItem({item : pesquisa.charAt(0).toUpperCase() , animated : true})
            }
        }
    }
    
    return(
        <View style={styles.container}>
            <TextInput value={pesquisa} onChangeText={e =>{setPesquisa(e);setBug(true)}} onSubmitEditing={() => {handleSearch(); setBug(false)}}
            placeholder=' Nome da substância , composição ...' style={styles.pesquisar} onFocus={() => setBug(true)}></TextInput>
            <FontAwesome name="search" size={24} color="black"  style={{left : 360 , bottom : 33 , zIndex : 1}}/>
            <FlatList data={[1]} keyExtractor={e => String(e)} style={{height : '80%'}} renderItem={() => (
                <View style={styles.alfabeto}>
                {alphabet.map(e => (
                    <TouchableOpacity onPress={() => {
                        flat.current.scrollToItem({item : e , animated : true});
                    }}>
                        <Text style={{fontSize : 15 , marginVertical:7}}>{e}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            )}/>
            <FlatList data={alphabet} ref={flat} keyExtractor={e => String(e)} style={[styles.menuSubstancias, ajustavel.altura]} renderItem={({item}) => (
                <View style={styles.lista}>
                    <View>
                        <Text style={styles.title}>{item}</Text>
                        {substancias.map((i , n) => {
                            let element = JSON.stringify(i.nome);
                            if(element.charAt(1).toLocaleUpperCase() == item){
                                return(
                                    <TouchableOpacity ref={i => Refs.push(i)} onPress={() => navigation.navigate('Substancia' , {id : i.id})}>
                                    <Text style={styles.itens}>{element.slice(1,-1)}</Text>
                                    </TouchableOpacity>
                                );}
                        })}
                    </View>
                </View>
            )}/>
            <Menu />
        </View>
    )
}