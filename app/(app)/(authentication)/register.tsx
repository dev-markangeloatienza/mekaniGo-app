import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native'
import Colors from '@/global-styles/colors.json'

const userCredentials = {
    username: 'markangelo',
    password: 'secret'
}

const RegisterScreen = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const verifyLogin = (): void => {
        if(userCredentials.username === username && userCredentials.password === password){
            console.log("Login Success")
        }
    }

    return (
        <>
            <View style={[styles.container]}>
                <TextInput onChangeText={setUsername} value={username}/>
                <TextInput secureTextEntry={true} onChangeText={setPassword} value={password}/>
                <TouchableOpacity onPress={()=>verifyLogin()}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        gap: 5,
        maxWidth: 400,
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors['secondary-color']
    },
    textInput: {
        borderRadius: 10,
    }
})

export default RegisterScreen