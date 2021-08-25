import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DashboardActions from './DashboardActions';


const Dashboard = ({auth: {user}}) => {
    return (
            <Fragment>
                <h1 className="large text-primary">Home SSB PSMS Medan</h1>
                <p className="lead">
                    <i className="fas fa-user lead"/> Selamat Datang <b>{user && user.name}</b>
                </p>
                <Fragment>
                    <DashboardActions/>
                </Fragment>
            </Fragment>
    );
};

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
