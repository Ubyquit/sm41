import React, { useState } from 'react';
import {Button,
        View,
        StyleSheet,
        TextInput,
        ScrollView} from 'react-native';

// Firebase
import firebase from "../database/firebase";

const AddUserScreen = (props) => {

    const initalState = {
        name: "",
        email: "",
        phone: "",
    };

    const [state, setState] = useState(initalState);

    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value });
    };

    const saveNewUser = async () => {
        if(state.name === ""){
            alert("please provide a name");
        } else {
            try {
                await firebase.db.collection("users").add({
                    name: state.name,
                    email: state.email,
                    phone: state.phone,
                });

                props.navigation.navigate("UsersList");
            } catch (error) {
                console,log(error);
            }
        }
    };

    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                placeholder="Name User"
                onChangeText={(value) => handleChangeText(value, "name")}
                value={state.name}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                placeholder="Email"
                onChangeText={(value) => handleChangeText(value, "email")}
                value={state.email}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput 
                placeholder="Phone"
                onChangeText={(value) => handleChangeText(value, "phone")}
                value={state.phone}
                />
            </View>
            <View style={styles.button}>
                <Button title="Save User" onPress={() => saveNewUser()}/>
            </View>
        </ScrollView>
    );
};

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
    loader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center", 

    },
});

export default AddUserScreen;