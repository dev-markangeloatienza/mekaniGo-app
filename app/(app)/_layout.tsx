import React, { useContext, useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import AuthenticationProvider from '@/components/Authentication'
import AuthContext from '@/context/userContext'


const AuthenticatedStackLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{
				// headerShown: false
			}}/>
							
		</Stack>
	)
}

const UnAuthenticatedStackLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="(authentication)" options={{
				headerShown: false
			}}/>
		</Stack>
	)
}

const ValidationLayout = () => {
	const auth = useContext(AuthContext)
	useEffect(()=>{
		console.log("LOGGED IN",auth?.isLoggedIn)
	},[auth?.isLoggedIn])
  	return (
		<AuthenticationProvider>
			
				{
					auth?.isLoggedIn ? 
					(
						<AuthenticatedStackLayout/>
					)
					:
					(
						<UnAuthenticatedStackLayout/>
					)
				}
		
		</AuthenticationProvider>
  	)
}

export default ValidationLayout