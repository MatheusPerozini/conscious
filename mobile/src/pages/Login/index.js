import React , {useState} from 'react';
import { View , Image , TouchableOpacity ,Text , TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api'

import styles from './styles'

export default function Logon(){
    const navigation = useNavigation();

    const [email , setEmail] = useState('');
    const [senha , setSenha] = useState('');

    async function LoginHandle(e){
        e.preventDefault();

        try {
            await api.post();
            navigation.navigate('Drogas');
        } catch (error) {
        alert('Tente novamente')        
        }
    }

    return(
        <View style={styles.container}>
            <Image/>
            <Text style={{top : 320 , left : 25}}>O jeito conciente de utilizar drogas recreativas</Text>
            <TextInput placeholder='Email' style={styles.inputs}></TextInput>
            <TextInput placeholder='Senha' style={styles.inputs}></TextInput>
            <TouchableOpacity style={styles.login} onPress={() => LoginHandle()}><Text>Entrar</Text></TouchableOpacity>
            <Text style={{top : 440 , left : 150}}>ou entrar com</Text>
            <View style={{alignItems: 'flex-start',flexDirection:'row',}}>
                <TouchableOpacity style={styles.methods}><Text>Google</Text></TouchableOpacity>
                <TouchableOpacity style={styles.methods}><Text>Facebook</Text></TouchableOpacity>
            </View>
            <TouchableOpacity style={{top : 465 , left : 70}} onPress={() => navigation.navigate('Register')}>
                <Text>Não possui uma conta ? <Text style={{fontWeight : 'bold'}}>Crie uma</Text></Text>
            </TouchableOpacity>
        </View>
    )
}