import { useRef, Fragment } from 'react'
import { useCollection } from '../../hooks'

export const FirestoreDemo = () => {
  const { docs, err, loading, create } = useCollection('test')
  const bloodGroups = ['A', 'B', 'O', 'AB']
  const formRef = useRef()

  const isValidUserObj = (user) => {
    const name = user.name
    if(!name.value) {
      name.ref && name.ref.focus()
      return false
    }

    const location = user.location
    if(!location.value) {
      location.ref && location.ref.focus()
      return false
    }

    const bg = user.blood_group
    if(!bg) {
      bg.ref && bg.ref.focus()
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    // prevent the default submit behaviour of form.
    e.preventDefault();

    // Extract all the form fields inside form.
    const inputFields = formRef.current.querySelectorAll('input')
    const selectFields = formRef.current.querySelectorAll('select')
    const fields = [...inputFields, ...selectFields]

    // Iterate over the form fields and build formValue obj.
    const formValue = {}
    fields.forEach(field => {
      formValue[field.name] = {
        value: field.value,
        ref: field
      }
    })

    if(!isValidUserObj(formValue)) {
      return
    }

    try {
      // Build doc obj.
      const value = Object.keys(formValue).reduce((acc, key) => {
        acc[key] = formValue[key].value
        return acc
      }, {})

      // store doc in firebase.
      await create(value)

      // reset form fields.
      fields.forEach(field => field.value = '')
    }catch(e) {
      console.log(e)
    }
  }

  return (
    <div className='firestoredemo'>
      <h1 className='title'>Firestore Demo - Donors</h1>

      {/* Error */}
      {err && <p>{err}</p>}

      {/* Loader */}
      {loading && <p>Loading docs...</p>}


      {/* Add Doc */}
      <form className='user__form' onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label>Name</label>
          <input type="text" name='name' placeholder='Enter Name'/>
        </div>
        <div>
          <label>Blood Group</label>
          <select name="blood_group" id="blood_group">
            {bloodGroups.map(bg => {
              return (
                <Fragment key={`${bg}`}>
                  <option key={bg + '+'} value={`${bg}+`}>{bg}+</option>
                  <option key={bg + '-'} value={`${bg}-`}>{bg}-</option>
                </Fragment>
              )
            })}
          </select>
        </div>
        <div>
          <label>Location</label>
          <input type="text" name='location' placeholder='Enter Location'/>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>

      {/* Data */}
      <div className='user__list'>
        {docs.map(({id, data:user}) => (
          <div key={id} className='user__card'>
            <h2>{user?.name}</h2>
            <p>Blood Group: {user?.blood_group}</p>
            <p>Location: {user?.location}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
