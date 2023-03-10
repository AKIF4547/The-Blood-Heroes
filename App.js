import 'react-native-gesture-handler';

import * as React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from './screens/Homepage';
import SignIn from './screens/SignIn';

import {createDrawerNavigator} from '@react-navigation/drawer';
import SignUp from './screens/SignUp';
import BloodRequestForm from './screens/BloodRequestForm';
import DonateMoney from './screens/DonateMoney';
import ChatUs from './screens/ChatUs';
import CustomDrawer from './screens/CustomDrawer';
import Message from './screens/Message';
import RedeemPoints from './screens/RedeemPoints';
import FindDriverScreen from './screens/FindDriverScreen';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={({navigation, route}) => ({
          headerShown: route.name == 'SignIn' ? false : true,
          headerRight:
            route.name !== 'Homepage'
              ? () => (
                  <TouchableOpacity
                    style={{marginRight: 15}}
                    onPress={() => navigation.goBack()}>
                    <Text style={{color: 'lightgrey'}}>Back</Text>
                  </TouchableOpacity>
                )
              : undefined,
        })}>
        <Drawer.Screen name="Homepage" component={Homepage} />
        <Drawer.Screen name="DonateMoney" component={DonateMoney} />
        <Drawer.Screen name="ChatUs" component={ChatUs} />
        <Drawer.Screen name="Message" component={Message} />
        <Drawer.Screen name="BloodRequestForm" component={BloodRequestForm} />
        <Drawer.Screen name="RedeemPoints" component={RedeemPoints} />
        <Drawer.Screen name="FindDriverScreen" component={FindDriverScreen} />
        <Drawer.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
