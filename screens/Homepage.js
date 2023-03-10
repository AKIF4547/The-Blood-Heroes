import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Card} from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

function Homepage({navigation}) {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
          justifyContent: 'space-between',
        }}>
        <View style={styles.bannerContainer}>
          <Image
            source={require('../images/banner.jpg')}
            style={styles.banner}
          />
        </View>

        <View>
          <ScrollView style={{height: '75%', marginBottom: 35}}>
            <View style={{marginBottom: 20}}>
              {/* Donate Blood */}
              <TouchableOpacity
                onPress={() => navigation.navigate('FindDriverScreen')}>
                <Card style={styles.cardStyle}>
                  <Card.Cover
                    resizeMode="contain"
                    source={require('../images/download.png')}
                    style={styles.cardCover}
                  />
                  <Card.Content>
                    <Text style={styles.cardText} variant="titleLarge">
                      Donate Blood
                    </Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>

              {/* Reports */}
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Card style={styles.cardStyle}>
                  <Card.Cover
                    resizeMode="cover"
                    source={require('../images/monument.jpg')}
                    style={styles.cardCover}
                  />
                  <Card.Content>
                    <Text style={styles.cardText} variant="titleLarge">
                      Reports
                    </Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>

              {/* Register for a case */}
              <TouchableOpacity
                onPress={() => navigation.navigate('BloodRequestForm')}>
                <Card style={styles.cardStyle}>
                  <Card.Cover
                    resizeMode="cover"
                    source={{uri: 'https://picsum.photos/700'}}
                  />
                  <Card.Content>
                    <Text style={styles.cardText} variant="titleLarge">
                      Register For a Case
                    </Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>

              {/* Diet Analysis */}
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Card style={styles.cardStyle}>
                  <Card.Cover
                    resizeMode="cover"
                    source={{uri: 'https://picsum.photos/700'}}
                  />
                  <Card.Content>
                    <Text style={styles.cardText} variant="titleLarge">
                      Diet Analysis
                    </Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>

              {/* Contact Us */}
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Card style={styles.cardStyle}>
                  <Card.Cover
                    resizeMode="contain"
                    source={{uri: 'https://picsum.photos/700'}}
                  />
                  <Card.Content>
                    <Text style={styles.cardText} variant="titleLarge">
                      Contact Us
                    </Text>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Message')}>
              <View style={styles.button}>
                <Text style={styles.text}>Active Cases</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Homepage;

const styles = StyleSheet.create({
  cardStyle: {
    padding: 20,
    margin: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F4F4F',
    height: 50,
    width: '100%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  cardText: {
    color: 'black',
    // fontWeight: 'bold',
    fontSize: 18,
  },
  cardCover: {
    height: 150,
    width: '100%',
  },
  bannerContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
  banner: {
    resizeMode: 'cover',

    height: 150,
    width: '100%',
  },
});
