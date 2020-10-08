import React from 'react';
import Cart from '../screens/Cart';
import NavHeader from '../components/NavHeader';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function FoodStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {backgroundColor: '#e6195e'},
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitle: (props) => (
            <NavHeader navigation={navigation} {...props} />
          ),
          // headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
