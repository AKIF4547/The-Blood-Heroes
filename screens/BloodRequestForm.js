import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';

export default function BloodRequestForm({navigation}) {
  const [details, setDetails] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [hospital, setHospital] = useState([]);
  const [name, setName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleFormSubmit = () => {
    // do something with the form data, like sending it to a server
    // and then show the alert message
    Alert.alert(
      'Success',
      'Your case has been registered successfully',
      [
        {
          text: 'OK',
          onPress: () => {
            // navigate to the homepage when OK is pressed
            navigation.navigate('Homepage');
          },
        },
      ],
      {cancelable: false},
    );
  };
  const isFormValid = () => {
    return !!(name && age && bloodGroup && contactNumber && city);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Blood Request Form</Text>
      <TextInput
        style={[styles.input, {height: 100}]}
        placeholder="Give the details about the case"
        onChangeText={setDetails}
        value={details}
        multiline={true}
        numberOfLines={4}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Patient's name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Patient's age"
        onChangeText={setAge}
        value={age}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Patient's blood group"
        onChangeText={setBloodGroup}
        value={bloodGroup}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your contact number"
        onChangeText={setContactNumber}
        value={contactNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Hospital Name"
        onChangeText={setHospital}
        value={hospital}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your City Name"
        onChangeText={setCity}
        value={city}
      />
      <TouchableOpacity
        style={[styles.button, isFormValid() ? null : styles.disabledButton]}
        onPress={handleFormSubmit}
        disabled={!isFormValid()}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2F4F4F',
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#2F4F4F',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
