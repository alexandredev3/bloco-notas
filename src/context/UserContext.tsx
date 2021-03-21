import { createContext, ReactNode, useState } from "react";
import api from "../services/api";

interface UserContextData {
  username: string;
  email: string;
}
interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextData)

export async function UserProvider({ children }: UserProviderProps) { 
  const [username, setUsername ] = useState('')
  const [email, setEmail ] = useState('')

    await api.get('http://localhost:3000/api/controllers/userController/findUser').then(response => {
      setUsername(response.data.user.name)
      setEmail(response.data.user.email)
    }).catch(error => {
      console.log(error)
    })


  return (
    <UserContext.Provider value={{
      username,
      email
    }}>
      { children }
    </UserContext.Provider>
  )
}

