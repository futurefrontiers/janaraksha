import { useEffect, useState } from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"


export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
        setIsLoggedIn(!!user)
    }, [user])

    async function createAccount(email, password) {
        setLoading(true)
        try {
            const userCreds = await createUserWithEmailAndPassword(auth, email, password)
            setUser(userCreds.user)
            return userCreds.user.uid
        }catch(e) {
            // console.log('failed to create account with email: ', email, ', err: ',e)
            return null
        } finally {
            setLoading(false)
        }
    }

    function logout() {
        console.log('logout')
    }

    return Object.freeze({
        loading,
        createAccount,
        isLoggedIn,
        logout
    })
}