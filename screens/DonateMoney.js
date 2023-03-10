import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const DonateMoney = () => {
  const handleOrganizationDonation = () => {
    // handle donation for organization
  };

  const handleAppDonation = () => {
    // handle donation for app
  };

  const handleBloodCampsDonation = () => {
    // handle donation for blood camps
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.heading}>Choose a Donation Option:</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleOrganizationDonation}>
        <Text style={styles.buttonText}>Donate for Organization</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAppDonation}>
        <Text style={styles.buttonText}>Donate for App</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleBloodCampsDonation}>
        <Text style={styles.buttonText}>Donate for Blood Camps</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  },
});

export default DonateMoney;
