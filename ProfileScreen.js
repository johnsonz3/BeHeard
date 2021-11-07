import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

const ProfileScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, my name is</Text>
            <Text style={styles.personal_text}>Joel</Text>

            <Text style={styles.text}>I experience</Text>
            <Text style={styles.personal_text}>Autism Spectrum Disorders</Text>
           
            <Text style={styles.text}>To support me, please</Text>
            <Text style={styles.personal_text}>Avoid making loud sounds</Text>
            <Text style={styles.personal_text}>Ask me before you help</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6447a8',
        color: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        position: 'relative',
        top: -10,
        fontFamily: 'Avenir',
        color: 'white',
        letterSpacing: 0.25,
        fontSize: 24,
        paddingBottom: 50,
    },
    personal_text: {
        position: 'relative',
        top: -50,
        fontFamily: 'Avenir',
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 0.25,
        fontSize: 24,
        paddingBottom: 20,
    },
   
    buttonText: {
        fontFamily: 'Avenir',
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#6447a8',
    },
});

export default ProfileScreen;
