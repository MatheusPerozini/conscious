import React from 'react';
import { View , Image , TouchableOpacity ,Text , TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Menu from '../../menu'

import styles from './styles'

export default function DrogasPesquisa(){
    return(
        <View style={styles.container}>

            <Menu />
        </View>
    )
};