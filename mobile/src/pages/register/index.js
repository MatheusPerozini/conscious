import React from 'react';
import { View , Image , TouchableOpacity ,Text , TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

export default function Register(){
    const navigate = useNavigation();
    return(
        <View style={styles.container}>
            <TextInput placeholder='Email' style={styles.inputs}></TextInput>
            <TextInput placeholder='Celular' style={styles.inputs}></TextInput>
            <TextInput placeholder='Senha' style={styles.inputs}></TextInput>
            <TextInput placeholder='Confirmar Senha' style={styles.inputs}></TextInput>
            <TouchableOpacity style={styles.check}/>
            <Text style={{left : 60 ,bottom : 38 , width : 325}}>Ao criar uma conta você concorda com os termos de usúario.</Text>
            <TouchableOpacity onPress={() => navigate.navigate('Login')} style={styles.confirm}>
                <Text >Criar conta</Text>
            </TouchableOpacity>
        </View>
    )
}