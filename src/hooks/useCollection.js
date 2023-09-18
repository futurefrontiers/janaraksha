import { collection, onSnapshot, query, addDoc, setDoc, doc, where, and } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"

export const useCollection = (collectionName, options = {filters: []}) => {
    const [docs, setDocs] = useState([])
    const [loading, setLoading] = useState(false)
    const [opts, setOpts] = useState(options)
    const [err, setErr] = useState()

    function cleanup() {
        setErr(null)
        setDocs([])
        setLoading(false)
    }

    function buildFilters(filters) {
        if(!filters || !filters.length) return null

        const conditions = filters.map(filter => {
            const name = filter.col
            const operator = filter.operator
            const value = filter.value
            return where(name, operator, value)
        })

        return conditions
    }

    // Function return the firebase collection
    // reference for provided collectionName.
    function getCollectionRef() {
        if(!collectionName) {
            return null
        }
        return collection(db, collectionName)
    }

    // function to create a document
    // in the specified collection.
    async function create(newDoc, docId = '') {
        const ref = getCollectionRef()
        setErr(null)

        // TODO: Need to refactor this a bit
        if(docId) {
            try {
                await setDoc(doc(ref, docId), newDoc)
                return true
            }catch(e) {
                setErr(e)
                return false
            }
        }

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
        let unsub = null

        // build filters
        const conditions = buildFilters(opts.filters)

        // initialize loading.
        setLoading(true)

        // TODO: need to support orderby.
        // get all the docs from the collection.
        const q = conditions ? query(collectionRef, and(...conditions)) : query(collectionRef)

        try {
            unsub = onSnapshot(q, (querySnapshot) => {
                const formattedDocs = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                    ref: doc.ref
                }))
                setLoading(false)
                setDocs(formattedDocs)
            })
        }catch(e) {
            setErr(e)
        }

        // before unmounting should clear open connections.
        return () => unsub ? unsub() : {}
    }, [collectionName, JSON.stringify(opts)])

    function setFilters(filters = []) {
        setOpts(options => ({
            ...options,
            filters
        }))
    }

    return {
        setFilters,
        docs,
        err,
        loading,
        create
    }
}