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
        paddingLeft : 10
    }
})