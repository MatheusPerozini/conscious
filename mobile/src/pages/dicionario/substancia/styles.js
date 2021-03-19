import Constants from 'expo-constants';
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container : {
        paddingTop : Constants.statusBarHeight
    },
    title : {
        fontWeight : 'bold',
        fontSize : 22,
        marginTop : 20,
        marginLeft: 10
    },
    description : {
        marginTop : 10,
        left : 10,
        width : '94%',
    },
    title2 : {
        fontWeight : '900',
        fontSize : 17,
        marginTop : 20,
        marginLeft: 10
    }
})