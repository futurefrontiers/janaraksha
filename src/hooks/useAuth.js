import { useEffect, useState } from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"


export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        setIsLoggedIn(!!user)
    }, [user])

    async function createAccount(email, password) {
        console.log('create account')
        try {
            const userCreds = await createUserWithEmailAndPassword(auth, email, password)
            setUser(userCreds.user)
            console.log('userCreds: ', userCreds)
        }catch(e) {
            console.log('error: ', e)
        }
    }

    function logout() {
        console.log('logout')
    }

    return Object.freeze({
        createAccount,
        isLoggedIn,
        logout
    })
}