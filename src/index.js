import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

// Screens and views
import ProfileScreen from './screens/Profile';
import HomeScreen from './screens/Home';
import LoansScreenStack from './screens/LoansStack'

// import { Main } from './navigation/Main';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <Main /> */}
        <Tab.Navigator >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen options={{headerShown: false}} name="Loans" component={LoansScreenStack} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
