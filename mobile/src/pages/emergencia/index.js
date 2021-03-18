import React , {useState} from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { View , TouchableOpacity ,Text , FlatList , Linking} from 'react-native';

import Menu from '../menu'
import styles from './styles'

var aumentarGlobal = true;

export default function Emergencia(){
    var [aumentar, setAumentar] = useState(false);
    //talvez tenha que colocar na função que esta executando o setAumentar

    return(
        <View style={styles.container}>
            <Text style={styles.title}>  O que fazer quando:</Text>
            <FlatList data={[1]} keyExtractor={incident => String(incident)} style={styles.list}
            renderItem={() => (
            <View>
                <TouchableOpacity onPress={() => {setAumentar(!aumentar)}} 
                style={styles.instructions}>
                <View>
                    <Text> Bad trip </Text>
                    <AntDesign name="caretdown" size={15} color="black" style={styles.verMais} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.instructions}>
                <View>
                    <Text> Convulsão </Text>
                    <AntDesign name="caretdown" size={15} color="black" style={styles.verMais} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.instructions}>
                <View>
                    <Text > Desmaio </Text> 
                    <AntDesign name="caretdown" size={15} color="black" style={styles.verMais} />
                    
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.instructions}>
                <View>
                    <Text> Ansiedade </Text>
                    <AntDesign name="caretdown" size={15} color="black" style={styles.verMais} />
                </View>
            </TouchableOpacity>
            </View>
            )}/>
            <TouchableOpacity onPress={() => {Linking.openURL(`tel:${192}`)}}
            style={styles.ligarEmergencia}><Text>LIGAR PARA EMERGENCIA</Text></TouchableOpacity>
            <Menu />
        </View>
    )
}

export {aumentarGlobal}