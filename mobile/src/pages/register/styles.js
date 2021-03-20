import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container : {
        paddingTop : Constants.statusBarHeight
    },
    inputs : {
        borderColor : 'black',
        borderWidth : 1,
        borderRadius : 5,
        height : 40,
        width : '90%',
        paddingLeft : 10,
        marginBottom : 10,
        left : 17
    },
    check : {
        width : 35,
        height : 35,
        borderRadius : 5,
        borderColor : 'black',
        borderWidth : 1,
        left : 17
    },
    confirm : {
        width : '90%',
        backgroundColor : 'orange',
        alignItems : 'center',
        justifyContent : 'center',
        left : 17,
        height : 50,
        borderRadius : 5,
        bottom : 10,
    }
})