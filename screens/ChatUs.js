import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ChatUs = () => {
  const [complaint, setComplaint] = React.useState('');

  const handleSend = () => {
    // Handle sending the complaint
    setComplaint('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Make a Complaint or Chat with Us</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your message here"
        onChangeText={setComplaint}
        value={complaint}
      />
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    height: 100,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2F4F4F',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ChatUs;
