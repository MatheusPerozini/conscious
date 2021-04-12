import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container : {
        paddingTop : Constants.statusBarHeight + 10
    },
    lista : {
        alignItems: 'flex-start',
        flexWrap : 'wrap',
        flexDirection:'row',
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
        backgroundColor : 'white',
        left : 10
    },
    itens : {
        borderWidth : 1,
        borderColor : 'black',
        width : 125,
        borderRadius : 10,
        height : 170,
        marginLeft : 5,
        marginBottom : 7,
    },
    title : {
        fontWeight : 'bold',
        marginLeft : 5,
        top : 37
    },
    description : {
        fontSize : 12,
        marginLeft : 5,
        width : 110,
        height : 60,
        top : 35
    },
    link : {
        fontSize : 10,
        alignSelf : 'flex-end',
        marginRight : 5,
        top : 38
    }
})