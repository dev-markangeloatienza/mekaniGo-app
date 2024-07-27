import React, { useState } from 'react'
import AuthContext from '@/context/userContext'
import { type PropsWithChildren } from 'react';


const  AuthenticationProvider = ({children}:PropsWithChildren) =>{
  const [username, setUsername] = useState<String>('')
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  return (
    <AuthContext.Provider value={
		{
			username,
			isLoggedIn,
			setUsername,
			setIsLoggedIn
		}
    }>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthenticationProvider