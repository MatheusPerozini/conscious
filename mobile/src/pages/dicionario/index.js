import React from 'react';
import { View , Image , TouchableOpacity ,Text , TextInput} from 'react-native';
import Menu from '../menu'

import styles from './styles'

export default function Dicionario(){
    return(
        <View style={styles.container}>
            <TextInput>Nome da substância , composição ...</TextInput>
            <Menu />
        </View>
    )
}