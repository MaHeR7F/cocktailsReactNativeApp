import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image } from 'react-native';
import {useRoute} from "@react-navigation/native";
import {useEffect, useState} from "react";
import axios from "axios";

export default function CocktailDetails() {

    const route = new useRoute()
    const [cocktailDetails, setCocktailDetails] = useState(null)

    console.log(route)

    const getCocktailDetails = async () => {
        const response = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${route.params.id}`
        );
        const data = await response;
        if (data.data.drinks) {
            setCocktailDetails(data.data.drinks[0]);
            console.log({cocktailDetails})
        }

    }

    useEffect(() => {
        getCocktailDetails()
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text style={styles.title}>{cocktailDetails?.strDrink}</Text>
            <Image style={styles.image} source={{uri: `${cocktailDetails?.strDrinkThumb}`}}/>
            <Text style={styles.instructions}>{cocktailDetails?.strInstructions}</Text>
            {cocktailDetails &&
                <View>
                    <Text style={styles.subtitle}>Ingredients:</Text>
                    {Object.keys(cocktailDetails).map((key) => {
                        if (key.startsWith('strIngredient') && cocktailDetails[key]) {
                            const measureKey = `strMeasure${key.slice(13)}`;
                            return (
                                <Text style={styles.ingredient} key={key}>
                                    {cocktailDetails[measureKey]} - {cocktailDetails[key]}
                                </Text>
                            );
                        }
                    })}
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    image: {
        height: 350,
        width: 350,
        marginBottom: 20
    },
    instructions: {
        fontSize: 16,
        marginBottom: 20
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    ingredient: {
        fontSize: 16,
        marginBottom: 5
    }
});
