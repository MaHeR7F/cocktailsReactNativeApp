import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import { useEffect, useState } from "react";
import {useNavigation} from "@react-navigation/native";
import CocktailDetails from "./CocktailDetails"
import axios from "axios";


export default function CocktailList({}) {

    const [cocktails, setCocktails] = useState([]);

    const navigation = useNavigation();

    const getCocktail = async () => {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const data = await response;
        console.log(data.data.drinks[0])
        if (data.data.drinks) {
            return data.data.drinks[0];
        }
        return null;
    }

    const getAllCocktails = async () => {
        const newCocktails = [];
        for (let i = 1; i < 11; i++) {
            const cocktail = await getCocktail();
            if (cocktail) {
                newCocktails.push(cocktail);
            }
        }
        setCocktails(prevState => [...prevState, ...newCocktails]);
    }

    useEffect(() => {
        getAllCocktails();
    }, [])




    return (
            <View style={styles.container}>
                <StatusBar style="auto" />

                <FlatList
                    data={cocktails}
                    keyExtractor={(item) => item.idDrink}
                    numColumns={2}
                    onEndReached={getAllCocktails}
                    onEndReachedThreshold={1}
                    renderItem = {({ item }) => (

                        <TouchableOpacity onPress={() => navigation.navigate("CocktailDetails") }>
                            <View>
                                <Image source={{ uri: item.strDrinkThumb }} style={styles.image} />
                                <Text>{ item.strDrink }</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width:170,
        height: 170,
        marginBottom: 10,
        marginHorizontal: 5
    },
});



