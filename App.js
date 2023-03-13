import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator }  from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Fontisto } from '@expo/vector-icons';

import CocktailList from "./Components/CocktailList"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function FavorisScreen({}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Favoris</Text>
        </View>
    );
}

function CocktailsStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CocktailList" component={CocktailList} options={{ title: 'Cocktails' }} />
        </Stack.Navigator>
  );
}


export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <NavigationContainer>
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
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});