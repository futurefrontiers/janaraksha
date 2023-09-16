import { useState, useReducer, useEffect } from "react";
import { getCitiesUnderDistrict, getDistrictsUnderState, getStates } from "../../services";

const initialValue = {
  state: '',
  district: '',
  city: ''
}

const locationReducer = (s, {type, value}) => {
  switch(type) {
    case 'all':
        return {
          ...initialValue,
          ...(value || {})
        }
    case 'state':
        return {
          state: value,
          district: "",
          city: ""
        }
      case 'district':
        return {
          state: s.state,
          district: value,
          city: ""
        }
      case 'city':
        return {
          state: s.state,
          district: s.district,
          city: value
        }
      default:
        return s
  }
}

// eslint-disable-next-line react/prop-types
export const LocationFilters = ({ location, onChange }) => {
  const [loc, setLoc] = useReducer(locationReducer, {
    ...initialValue,
    ...location
  })

  const [states, setStates] = useState([])
  const [districts, setDistricts] = useState([])
  const [cities, setCities] = useState([])

  useEffect(() => {
    // load states.
    loadStates()
  }, [])

  useEffect(() => {
    const locationObj = location || {}
    setLoc({
      type: 'all', 
      value: locationObj
    })

    if(locationObj.state) {
      loadDistricts(locationObj.state)
    }
    if(locationObj.district) {
      loadCities(locationObj.city)
    }
  }, [location])

  // update the location
  useEffect(() => {
    onChange && onChange(loc)
  }, [loc])

  async function loadStates() {
    const states = await getStates()
    setStates(states || [])
  }

  async function loadDistricts(stateCode) {
    if(!stateCode) {
      setDistricts([])
      return
    }
    const res = await getDistrictsUnderState(stateCode)
    setDistricts(res)
  }

  async function loadCities(districtCode) {
    if(!loc.state || !districtCode) {
      setCities([])
      return
    }
    const res = await getCitiesUnderDistrict(loc.state, districtCode)
    setCities(res)
  }

  function handleLocationChange(type, value) {
    setLoc({type, value})
    switch(type) {
      case "state":
        loadDistricts(value)
        setCities([])
        break;
      case "district":
        loadCities(value)
        break;
    }
  }

  return (
    <div className={"row mb-3"}>
      {/* STATE */}
      <div className="col-md-4">
        <select
          className="form-select form-control"
          value={loc.state}
          name="state"
          onChange={(e) => handleLocationChange("state", e.target.value)}
        >
          {states.map((state) => (
            <option key={state.code} value={state.code}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      {/* DISTRICT */}
      <div className="col-md-4">
        <select
          value={loc.district}
          className="form-select form-control"
          name="district"
          disabled={!loc.state}
          onChange={(e) => handleLocationChange("district", e.target.value)}
        >
          <option value="">Select District</option>
          {districts.map((district) => (
            <option key={district.code} value={district.code}>
              {district.name}
            </option>
          ))}
        </select>
      </div>

      {/* CITY */}
      <div className="col-md-4">
        <select
          value={loc.city}
          disabled={!loc.district}
          className="form-select form-control"
          name="city"
          onChange={(e) => handleLocationChange("city", e.target.value)}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city.code} value={city.code}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
