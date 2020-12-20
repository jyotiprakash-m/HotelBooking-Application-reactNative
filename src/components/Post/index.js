import React from 'react'
import { View,Text,Image } from 'react-native'
import styles from './styles'

const Post = (props) =>{
    return(
        <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{uri:'https://a0.muscache.com/im/pictures/ba5abed5-b16c-438e-b1df-e00590b99857.jpg'}}
                />

                {/* Bed and bedroom */}
                <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

                {/* type $ Description */}
                <Text style={styles.description}>
                Close proximity to the Airport,Railway Station,Mall,Main highway makes it one of the most convenient location
                </Text>

                {/* Old Price and new price */}
                <Text style={styles.prices}>
                    <Text style={styles.oldPrice}>
                        $38
                    </Text>
                    <Text style={styles.price}>
                        $38
                    </Text>
                    
                    / night

                </Text>
                <Text style={styles.totalPrice}>
                        $230 Total
                    </Text>
                {/* Total price */}
        </View>
    )
}

export default Post;


