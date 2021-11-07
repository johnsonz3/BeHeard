import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable, Picker } from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import { xorBy } from 'lodash'

const FormScreen = ({navigation}) => {
    const [selectedDisabilities, setSelectedDisabilities] = useState([]);
    const [selectedSupports, setSelectedSupports] = useState([]);
    const [name, setName] = useState('');

    const DISABILITIES = [
        {
            item: 'Acquired brain injury',
            id: 'Acquired brain injury',
        },
        {
            item: 'ALS/Lou Gehrig’s',
            id: 'ALS/Lou Gehrig’s',
        },
        {
            item: 'Amputation',
            id: 'Amputation',
        },
        {
            item: 'Anxiety disorders',
            id: 'Anxiety disorders',
        },
        {
            item: 'Arthritis',
            id: 'Arthritis',
        },
        {
            item: 'Autism Spectrum Disorders',
            id: 'Autism Spectrum Disorders',
        },
        {
            item: 'Cerebral Palsy',
            id: 'Cerebral Palsy',
        },
        {
            item: 'Chronic Pain',
            id: 'Chronic Pain',
        },
        {
            item: 'Deafness or Hard of Hearing',
            id: 'Deafness or Hard of Hearing',
        },
        {
            item: 'Dementia',
            id: 'Dementia',
        },
        {
            item: 'Epilepsy',
            id: 'Epilepsy',
        },
        {
            item: 'Multiple Sclerosis',
            id: 'Multiple Sclerosis',
        },
        {
            item: 'Parkinson’s',
            id: 'Parkinson’s',
        },
        {
            item: 'Stuttering',
            id: 'Stuttering',
        },
        {
            item: 'Tourrette’s Syndrome',
            id: 'Tourrette’s Syndrome',
        },
        {
            item: 'Visual Impairments',
            id: 'Visual Impairments',
        }]

    const SUPPORTS = [
        {
            item: 'Speak loudly',
            id: 'Speak loudly',
        },
        {
            item: 'Speak slowly',
            id: 'Speak slowly',
        },
        {
            item: 'Speak directly to me and not my interpreter',
            id: 'Speak directly to me and not my interpreter',
        },
        {
            item: 'Put things in my reach',
            id: 'Put things in my reach',
        },
        {
            item: 'Be patient when I speak',
            id: 'Be patient when I speak',
        },
        {
            item: 'Read me the options out loud',
            id: 'Read me the options out loud',
        },
        {
            item: 'Ask how you can help',
            id: 'Ask how you can help',
        }]


    function onDisabilityChange() {
        return (item) => setSelectedDisabilities(xorBy(selectedDisabilities, [item], 'id'))
    }

    function onSupportsChange() {
        return (item) => setSelectedSupports(xorBy(selectedSupports, [item], 'id'))
    }

    return (
        <View style={styles.container}>
            <View style={styles.blockContainer, styles.bottomBorder}>
                <Text style={styles.text} >What is your name?</Text>
                <TextInput
                    onChangeText={setName}
                    value={name}
                />
            </View>

            <View style={styles.blockContainer}>
                <Text style={styles.text} >What disabilities are you experiencing?</Text>
                <SelectBox
                    label=''
                    options={DISABILITIES}
                    selectedValues={selectedDisabilities}
                    onMultiSelect={onDisabilityChange()}
                    onTapClose={onDisabilityChange()}
                    arrowIconColor='white'
                    searchIconColor='white'
                    toggleIconColor='#291b4a'
                    inputFilterStyle={{ color: "white", fontSize: 15 }} // search text
                    optionsLabelStyle={{ color: '#291b4a', fontFamily: 'Avenir' }} // option text
                    multiOptionContainerStyle={{ backgroundColor: '#291b4a' }} // bubble bg color
                    multiOptionsLabelStyle={{ color: 'white' }} // bubble text color
                    multiListEmptyLabelStyle={{ color: '#291b4a' }} // placeholder text color
                    listEmptyLabelStyle={{ color: '#291b4a' }} // "No results found" text
                    selectedItemStyle={{ color: 'orange', backgroundColor: 'red' }}
                    isMulti
                />
            </View>

            <View style={styles.blockContainer}>
                <Text style={styles.text} >What do you find helpful?</Text>
                <SelectBox
                    label=''
                    options={SUPPORTS}
                    selectedValues={selectedSupports}
                    onMultiSelect={onSupportsChange()}
                    onTapClose={onSupportsChange()}
                    arrowIconColor='white'
                    searchIconColor='white'
                    toggleIconColor='#291b4a'
                    inputFilterStyle={{ color: "white", fontSize: 15 }} // search text
                    optionsLabelStyle={{ color: '#291b4a', fontFamily: 'Avenir' }} // option text
                    multiOptionContainerStyle={{ backgroundColor: '#291b4a' }} // bubble bg color
                    multiOptionsLabelStyle={{ color: 'white' }} // bubble text color
                    multiListEmptyLabelStyle={{ color: '#291b4a' }} // placeholder text color
                    listEmptyLabelStyle={{ color: '#291b4a' }} // "No results found" text
                    selectedItemStyle={{ color: 'orange', backgroundColor: 'red' }}
                    isMulti
                />
            </View>

            <View style={styles.button}>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6447a8',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
        paddingLeft: 0,
    },
    blockContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '70%',
    },
    text: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: 'white',
        letterSpacing: 0.25,
    },
    bottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: 'white'

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

function padding(a, b, c, d) {
    return {
        paddingTop: a,
        paddingRight: b ? b : a,
        paddingBottom: c ? c : a,
        paddingLeft: d ? d : (b ? b : a)
    }
}

export default FormScreen;
