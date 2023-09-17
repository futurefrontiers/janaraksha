// import { LocationFilters } from '../../../../../components';
// import { BLOOD_GROUP_OPTIONS } from '../../../../../constants/bloodGroups';
import { useCollection } from '../../../../../hooks';


const FindDonar = () => {
    const { docs } = useCollection('donors');

    return (
        <>
            {/* <div className='doner_form'>
                <form action='forms/quote.php' method='post' className='php-email-form php-email-form-filter'>
                    <h3>Find Donar</h3>
                    <div className='row gy-3'>
                        <div className='col-md-3'>
                            <select className='form-select form-control' name='bllod_group'>
                                {BLOOD_GROUP_OPTIONS.map((group, ind) => (
                                    <option key={ind} value={group.value}>
                                        {group.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <LocationFilters />
                        <div className='col-md-1'>
                            <button type='submit'>Search</button>
                        </div>
                    </div>
                </form>
            </div> */}
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
