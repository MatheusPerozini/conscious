import React ,{useState , useEffect}from 'react';
import { View , Image , TouchableOpacity ,Text , TextInput} from 'react-native';
import api from '../../services/api';

export default function Teste(){
    const [subs , setSubs] = useState([]);
    
    useEffect(()=> {
        api.get('/substancias').then(resp => {setSubs(resp.data)});
    });

    return(
        <View style={{top : 20 , left : 10}}>
            <Text>{subs.length}</Text>
            {subs.map(e => (
            <Text>{JSON.stringify(e)}</Text>
            ))}
        </View>
    )
};