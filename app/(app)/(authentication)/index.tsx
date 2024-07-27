import React, { useState, useContext } from 'react'
import AuthContext from '@/context/userContext'
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native'
import { router } from 'expo-router'
import Colors from '@/global-styles/colors.json'
const userCredentials = {
    username: 'markangelo',
    password: 'secret'
}

const LoginScreen = () => {
    const user = useContext(AuthContext)
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const verifyLogin = (): void => {
        if(userCredentials.username === username && userCredentials.password === password){
            user?.setIsLoggedIn(true)
            user?.setUsername(username)
            console.log("Login Success: ", user?.username)
            console.log("Login Success: ", user?.isLoggedIn)
            router.replace('/(tabs)')
        }
    }

    return (
        <>
            <View style={[styles.container]}>
                <TextInput style={[styles.textInput]} onChangeText={setUsername} value={username}/>
                <TextInput style={[styles.textInput]} secureTextEntry={true} onChangeText={setPassword} value={password}/>
                <TouchableOpacity onPress={()=>verifyLogin()} style={[styles.loginButton]}>
                    <Text style={[styles.text]}>Login</Text>
                </TouchableOpacity>
                <Text>OR</Text>
                <TouchableOpacity style={[styles.registerButton]}>
                    <Text style={[styles.text,{
                        color: 'black'
                    }]}>Create an account</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        gap: 8,
        maxWidth: 400,
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors['secondary-color']
    },
    textInput: {
        borderRadius: 10,
        borderColor: Colors['primary-color'],
        borderWidth: 1,
        width: 230,
        paddingVertical: 2,
        paddingHorizontal:4
    },
    loginButton: {
        width: 230,
        borderWidth: 1,
        backgroundColor: 'black',
        borderRadius: 10,
        paddingVertical: 2
    },
    text: {
        color: "white",
        textAlign: 'center',
        paddingVertical: 5
    },
    registerButton: {
        width: 230,
        borderWidth: 1,
        backgroundColor: Colors['secondary-color'],
        borderRadius: 10,
        paddingVertical: 2
    }
})

export default LoginScreen