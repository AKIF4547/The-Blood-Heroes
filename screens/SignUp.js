import React, {useState, useEffect} from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './SignIn';

export default function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  return (
    <View style={{padding: 10, marginTop: 50}}>
      <View>
        <Text style={{fontWeight: 'bold', color: '#2F4F4F'}}>Username</Text>
        <TextInput
          style={{
            height: 40,
            marginTop: 12,
            marginBottom: 12,
            borderWidth: 1,
            padding: 10,
          }}
          placeholder="Enter Username"
          onChangeText={setEmail}></TextInput>
      </View>

      <View>
        <Text style={{fontWeight: 'bold', color: '#2F4F4F'}}>Password</Text>
        <TextInput
          style={{
            height: 40,
            marginTop: 12,
            marginBottom: 12,
            borderWidth: 1,
            padding: 10,
          }}
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={setPassword}></TextInput>
        <Text style={{fontWeight: 'bold', color: '#2F4F4F'}}>
          Confirm Password
        </Text>
        <TextInput
          style={{
            height: 40,
            marginTop: 12,
            marginBottom: 12,
            borderWidth: 1,
            padding: 10,
          }}
          placeholder="Enter Password Again"
          secureTextEntry={true}
          onChangeText={setConfirmpassword}></TextInput>
      </View>

      <View
        style={{
          paddingTop: 50,
        }}>
        <View
          style={{
            paddingDown: 50,
          }}>
          <Button
            color="#ff4500"
            title="Create Account"
            onPress={() => navigation.navigate(SignIn)}
          />
        </View>
      </View>
    </View>
  );
}
