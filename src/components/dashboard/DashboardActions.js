import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
    return (

        <div className='dash-buttons'>
            <Link to='/register-form' className='btn btn-primary'>
                <i className='fas fa-user-circle text-primary' /> Klik Disini Pendaftaran SSB PSMS Medan
            </Link>
        </div>


    );
};

export default DashboardActions;
