import React ,{useState} from 'react';
import { View , Image , TouchableOpacity ,Text , TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api'

import styles from './styles'

export default function Register(){
    const navigate = useNavigation();

    var [Email , setEmail] = useState('');
    var [Senha , setSenha] = useState('');

    async function RegisterHandle(e){
        e.preventDefault();

        const data = {
            Email,
            Senha
        }
        
        try {
            await api.post('/register' , data);
            navigate.navigate('Login')
        } catch (error) {
            alert('Tente novamente');
        }
    }

    return(
        <View style={styles.container}>
            <TextInput placeholder='Email' style={styles.inputs}
            onChange={e => setEmail(e.target.value)} value={Email}></TextInput>
            <TextInput placeholder='Senha' style={styles.inputs}
            onChange={e => setSenha(e.target.value)} value={Senha}></TextInput>
            <TextInput placeholder='Confirmar Senha' style={styles.inputs}></TextInput>
            <TouchableOpacity style={styles.check}/>
            <Text style={{left : 60 ,bottom : 38 , width : 325}}>Ao criar uma conta você concorda com os termos de usúario.</Text>
            <TouchableOpacity onPress={() => RegisterHandle()} style={styles.confirm}>
                <Text >Criar conta</Text>
            </TouchableOpacity>
        </View>
    )
}