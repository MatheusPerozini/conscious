import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container : {
        paddingTop : Constants.statusBarHeight + 10
    },
    title : {
        fontSize : 35,
        fontWeight : '500'
    },
    pesquisar :{
        borderColor : 'black',
        borderWidth : 1,
        height : 40,
        fontSize : 15,
        width : '95%',
        borderRadius : 10,
        marginTop : 10,
        paddingLeft : 10,
        backgroundColor : 'white'
    },
    grafico : {
        width : 370,
        height : 250,
        left : 17,
        top : 17
    },
    options : {
        borderColor : 'black',
        borderWidth : 2,
        width : 370,
        left : 10,
        paddingTop : 5,
        paddingBottom : 8
    },
    itens : {
        left : 260,
        bottom : 40,
        borderColor : 'black',
        borderWidth : 2,
        width : 120,
        paddingTop : 5,
        paddingBottom : 5,
        paddingLeft : 5,
        backgroundColor : 'white'
    },
    pergunta : {
        borderColor : 'black',
        borderWidth : 2,
        width : '85%',
        top : 10,
        left : 17,
        height : 90,
        marginBottom:15,
        marginTop : 7,
        borderRadius : 5
    },
    SocialItens : {
        borderWidth : 1,
        borderColor : 'black',
        marginRight : 10,
        width : 125,
        borderRadius : 10,
        height : 170
    },
    socialTitle : {
        fontWeight : 'bold',
        marginLeft : 5,
        top : 37
    },
    socialDescription : {
        fontSize : 12,
        marginLeft : 5,
        width : 110,
        height : 60,
        top : 35
    },
    socialLink : {
        fontSize : 10,
        alignSelf : 'flex-end',
        marginRight : 5,
        top : 38
    }
})