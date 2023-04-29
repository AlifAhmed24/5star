import { createContext } from "react"

export const userContext = createContext({
    user: null,
    authenticated: false
})

console.log('from create context ' + userContext.authenticated)

