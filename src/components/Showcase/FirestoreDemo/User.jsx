/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useDoc } from '../../../hooks'

export const User = ({ id, user } = {}) => {
    const { remove, updateDocRef } = useDoc()
    
    useEffect(() => {
        if(id) {
            updateDocRef(`test/${id}`)
        }
    }, [id])

    async function handleDelete() {
        await remove()
    }

    return (
        <div key={id} className='user__card'>
            <h2>{user?.name}</h2>
            <p>Blood Group: {user?.blood_group}</p>
            <p>Location: {user?.location}</p>
            <div>
              <button onClick={() => handleDelete()}>Delete</button>
            </div>
        </div>
    )
}