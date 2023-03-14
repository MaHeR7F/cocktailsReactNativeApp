import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }  from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Fontisto } from '@expo/vector-icons';

import CocktailList from "./Components/CocktailList"
import FavorisScreen from "./Components/Favoris"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function CocktailsStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CocktailList" component={CocktailList} options={{ title: 'Cocktails' }} />
        </Stack.Navigator>
  );
}


export default function App() {
    return (
            <NavigationContainer>
                <StatusBar style="auto" />
                <Tab.Navigator
                    initialRouteName={"Cocktails"}
                >
                    <Tab.Screen name="Cocktails" component={CocktailsStackScreen} options={{
                        headerShown: false, tabBarIcon:({ color, size}) => (
                            <Fontisto name="cocktail" size={size} color={color} />
                        )}
                    }
                    />
                    <Tab.Screen name="Favoris" component={FavorisScreen} options={{
                        tabBarIcon:({ color, size}) => (
                            <Fontisto name="favorite" size={size} color={color} />
                        )}
                    }
                    />
                </Tab.Navigator>
            </NavigationContainer>

    );
}
