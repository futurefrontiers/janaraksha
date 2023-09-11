import { deleteDoc, getDoc, doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"

export const useDoc = (path) => {
    const [ref, setRef] = useState(null)
    const [loading, setLoading] = useState(false)
    const [docInfo, setDocInfo] = useState(null)
    const [err, setErr] = useState(null)
    
    useEffect(() => {
        updateDocRef(path)
    }, [path]);

    // cleanup the current state of hook.
    function cleanup() {
        setRef(null)
        setErr(null)
        setDocInfo(null)
        setLoading(false)
    }
    
    // updates the doc ref.
    async function updateDocRef(docPath) {
        cleanup()
        setLoading(true)

        if(!docPath) {
            setErr('Document path should not be empty or undefined');
            setLoading(false)
            return false
        }
        const docRef = await doc(db, docPath);
        setRef(docRef)
        setLoading(false)
        return true
    }

    // function will get the doc info.
    async function get() {
        try {
            setLoading(true)
            const doc = await getDoc(ref)
            setDocInfo({
                doc: doc.data(),
                id: doc.id
            })
            setLoading(false)
        }catch(e) {
            setErr(e)
            setLoading(false)
        }
    }

    // function will delete the document from firebase.
    async function remove() {
        try {
            setLoading(true)
            await deleteDoc(ref)
            setLoading(false)
            return true
        }catch(e) {
            setErr(e)
            setLoading(false)
            return false
        }
    }

    // This function is a wrapper function to handle
    // the error if ref was not provided as argument.
    function invokeIfRefExists(method, ...args) {
        if(!ref || ref === '') {
            setErr('docPath must not be empty or undefined.')
            return
        }
        return method.call(this, args)
    }


    return {
        loading,
        docInfo,
        err,
        updateDocRef,
        get: invokeIfRefExists.bind(this, get),
        remove: invokeIfRefExists.bind(this, remove)
    }
}