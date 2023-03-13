import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function CocktailList({}) {
    return (
        <View>
            <StatusBar style="auto" />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Cocktails</Text>
            </View>
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