import React , {useState , useEffect} from 'react';
import { View , TouchableOpacity ,Text , TextInput , FlatList ,Switch} from 'react-native';
import Menu from '../menu'
import { useNavigation } from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';

import styles from './styles'

export default function Drogas(){
    const [pesquisa , setPesquisa] = useState('');

    const navigate = useNavigation();

    return(
        <View >
            <TouchableOpacity style={styles.primeiro}
            onPress={() => navigate.navigate('DrogasPesquisa' , {pesquisa : 'salvos'})}><Text style={{top : 15 , right : 100}}>Salvos </Text>
            <Entypo name="bookmark" size={30} color="black" style={{left : 135 , bottom : 10}} /></TouchableOpacity>
            <FontAwesome name="search" size={24} color="black" style={{left : 325 , top : 24 , zIndex : 1}} />
            <TextInput placeholder=' Nome da droga , tipo ...' style={styles.pesquisar} value={pesquisa}
            onChangeText={e => setPesquisa(e)}
            onSubmitEditing={() => navigate.navigate('DrogasPesquisa' , {pesquisa : pesquisa})}></TextInput>
            <FlatList data={[1]} keyExtractor={incident => String(incident)} style={{height : '67%'}} renderItem={() => (
                <View>
                    <TouchableOpacity style={styles.itens}
                    onPress={() => navigate.navigate('DrogasPesquisa' , {pesquisa : 'Ecstasys'})}><Text style={{right : 80}}>Ecstasys (Balas)</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.itens}
                    onPress={() => navigate.navigate('DrogasPesquisa' , {pesquisa : 'Ecstasys'})}><Text style={{right : 90}}>LSDs (Doces)</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.itens}
                    onPress={() => navigate.navigate('DrogasPesquisa' , {pesquisa : 'Ecstasys'})}><Text style={{right : 95}}>Cogumelos</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.itens}
                    onPress={() => navigate.navigate('DrogasPesquisa' , {pesquisa : 'Ecstasys'})}><Text style={{right : 110}}>Todas</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.itens}
                    onPress={() => navigate.navigate('DrogasPesquisa' , {pesquisa : 'Ecstasys'})}><Text style={{right : 110}}>sex</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.itens}
                    onPress={() => navigate.navigate('DrogasPesquisa' , {pesquisa : 'Ecstasys'})}><Text style={{right : 110}}>lol</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.itens}
                    onPress={() => navigate.navigate('DrogasPesquisa' , {pesquisa : 'Ecstasys'})}><Text style={{right : 110}}>test</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.itens}
                    onPress={() => navigate.navigate('DrogasPesquisa' , {pesquisa : 'Ecstasys'})}><Text style={{right : 80}}>aaaa</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.itens}
                    onPress={() => navigate.navigate('DrogasPesquisa' , {pesquisa : 'Ecstasys'})}><Text style={{right : 80}}>aaaa</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.itens}
                    onPress={() => navigate.navigate('DrogasPesquisa' , {pesquisa : 'Ecstasys'})}><Text style={{right : 80}}>aaaa</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.itens}
                    onPress={() => navigate.navigate('DrogasPesquisa' , {pesquisa : 'Ecstasys'})}><Text style={{right : 80}}>aaaa</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.itens}
                    onPress={() => navigate.navigate('DrogasPesquisa' , {pesquisa : 'Ecstasys'})}><Text style={{right : 80}}>aaaa</Text></TouchableOpacity>
                </View>
            )}/>
            <Menu />
        </View>
    )
}