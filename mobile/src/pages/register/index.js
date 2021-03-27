import React ,{useState} from 'react';
import { View , Image , TouchableOpacity ,Text , TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api'

import styles from './styles'

export default function Register(){
    const navigate = useNavigation();

    var [Email , setEamil] = useState('');
    var [Senha , setSenha] = useState('');

    async function RegisterHandle(e){
        e.preventDefault();
        try {
            await api.post();
            navigate.navigate('Login')
        } catch (error) {
            alert('Tente novamente');
        }
    }

    return(
        <View style={styles.container}>
            <TextInput placeholder='Email' style={styles.inputs} onChange={}></TextInput>
            <TextInput placeholder='Senha' style={styles.inputs}></TextInput>
            <TextInput placeholder='Confirmar Senha' style={styles.inputs}></TextInput>
            <TouchableOpacity style={styles.check}/>
            <Text style={{left : 60 ,bottom : 38 , width : 325}}>Ao criar uma conta você concorda com os termos de usúario.</Text>
            <TouchableOpacity onPress={() => RegisterHandle()} style={styles.confirm}>
                <Text >Criar conta</Text>
            </TouchableOpacity>
        </View>
    )
}