import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import FavoritesContextProvider from './store/favorites-context';

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <FavoritesContextProvider>
      <NavigationContainer>
        <Tab.Navigator
          // shifting={true}
          activeColor="#F24806"
          screenOptions={{
            tabBarColor: 'greeb',
          }}
          barStyle={{marginBottom: -10, backgroundColor: 'white'}}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'QUOTE',
              tabBarIcon: ({color, size}) => {
                return <Entypo name="quote" size={18} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="favorite"
            component={FavoritesScreen}
            options={{
              title: 'FAVORITES',
              tabBarIcon: ({color, size}) => {
                return <Entypo name="heart" size={18} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
