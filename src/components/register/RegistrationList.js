import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import {getRegistration} from "../../actions/registration";
import RegistrationItem from "./RegistrationItem";

const RegistrationList = ({ getRegistration, registration : { registration, loading } }) => {
    useEffect(() => {
        getRegistration();
        console.log('registration',registration);
    }, [getRegistration]);

    return (
        <Fragment>
            {loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    <h1 className='large text-primary'>Data Pendaftar SSB PSMS Medan</h1>

                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nama Lengkap</th>
                            <th scope="col">Alamat</th>
                            <th scope="col">Tanggal Lahir</th>
                            <th scope="col">Tinggi Badan</th>
                            <th scope="col">Berat Badan</th>
                            <th scope="col">Gaji Ortu</th>
                            <th scope="col" colSpan="2"><p className='text-center'>Tombol</p></th>
                        </tr>
                        </thead>
                        <tbody>
                            {registration.length > 0 ? (
                                registration.map((data,index) => (
                                    <RegistrationItem key={data._id} registration={data} index={index} />

                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="bg-light">
                                        <p className='text-center text-bold text-danger'>Data Belum Tersedia</p>
                                    </td>
                                </tr>

                            )}


                        </tbody>
                    </table>
                </Fragment>
            )}
        </Fragment>
    );
};

RegistrationList.propTypes = {
    getRegistration: PropTypes.func.isRequired,
    registration: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    registration: state.registration
});

export default connect(
    mapStateToProps, { getRegistration })(RegistrationList);
