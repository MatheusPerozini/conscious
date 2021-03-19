import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({

    container : {
        paddingTop : Constants.statusBarHeight + 5,
    },
    title :{
        fontSize : 30,
        color : '#13131a',
        fontWeight : '500',
        marginBottom : 16,
    },
    ligarEmergencia : {
        backgroundColor : '#FF0601',
        zIndex : 2,
        flex : 1,
        color : 'black',
        //se alterar o texto , alterar também o paddingHorinzontal
        paddingHorizontal : 100,
        paddingVertical : 40,
        bottom:'auto',
        justifyContent : 'center'
    },
    verMais : {
        left : 330,
        bottom : 18,
    },
    list : {
        height : 518,
    },
    instructions : {
        marginVertical : 2,
        width : '94%',
        left : 12,
        paddingVertical : 8,
        backgroundColor : 'white',
        borderRadius : 10,
        paddingHorizontal : 10,
        borderColor : 'red',
        borderStyle : 'solid',
        borderWidth : 3,
    },
})
