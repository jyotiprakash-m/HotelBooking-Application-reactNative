import React from 'react'
import { View,Text,Image } from 'react-native'
import styles from './styles'

const Post = (props) =>{

    // console.warn(props)
    const post = props.post;
    return(
        <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{uri:post.image}}
                />

                {/* Bed and bedroom */}
                <Text style={styles.bedrooms}>{post.bed} bed {post.bedroom} bedroom</Text>

                {/* type $ Description */}
                <Text style={styles.description}>
                {post.type}. {post.title}
                </Text>

                {/* Old Price and new price */}
                <Text style={styles.prices}>
                    <Text style={styles.oldPrice}>
                        {post.oldPrice} 
                    </Text>
                    <Text style={styles.price}>
                       {" "} {post.newPrice}
                    </Text>
                    
                    / night

                </Text>
                <Text style={styles.totalPrice}>
                        {post.totalPrice} Total
                    </Text>
                {/* Total price */}
        </View>
    )
}

export default Post;


