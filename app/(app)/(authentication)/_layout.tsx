import { Stack } from "expo-router";

const AuthenticationLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen name="index" options={{
                    headerTitle:"Login Page"
                }}/>
                <Stack.Screen name="register"/>
            </Stack>
        </>
    )
}

export default AuthenticationLayout