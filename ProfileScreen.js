import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import ProfileCard from './ProfileCard.js'

const ProfileScreen = () => {

    return (
        <View style={styles.container}>
            <ProfileCard heading='Hello, my name is' text='Joel' />
            <ProfileCard heading='I experience' text='Autism Spectrum Disorders' />
            <ProfileCard heading='To support me, please' text='- Avoid making loud sounds' text2='- Ask me before you help' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6447a8',
        color: 'white',
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
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
