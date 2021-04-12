import React from 'react';
import { View , FlatList , TouchableOpacity ,Text , Image , TextInput , StyleSheet} from 'react-native';
import Menu from '../../menu'

import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

export default function Social(){
    return(
        <View style={styles.container}>
            <TextInput placeholder=' Local , data ....' style={styles.pesquisar} />
            <FontAwesome name="search" size={24} color="black"  style={{left : 362 , bottom : 33 , zIndex : 1}}/>
            <FlatList data={[1]} keyExtractor={e => String(e)} style={{width : '98%' , left : 5}} renderItem={() => (
                <View style={styles.lista}>
                    <View style={styles.itens}>
                        <Text>IMAGEM</Text>
                        <Text style={styles.title}>Biolocast</Text>
                        <Text style={styles.description}>descricao</Text>
                        <Text style={styles.link}>Clique para o ouvir</Text>
                    </View>
                    <View style={styles.itens}>
                        <Text>IMAGEM</Text>
                        <Text style={styles.title}>Biolocast</Text>
                        <Text style={styles.description}>descricao</Text>
                        <Text style={styles.link}>Clique para o ouvir</Text>
                    </View>
                    <View style={styles.itens}>
                        <Text>IMAGEM</Text>
                        <Text style={styles.title}>Biolocast</Text>
                        <Text style={styles.description}>descricao</Text>
                        <Text style={styles.link}>Clique para o ouvir</Text>
                    </View>
                    <View style={styles.itens}>
                        <Text>IMAGEM</Text>
                        <Text style={styles.title}>Biolocast</Text>
                        <Text style={styles.description}>descricao</Text>
                        <Text style={styles.link}>Clique para o ouvir</Text>
                    </View>
                    <View style={styles.itens}>
                        <Text>IMAGEM</Text>
                        <Text style={styles.title}>Biolocast</Text>
                        <Text style={styles.description}>descricao</Text>
                        <Text style={styles.link}>Clique para o ouvir</Text>
                    </View>
                    <View style={styles.itens}>
                        <Text>IMAGEM</Text>
                        <Text style={styles.title}>Biolocast</Text>
                        <Text style={styles.description}>descricao</Text>
                        <Text style={styles.link}>Clique para o ouvir</Text>
                    </View>

                </View>
            )}/>
  
            <Menu />
        </View>
    )
}