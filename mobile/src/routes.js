import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import Emergencia from '../src/pages/emergencia'
import Logon from './pages/Login'
import Mais from './pages/Mais'
import Register from './pages/register'
import Dicionario from './pages/dicionario'
import Drogas from './pages/Drogas'

const appStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer> 
            <appStack.Navigator screenOptions={{headerShown : false}}>
                <appStack.Screen component={Emergencia} />
                <appStack.Screen component={Logon} />
                <appStack.Screen component={Mais} />
                <appStack.Screen component={Register} />
                <appStack.Screen component={Dicionario} />
                <appStack.Screen component={Drogas} />
            </appStack.Navigator>
        </NavigationContainer>
    )
}