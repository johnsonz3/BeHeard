import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

const WelcomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>App Name</Text>
            <Text style={styles.text}>Picture here</Text>
            <View style={styles.button}>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('Form')}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </Pressable>
            </View>

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
        fontFamily: 'Avenir',
        color: 'white',
        letterSpacing: 0.25,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: 'white',
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

export default WelcomeScreen;
