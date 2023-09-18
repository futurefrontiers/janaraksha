import { LocationFilters } from '../../../../../components';
import { BLOOD_GROUP_OPTIONS } from '../../../../../constants/bloodGroups';
import { useEffect, useState } from 'react';
import { useCollection } from '../../../../../hooks';

const FindDonar = () => {
    const [bg, setBg] = useState('all')
    const [location, setLocation] = useState({})
    const { docs, setFilters } = useCollection('donors');

    useEffect(() => {
        refineSearch()
    }, [])

    const refineSearch = (ev) => {
        if(ev && ev.preventDefault) {
            ev.preventDefault();
        }
        const filters = []

        // Filter donors who are ready to donate.
        filters.push({
            col: 'can_donate',
            operator: '==',
            value: true
        })

        // Add location filters if present.
        if(location) {
            if(location.state) {
                filters.push({col: 'location.state', operator: '==', value: location.state})
            }
            if(location.district) {
                filters.push({col: 'location.district', operator: '==', value: location.district})
            }
            if(location.city) {
                filters.push({col: 'location.city', operator: '==', value: location.city})
            }
        }

        // Add blood group filter
        if(bg && bg != 'all') {
            filters.push({col: 'blood_group', operator: '==', value: bg})
        }
        setFilters(filters)
    }

    function handleLocationChange(location) {
        setLocation(location)
    }

    return (
        <>
            <div className='doner_form'>
                <form className='php-email-form php-email-form-filter' onSubmit={refineSearch}>
                    <h3>Find Donar</h3>
                    <div className='row gy-3'>
                        <div className='col-md-3'>
                            <select className='form-select form-control' name='bllod_group' onChange={e => setBg(e.target.value)}>
                                {BLOOD_GROUP_OPTIONS.map((group, ind) => (
                                    <option key={ind} value={group.value}>
                                        {group.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <LocationFilters onChange={handleLocationChange} />
                        <div className='col-md-1'>
                            <button type='submit' className='btn btn-primary'>Search</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className='container ml-5'>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Blood Group</th>
                            <th scope='col'>Mobile</th>
                            <th scope='col'>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* No Data */}
                        {docs.length == 0 && (
                            <tr>
                                <td colSpan="4">No donors found. Please refine your search and try again.</td>
                            </tr>
                        )}
                            
                        {docs.map(({data, id}) => (
                            <tr key={id}>
                                <td>{data.name}</td>
                                <td>{data.blood_group}</td>
                                <td>{data.phone || 'NA'}</td>
                                <td>{data.email || 'NA'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default FindDonar;
