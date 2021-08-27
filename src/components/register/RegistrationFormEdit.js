import React,{Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";
import {getRegisterById, editRegister} from "../../actions/registration";
import registration from "../../reducers/registration";

const RegistrationFormEdit = ({ registration: { registration, loading }, getRegisterById,
                          editRegister, history, match }) => {
    const [formData, setFormData] = useState({
        _id: "",
        name: '',
        address: '',
        dob: '',
        height: '',
        weight: '',
        salary: '',

    })


    useEffect(() => {
        getRegisterById(match.params.id);

        setFormData({
            _id: loading || !registration._id ? '' : registration._id,
            name: loading || !registration.name ? '' : registration.name,
            address: loading || !registration.address ? '' : registration.address,
            dob: loading || !registration.dob ? '' : registration.dob,
            height: loading || !registration.height ? '' : registration.height,
            weight: loading || !registration.weight ? '' : registration.weight,
            salary: loading || !registration.salary ? '' : registration.salary,
        })
    }, [loading, getRegisterById]);


    const {
        _id,
        name,
        address,
        dob,
        height,
        weight,
        salary,
    } = formData;



    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        editRegister(formData, history, true);
        console.log("history",history)
    };


    return (
        <Fragment>
            <h1 className="large text-primary">Edit Data </h1>
            <p className="lead">
                <i className="fas fa-user" /> Mengubah data disini
            </p>
            <small>* = required field</small>
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
        </Fragment>
    );
}

RegistrationFormEdit.propTypes = {
    registration: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    registration: state.registration
});

export default connect(mapStateToProps, {editRegister, getRegisterById})(withRouter(RegistrationFormEdit));
