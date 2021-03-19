import React from 'react';
import { View , Image , TouchableOpacity ,Text , TextInput , FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Menu from '../../menu'

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

import styles from './styles'

export default function DrogasPesquisa(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <TouchableOpacity style={{left : 8 , top : 37}} onPress={() => navigation.goBack()}><Ionicons name="arrow-back-outline" size={30} color="black" /></TouchableOpacity>
            <TextInput placeholder=' Nome da droga , tipo ...' style={styles.pesquisar}></TextInput>
            <FontAwesome name="search" size={24} color="black" style={{left : 360 , bottom : 32 , zIndex : 1}} />
            <FlatList data={[1]} keyExtractor={e => String(e)} style={{height : '77%' , width:'95%' , left : 25 , bottom : 5}} renderItem={() => (
                <View style={styles.lista}>
                    <TouchableOpacity style={styles.itens} onPress={() => navigation.navigate('DrogaUnica')}>
                        <Text style={styles.title}>Maconha kk de id 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itens} onPress={() => navigation.navigate('DrogaUnica')}>
                        <Text style={styles.title}>Cocaina de id 2 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itens} onPress={() => navigation.navigate('DrogaUnica')}>
                        <Text style={styles.title}>League of legends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itens} onPress={() => navigation.navigate('DrogaUnica')}>
                        <Text style={styles.title}>League of legends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itens} onPress={() => navigation.navigate('DrogaUnica')}>
                        <Text style={styles.title}>League of legends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itens} onPress={() => navigation.navigate('DrogaUnica')}>
                        <Text style={styles.title}>League of legends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itens} onPress={() => navigation.navigate('DrogaUnica')}>
                        <Text style={styles.title}>League of legends</Text>
                    </TouchableOpacity>

                </View>
            )}/>
            <Menu />
        </View>
    )
};