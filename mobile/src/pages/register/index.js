import React ,{useState} from 'react';
import { View , Image , TouchableOpacity ,Text , TextInput , Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api'

import styles from './styles'

export default function Register(){
    const navigate = useNavigation();

    const [Email , setEmail] = useState('');
    const [Senha , setSenha] = useState('');
//            navigate.navigate('Login')
    async function RegisterHandle(e){
        var data = {
            Email,
            Senha
        }
        
        try {
            await api.post('/register' , data);
            Alert.alert(
                "Parabéns",
                "conta criada com sucesso"
            )
            navigate.navigate('Login');
        } catch (error) {
            Alert.alert(
                "OPS , ocorreu algum problema",
                "Tente novamente"
            );
        }
    }

    return(
        <View style={styles.container}>
            <TextInput placeholder='Email' style={styles.inputs}
            onChangeText={e => setEmail(e)} value={Email}></TextInput>
            <TextInput placeholder='Senha' style={styles.inputs}
            onChangeText={e => setSenha(e)} value={Senha}></TextInput>
            <TextInput placeholder='Confirmar Senha' style={styles.inputs}></TextInput>
            <Text>{Email}</Text>
            <Text>{Senha}</Text>
            <TouchableOpacity style={styles.check}/>
            <Text style={{left : 60 ,bottom : 38 , width : 325}}>Ao criar uma conta você concorda com os termos de usúario.</Text>
            <TouchableOpacity onPress={() => RegisterHandle()} style={styles.confirm}>
                <Text >Criar conta</Text>
            </TouchableOpacity>
        </View>
    )
}