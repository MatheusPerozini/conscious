import React from 'react';
import { View , Image , TouchableOpacity ,Text , TextInput} from 'react-native';
import Menu from '../menu'

import { Feather } from '@expo/vector-icons'; 
import styles from './styles'

export default function Mais(){
    return(
        <View style={styles.container}>
            <View >
                <Text>Social</Text>
            </View>
            <View>
                <Text>Laboratórios</Text>
            </View>
            <View>
                <Text>Grafico de controle</Text>
            </View>
            <View>
                <Text>Configurações</Text>
            </View>
            <TouchableOpacity>
                <Feather name="log-out" size={24} color="black" />
                <Text>Deslogar</Text>
            </TouchableOpacity>
            <Menu />
        </View>
    )
}