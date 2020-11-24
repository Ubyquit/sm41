import React from 'react'
import {Button,
        View,
        StyleSheet,
        TextInput,
        ScrollView} from 'react-native'

const CreateUserScreen = () => {

    return(
        <ScrollView>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Name User"/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email"/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Phone"/>
            </View>
            <View style={styles.Button}>
                <Button title="Save User"/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        padding: 35,
    },
    inputGroup:{
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
});

export default CreateUserScreen