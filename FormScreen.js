import React from 'react';
import { StyleSheet, View } from 'react-native';

const FormScreen = () => {
    const disabilities = ["Acquired brain injury", "ALS/Lou Gehrig’s", "Amputation",
        "Anxiety disorders", "Arthritis", "Autism Spectrum Disorders", "Cerebral Palsy",
        "Chronic Pain", "Deafness or Hard of Hearing", "Dementia", "Epilepsy",
        "Multiple Sclerosis", "Parkinson’s", "Stuttering", "Tourrette’s Syndrome",
        "Visual Impairments"]

    const listItems = disabilities.map((disability) =>
        <option value={disability}>{disability}</option>
    )

    return (
        <View style={styles.container}>
            <form style={{justifyContent: "center", width: "100%", textAlign: "center"}}>
                <label style= {{color: "white", fontSize: "32px"}}>
                What disabilities are you experiencing?
                <select style={{marginLeft: "1rem"}}>
                {listItems}
                </select>
                </label>
                
            </form>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9653C2',
        alignItems: 'left',
        justifyContent: 'center',
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
