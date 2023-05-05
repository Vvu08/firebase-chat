import React from 'react'
import { loginWithGithub, loginWithGoogle } from '../services/auth'

type User = {
  uid: string
  displayName: string | null
}

type AuthContextType = {
  user: User | null
  login: (provider: 'google' | 'github') => Promise<void>
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType)

const AuthProvider: React.FC<React.PropsWithChildren<object>> = (props) => {
  const [user, setUser] = React.useState<User | null>(null)

  const login = async (provider: 'google' | 'github') => {
    let user
    if (provider === 'google') {
      user = await loginWithGoogle()
    } else if (provider === 'github') {
      user = await loginWithGithub()
    }

    if (user) {
      setUser(user)
    }
  }

  const value: AuthContextType = { user, login }

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
