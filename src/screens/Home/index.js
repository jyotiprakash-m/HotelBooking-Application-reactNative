import React from 'react'
import { View,Text,ImageBackground,Pressablessa, Pressable } from 'react-native'

import styles from './styles'

const HomeScreen =(props) => {
    return(
        <View>
            <Pressable 
            style={styles.button}
            onPress={()=> console.warn("Explore button clicked")}>
                <Text style={styles.buttonText}>W</Text>
            </Pressable>
            

            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
               
                <Text style={styles.title} >Go Near</Text>
                

                <Pressable 
                style={styles.button}
                onPress={()=> console.warn("Explore button clicked")}>
                    <Text style={styles.buttonText}>Explore nearby stays</Text>
                </Pressable>
            </ImageBackground>
            
        </View>
    )
}

export default HomeScreen;