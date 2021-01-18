import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

    container: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: "space-between",
        padding: 10,
    },

    leftContainer: {
        flexDirection: 'row',
    },

    midContainer: {
        justifyContent: 'space-around',
    },
    username: {

        fontWeight: 'bold',
        fontSize: 16,
    },

    status: {
        fontSize: 16,
        color: 'grey'
    },

    avatar: {
        height: 60,
        width: 60,
        // flexDirection: 'row',
        margin: 10,
        borderRadius: 60,


    }

});

export default style;