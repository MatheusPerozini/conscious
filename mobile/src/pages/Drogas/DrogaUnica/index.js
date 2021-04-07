import React from 'react';
import { View , Image , TouchableOpacity ,Text , FlatList} from 'react-native';
import { useNavigation , useRoute } from '@react-navigation/native';
import Menu from '../../menu'
//import api from '../../services/api';

import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import test from '../../../assets/drogas/test.jpg'

import styles from './styles'

export default function DrogaUnica(){
    const navigation = useNavigation();
    //const id = useRoute.params

    //const resp = api.post(``);

    //sempre manter o ultime Text vazio , pois server como um espaçamento
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{left : 13 , top : 20 , backgroundColor : 'white' , width : '8%' , borderRadius : 70 ,zIndex : 1}} onPress={() => navigation.goBack()}><Ionicons name="arrow-back-outline" size={30} color="black" style={{left : 2}}/></TouchableOpacity>
            <FlatList data={[1]} keyExtractor={e => String(e)} style={{height : '89%' , bottom : 30}} renderItem={() => (
                <View>
                    <Image source={test} style={{width : '100%' , height : 300,}}/>
                    <Text style={styles.title}>cocaina</Text>
                    <Text style={styles.description}>
                    &nbsp;&nbsp;&nbsp;&nbsp;A cocaina faz mal vc n deveria usar isso noia lixo aaaaaaaaaaaa....Mas mó bom n vou mentirkkk
                    </Text>
                    <Text style={styles.title}>Composição :</Text>
                    <Text style={styles.title2}>Tipo de droga : Psicoativa</Text>
                    <Text style={styles.title}>Efeitos :</Text>
                    <Text style={styles.description}><Feather name="circle" size={12} color="black" />  Deixa de pau duro</Text>
                    <Text style={styles.title}>Consequências :</Text>
                    <Text style={styles.title}>Riscos e cuidados :</Text>
                    <Text>Duração de </Text>
                    <Text style={styles.title}>Curiosidades :</Text>
                    <Text></Text>
                </View>
            )}/>
            <Menu />
        </View>
    )
};