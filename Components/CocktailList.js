import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { useEffect, useState } from "react";
/*import {useNavigation} from "@react-navigation/native";*/
import axios from "axios";


export default function CocktailList({}) {

    const [cocktails, setCocktails] = useState([]);

    /*const navigation = useNavigation();*/

    const getAllCocktails = async () => {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        console.log( response.data.drinks );
        setCocktails( response.data.drinks );
    }

    useEffect( () => {
        getAllCocktails()
    }, []);



    return (
            <View style={styles.container}>
                <StatusBar style="auto" />

                <FlatList
                    data={cocktails}
                    keyExtractor={(item) => item.idDrink}
                    numColumns={2}
                    renderItem = {({ item }) => (
                        // navigation.navigate("")
                        <TouchableOpacity onPress={() => console.log( item ) }>
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