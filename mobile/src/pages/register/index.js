import React from 'react';
import { View , Image , TouchableOpacity ,Text , TextInput} from 'react-native';

import styles from './styles'

export default function Register(){
    return(
        <View style={styles.container}>
            <TextInput>Email</TextInput>
            <TextInput>Celular</TextInput>
            <TextInput>Senha</TextInput>
            <TextInput>Confirmar Senha</TextInput>
            <Text>Eu concordo com os termos de usúario e declaro que sou maior de idade</Text>
            <TouchableOpacity>Criar conta</TouchableOpacity>
        </View>
    )
}