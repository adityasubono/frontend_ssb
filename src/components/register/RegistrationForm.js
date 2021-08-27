import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import {registerSSB} from "../../actions/registration";


const RegistrationForm = ({ setAlert, registerSSB, history}) => {

    const initialState = {
        name: '',
        address: '',
        dob: '',
        height: '',
        weight: '',
        salary: ''
    };

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        dob: '',
        height: '',
        weight: '',
        salary: ''
    });


    const clearState = () => {
        setFormData({ ...initialState });
    };

    const { name, address, dob, height, weight, salary } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const calculate_age = (dob) => {
        let today = new Date();
        let birthDate = new Date(dob);
        let age_now = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age_now--;
        }
        return age_now;
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        //Validation Frontend Form Register
        if (calculate_age(dob) <= 13) {
            setAlert('Umur Minimal 13 Tahun', 'danger');
        } else if (calculate_age(dob) > 20) {
            setAlert('Umur Maksimal 20 Tahun', 'danger');
        } else if (height < 100) {
            setAlert('Tinggi Badan Minimal 100 cm', 'danger');
        } else if (height >= 200) {
            setAlert('Tinggi Badan Maksimal 200 cm', 'danger');
        } else if (name === "") {
            setAlert('Nama Tidak Boleh Kosong', 'danger');
        } else if (weight > 80) {
            setAlert('Berat Badan Maksimal 80 Kg', 'danger');
        } else if (weight < 40) {
            setAlert('Berat Badan Minimal 40 Kg', 'danger');
        } else if (address === "") {
            setAlert('Alamat Tidak Boleh Kosong', 'danger');
        } else {
            clearState()
            registerSSB({name, address, dob, height, weight, salary}, history);
        }
    };

    return (
        <Fragment>
            <h1 className="large text-primary">Form Pendaftaran SSB PSMS Medan 2021</h1>
            <p className="lead">
                <i className="fas fa-user" /> Isi Data Kalian Disini
            </p>
            <div className='row'>
                <div className='col-8'>
                    <form className="form" onSubmit={onSubmit}>
                        <div className="form-group">
                            <label className='lead'>Nama Lengkap</label>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className='lead'>Alamat Rumah</label>
                            <textarea
                                placeholder="Alamat Rumah"
                                name="address"
                                value={address}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className='lead'>Tanggal Lahir</label>
                            <input type="date"
                                   name="dob"
                                   value={dob}
                                   onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className='lead'>Tinggi Badan</label>
                            <input
                                type="number"
                                pattern="[0-9]{0,5}"
                                placeholder="Tinggi Badan"
                                name="height"
                                value={height}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className='lead'>Berat Badan</label>
                            <input
                                type="number"
                                pattern="[0-9]{0,5}"
                                placeholder="Berat Badan"
                                name="weight"
                                value={weight}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className='lead'>Penghasilan Orang Tua</label>
                            <input
                                type="number"
                                pattern="[0-9]{0,5}"
                                placeholder="Penghasilan Orang Tua"
                                name="salary"
                                value={salary}
                                onChange={onChange}
                            />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Simpan" />
                    </form>
                </div>
            </div>

        </Fragment>
    );
};

RegistrationForm.propTypes = {
    setAlert: PropTypes.func.isRequired,
    registerSSB: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, registerSSB })(RegistrationForm);
