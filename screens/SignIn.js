// import React, {useState} from 'react';
// // import AsyncStorage from '@react-native-async-storage/async-storage';

// import {
//   Button,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';

// export default function SignIn({navigation}) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={{padding: 10, marginTop: 50}}>
//       <View>
//         <Text style={{fontWeight: 'bold'}}>Username</Text>
//         <TextInput
//           style={{
//             height: 40,
//             marginTop: 12,
//             marginBottom: 12,
//             borderWidth: 1,
//             padding: 10,
//           }}
//           placeholder="Enter your Username"
//           onChangeText={setEmail}></TextInput>
//       </View>

//       <View>
//         <Text style={{fontWeight: 'bold'}}>Password</Text>
//         <TextInput
//           style={{
//             height: 40,
//             marginTop: 12,
//             marginBottom: 12,
//             borderWidth: 1,
//             padding: 10,
//           }}
//           placeholder="Enter your Password"
//           onChangeText={setPassword}
//           secureTextEntry={true}></TextInput>
//       </View>

//       <View
//         style={{
//           paddingTop: 50,
//         }}>
//         <View
//           style={{
//             paddingDown: 50,
//           }}>
//           <Button
//             color="#ff4500"
//             title="Sign In"
//             onPress={() => navigation.navigate('Homepage')}
//           />
//         </View>
//         <TouchableOpacity
//           style={{padding: 5, justifyContent: 'center', alignItems: 'center'}}
//           onPress={() => {
//             navigation.navigate('SignUp');
//           }}>
//           <Text style={{marginBottom: 10}}>Don't have an account?</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../images/bloodDonationLogo.jpg')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Homepage')}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signUpLink}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpLinkText}>Don't have an account?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  logo: {
    resizeMode: 'contain',
    height: 150,
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 30,
    alignSelf: 'center',
    color: '#2F4F4F',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2F4F4F',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ff4500',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpLink: {
    alignSelf: 'center',
  },
  signUpLinkText: {
    fontSize: 16,
    color: '#007aff',
    textDecorationLine: 'underline',
  },
});
