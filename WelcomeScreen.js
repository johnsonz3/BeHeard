import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Button
                title='Get Started'
                onPress={() =>
                    navigation.navigate('Form')
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
});

export default WelcomeScreen;