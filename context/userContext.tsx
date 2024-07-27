import React, { createContext } from 'react'
import { UserType} from '@/types/userType';

const AuthContext = createContext<UserType | null>(null);

export default AuthContext;

