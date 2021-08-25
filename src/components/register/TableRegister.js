import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import {getRegistration} from "../../actions/register_ssb";
import DataTableRegister from "./DataTableRegister";

const TableTalentaSSB = ({ getRegistration,register_ssb : { register, loading } }) => {
    useEffect(() => {
        getRegistration();
        console.log('registration',register);
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
                            {register.length > 0 ? (
                                register.map(data => (
                                    <DataTableRegister key={data._id} register_ssb={data} />

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

TableTalentaSSB.propTypes = {
    getRegistration: PropTypes.func.isRequired,
    register_ssb: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    register_ssb: state.register_ssb
});

export default connect(
    mapStateToProps, { getRegistration }
)(TableTalentaSSB);
