import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <form>
        <label>
          What disabilities are you experiencing?:
        <select>
          <option value="" disabled selected></option>
          <option value="Acquired brain injury">Acquired brain injury</option>
          <option value="ALS/Lou Gehrig’s">ALS/Lou Gehrig’s</option>
          <option value="Amputation">Amputation</option>
          <option value="Anxiety disorders">Anxiety disorders</option>
          <option value="Arthritis">Arthritis</option>
          <option value="Autism Spectrum Disorders">Autism Spectrum Disorders</option>
          <option value="Cerebral Palsy">Cerebral Palsy</option>
          <option value="Chronic Pain">Chronic Pain</option>
          <option value="Deafness or Hard of Hearing">CDeafness or Hard of Hearing</option>
          <option value="Dementia">Dementia</option>
          <option value="Epilepsy">Epilepsy</option>
          <option value="Multiple Sclerosis">Multiple Sclerosis</option>
          <option value="Parkinson’s">Parkinson’s</option>
          <option value="Stuttering">Stuttering</option>
          <option value="Tourrette’s Syndrome">Tourrette’s Syndrome</option>
          <option value="Visual Impairments">Visual Impairments</option>
        </select>
        </label>
      </form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
