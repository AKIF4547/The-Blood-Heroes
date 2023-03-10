import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

const CustomDrawer = props => {
  const navigation = useNavigation();

  const handleSwitchAsPress = () => {
    Alert.alert(
      'Switch as',
      'Please select an option',
      [
        {
          text: 'Blood Donor',
          onPress: () => console.log('Blood Donor selected'),
        },
        {
          text: 'Volunteer Rider',
          onPress: () => console.log('Volunteer Rider selected'),
        },
        {text: 'Attendant', onPress: () => console.log('Attendant selected')},
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Blood Donor</Text>
      </View>

      <DrawerContentScrollView {...props}>
        <View style={{marginTop: 30}}>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => navigation.navigate('Homepage')}>
            <Text style={styles.drawerItemText}>Homepage</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => navigation.navigate('DonateMoney')}>
            <Text style={styles.drawerItemText}>DonateMoney</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => navigation.navigate('ChatUs')}>
            <Text style={styles.drawerItemText}>Compliants / Suggestions</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerItem}
            onPress={() => navigation.navigate('RedeemPoints')}>
            <Text style={styles.drawerItemText}>Redeem Points</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSwitchAsPress}>
          <Text style={styles.buttonText}>Switch mode:</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#c0392b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  drawerItemText: {
    fontSize: 20,
    color: 'black',
  },
  logoutButton: {
    backgroundColor: '#c0392b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default CustomDrawer;
