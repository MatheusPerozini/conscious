import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container : {
        paddingTop : Constants.statusBarHeight - 10,
    },
    pesquisar : {
        left : 45,
        borderColor : 'black',
        borderWidth : 1,
        height : 40,
        backgroundColor : 'white',
        fontSize : 15,
        width : '85%',
        borderRadius : 10,
        paddingLeft : 10
    },
    itens : {
        backgroundColor : 'green',
        width : '45%',
        marginRight : 10 ,
        marginBottom : 10,
        height : 170,
        borderRadius : 5,
    },
    lista :  {
        alignItems: 'flex-start',
        flexWrap : 'wrap',
        flexDirection:'row',
    },
    title : {
        top : 140,
        left : 10,
        fontWeight : '900'
    }
})