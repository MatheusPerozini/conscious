import React , {useState} from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { View , TouchableOpacity ,Text , FlatList , Linking , StyleSheet} from 'react-native';
import Switcher from '../switch'

import Menu from '../menu'
import styles from './styles'

export default function Emergencia(){

    var [aumentar1, setAumentar1] = useState(true);
    var [aumentar2, setAumentar2] = useState(true);
    var [aumentar3, setAumentar3] = useState(true);
    var [aumentar4, setAumentar4] = useState(true);
    
    //num deu pra exportar e n tem nthchild nesse pora então vai ficar grande assim msm
    const ajustavel = StyleSheet.create({
        instructions1 : {
            height : aumentar1 ? 50 : 120,
        },
        instructions2 : {
            height : aumentar2 ? 50 : 120,
        },
        instructions3 : {
            height : aumentar3 ? 50 : 120,
        },
        instructions4 : {
            height : aumentar4 ? 50 : 120,
        },
    })

    return(
        <View style={styles.container}>
            <Text style={styles.title}>  O que fazer quando:</Text>
            <FlatList data={[1]} keyExtractor={incident => String(incident)} style={styles.list}
            renderItem={() => (
            <View>
                <Switcher />
                <TouchableOpacity onPress={() => {setAumentar1(!aumentar1)}} 
                style={[ajustavel.instructions1 , styles.instructions]}>
                <View>
                    <Text> Bad trip </Text>
                    <AntDesign name="caretdown" size={15} color="black" style={styles.verMais} />
                    <Text style={{display : aumentar1 ? 'none' : 'flex'}}></Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setAumentar2(!aumentar2)}} 
            style={[ajustavel.instructions2 , styles.instructions]}>
                <View>
                    <Text> Convulsão </Text>
                    <AntDesign name="caretdown" size={15} color="black" style={styles.verMais} />
                    <Text style={{display : aumentar2 ? 'none' : 'flex'}}></Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setAumentar3(!aumentar3)}} 
            style={[ajustavel.instructions3 , styles.instructions]}>
                <View>
                    <Text > Desmaio </Text> 
                    <AntDesign name="caretdown" size={15} color="black" style={styles.verMais} />
                    <Text style={{display : aumentar3 ? 'none' : 'flex'}}></Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setAumentar4(!aumentar4)}}
            style={[ajustavel.instructions4 , styles.instructions]}>
                <View>
                    <Text> Ansiedade </Text>
                    <AntDesign name="caretdown" size={15} color="black" style={styles.verMais} />
                    <Text style={{display : aumentar4 ? 'none' : 'flex'}}></Text>
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