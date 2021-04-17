import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container : {
        paddingTop : Constants.statusBarHeight + 25
    },
    pesquisar : {
        left : 18,
        borderColor : 'black',
        borderWidth : 1,
        height : 40,
        fontSize : 15,
        width : '90%',
        borderRadius : 10,
        paddingLeft : 10,
        backgroundColor : 'white'
    },
    alfabeto : {
        left : 387,
        bottom : 5,
    },
    lista : {
        left : 2,
        width : '100%'
    },
    title : {
        fontSize : 30,
        fontWeight : '500',
        borderColor : 'transparent',
        borderBottomColor : 'black',
        borderWidth : 1,

    },
    menuSubstancias : {
        width : '88%' ,
        height : '78%' ,
        left : 7,
    },
    itens : {
        marginVertical : 5,
        fontSize : 17,
        left : 10
    },
})