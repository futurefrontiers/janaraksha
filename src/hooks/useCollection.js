import { collection, onSnapshot, query, addDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"

export const useCollection = (collectionName) => {
    const [docs, setDocs] = useState([])
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState()

    function cleanup() {
        setErr(null)
        setDocs([])
        setLoading(false)
    }

    function getCollectionRef() {
        if(!collectionName) {
            return null
        }
        return collection(db, collectionName)
    }

    // function to create a document
    // in the specified collection.
    async function create(newDoc) {
        const ref = getCollectionRef()

        try {
            await addDoc(ref, newDoc)
            return true
        }catch(e) {
            setErr(e)
            return false
        }
    }

    useEffect(() => {
        cleanup()
        const collectionRef = getCollectionRef()
        if(!collectionRef) {
            setErr('collectionRef must not be empty')
            return
        }

        // initialize loading.
        setLoading(true)

        // TODO: need to support queries, orderby.
        // get all the docs from the collection.
        const q = query(collectionRef)
        let unsub = null

        try {
            unsub = onSnapshot(q, (querySnapshot) => {
                console.log('querySnapshot: ', querySnapshot.docs)
                setLoading(false)
                setDocs(querySnapshot.docs.map(doc => ({
                  id: doc.id,
                  data: doc.data()
                })))
            })
        }catch(e) {
            setErr(e)
        }

        // before unmounting should clear open connections.
        return () => unsub ? unsub() : {}
    }, [collectionName])

    return {
        docs,
        err,
        loading,
        create
    }
}