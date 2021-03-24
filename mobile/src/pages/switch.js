import React , {useState} from 'react';
import { Switch} from 'react-native';

export default function Switcher(){
    const [valor , setValor] = useState(false);
    
    return(
        <Switch onValueChange={() => setValor(!valor)} value={valor} trackColor={{ false: "#767577", true: "#81b0ff" }}/>
    )
}
