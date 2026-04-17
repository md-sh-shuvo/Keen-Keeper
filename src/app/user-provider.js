'use client'
 
import { createContext, useContext, ReactNode } from 'react'
 
const UserContext = createContext(null)
 
export function useUser() {
  let context = useContext(UserContext)
  if (context === null) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
 
export function UserProvider({ children, userPromise }) {
  return (
    <UserContext.Provider value={{ userPromise }}>
      {children}
    </UserContext.Provider>
  )
}