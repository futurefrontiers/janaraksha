import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className='services-list'>
            <NavLink to='/donations/blood' className={({ isActive }) => (isActive ? 'active' : '')}>
                Blood Donation
            </NavLink>
            <NavLink to='/donations/blood/register' className={({ isActive }) => (isActive ? 'active' : '')}>
                Become a Donar
            </NavLink>
            <NavLink to='/donations/blood/find' className={({ isActive }) => (isActive ? 'active' : '')}>
                Find Donar
            </NavLink>
            <NavLink to='/donations/blood/banks' className={({ isActive }) => (isActive ? 'active' : '')}>
                Blood Banks
            </NavLink>
        </div>
    );
};

export default SideBar;
