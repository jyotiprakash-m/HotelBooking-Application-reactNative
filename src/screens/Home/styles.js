import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:500,
        resizeMode:'cover',
        justifyContent:'center'
    },
    title:{
        fontSize:100,
        fontWeight:'bold',
        color:'white',
        width:'70%',
        marginLeft:25
    },
    button:{
        backgroundColor:'#fff',
        width:200,
        height:30,
        marginLeft:25,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'

    },
    buttonText:{
        fontSize:16,
        fontWeight:'bold'
    }

});

export default styles;