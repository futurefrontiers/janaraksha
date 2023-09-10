import { useEffect } from 'react'
import { useCollection } from '../../hooks'

export const FirestoreDemo = () => {
  const { docs, err, loading } = useCollection('test')

  useEffect(() => {
    console.log('[firestoreDemo] docs: ', docs)
  }, [docs])

  return (
    <div>

      {/* Error */}
      {err && <p>{err}</p>}

      {/* Loader */}
      {loading && <p>Loading docs...</p>}

      {/* Data */}
      {docs.map(doc => (
        <div key={doc.id}>
          <h1>{doc.id}</h1>
          <div>
            {JSON.stringify(doc.data)}
          </div>
        </div>
      ))}
    </div>
  )
}
