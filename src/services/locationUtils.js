export const getStates = async () => {
    try {
        let res = await fetch('/data/locations/states.json')
        res = await res.json()
        // console.log('res: ',res)
        return res.data
    }catch(e) {
        console.log('e: ', e)
        return []
    }
}

export const getDistrictsUnderState = async (stateCode) => {
    try {
        let res = await fetch(`/data/locations/${stateCode}/districts.json`)
        res = await res.json()
        // console.log('res: ',res)
        return res.data
    }catch(e) {
        console.log('e: ', e)
        return []
    }
}

export const getCitiesUnderDistrict = async (stateCode, distCode) => {
    try {
        let res = await fetch(`/data/locations/${stateCode}/${distCode}/cities.json`)
        res = await res.json()
        // console.log('res: ',res)
        return res.data
    }catch(e) {
        console.log('e: ', e)
        return []
    }
}

