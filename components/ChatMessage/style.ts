import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import style from '../ChatListItem/style'

const styles = StyleSheet.create({

    container: {
        padding: 10,
    },

    messageBox: {
        borderRadius: 5,
        padding: 10,
    },
    nameHeader: {
        fontWeight: 'bold',
        color: Colors.light.tint,
        marginBottom: 5,
    },
    message: {

    },
    time: {
        alignSelf: 'flex-end',
        color: 'grey'
    }


})

export default styles