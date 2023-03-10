import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

function FindDriverScreen() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <View style={styles.container}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Pickup Location"
            value={pickupLocation}
            onChangeText={setPickupLocation}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Destination"
            value={destination}
            onChangeText={setDestination}
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>FIND A DRIVER</Text>
          <Image
            source={require('../images/carIcon.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    height: 200,
    width: '100%',
    border: '1px',
    borderColor: 'red',
  },
  bottomContainer: {
    backgroundColor: 'pink',
    justifyContent: 'center',
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#f5f5f5',
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: '#3498db',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  buttonImage: {
    width: 30,
    height: 30,
  },
});

export default FindDriverScreen;
