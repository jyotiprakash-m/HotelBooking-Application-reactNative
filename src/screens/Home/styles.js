import { StyleSheet,Dimensions } from 'react-native'

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
        marginTop:25,
        marginLeft:25,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'

    },
    buttonText:{
        fontSize:16,
        fontWeight:'bold'
    },
    searchButton:{
        position:'absolute',
        top:20,
        height:60,
        width:Dimensions.get('screen').width - 20,
        zIndex:2,
        borderRadius:30,
        marginHorizontal:10,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        elevation: (Platform.OS === 'android') ? 50 : 0

    }
    

});

export default styles;