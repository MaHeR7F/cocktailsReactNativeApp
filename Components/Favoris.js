import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function FavorisScreen({}) {
    return (
        <View>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <Text style={{paddingTop:'90%'}}>Aucun favoris enregistré</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});