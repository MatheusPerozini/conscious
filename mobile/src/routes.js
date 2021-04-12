import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Emergencia from '../src/pages/emergencia'
import Logon from './pages/Login'
import Mais from './pages/Mais'
import Register from './pages/register'
import Dicionario from './pages/dicionario'
import Drogas from './pages/Drogas'
import DrogasPesquisa from './pages/Drogas/DrogasPesquisa'
import DrogaUnica from './pages/Drogas/DrogaUnica'
import Substancia from './pages/dicionario/substancia'
import Social from './pages/Mais/social'

const appStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>  
            <appStack.Navigator screenOptions={{headerShown : false}}>
                <appStack.Screen component={Mais} name='Mais' options={{animationEnabled: false,}}/>
                <appStack.Screen component={Logon} name='Login' options={{animationEnabled: false,}}/>
                <appStack.Screen component={Drogas} name='Drogas' options={{animationEnabled: false,}}/>
                <appStack.Screen component={Register} name='Register' options={{animationEnabled: false,}}/>
                <appStack.Screen component={DrogaUnica} name='DrogaUnica' options={{animationEnabled: false,}}/>
                <appStack.Screen component={Substancia} name='Substancia' options={{animationEnabled: false,}}/>
                <appStack.Screen component={Dicionario} name='Dicionario' options={{animationEnabled: false,}}/>
                <appStack.Screen component={Emergencia} name='Emergencia' options={{animationEnabled: false,}}/>
                <appStack.Screen component={DrogasPesquisa} name='DrogasPesquisa' options={{animationEnabled: false,}}/>
                <appStack.Screen component={Social} name='Social' options={{animationEnabled: false,}}/>
            </appStack.Navigator>
        </NavigationContainer>
    )
}