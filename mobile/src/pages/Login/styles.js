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
        left : 17,
        top : 425
    },
    login : {
        width : '90%',
        backgroundColor : 'orange',
        alignItems : 'center',
        justifyContent : 'center',
        left : 17,
        height : 50,
        borderRadius : 5,
        top : 435
    },
    methods : {
        top : 450,
        width : '45%',
        backgroundColor : 'red',
        borderColor : 'black',
        borderWidth : 1,
        left : 10,
        marginRight : 10,
        alignItems : 'center',
        justifyContent : 'center',
        height : 55
    }
})