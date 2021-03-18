import React from 'react';
import { View , Image , TouchableOpacity ,Text , TextInput} from 'react-native';

import styles from './styles'

export default function Logon(){
    return(
        <View style={styles.container}>
            <Image/>
            <Text>O jeito conciente de utilizar drogas recreativas</Text>
            <TextInput>Email</TextInput>
            <TextInput>Senha</TextInput>
            <TouchableOpacity>Entrar</TouchableOpacity>
            <Text>ou entrar com</Text>
            <TouchableOpacity>Google</TouchableOpacity>
            <TouchableOpacity>Facebook</TouchableOpacity>
            <Text>Não possui uma conta ? Crie uma</Text>
            <Text>Fazer link , Criar uma conta</Text>
        </View>
    )
}