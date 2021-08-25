import React from 'react';
import PropTypes from 'prop-types';
import {deleteRegister} from "../../actions/register_ssb";
import {connect} from "react-redux";
import formatDate from "../../utils/formatDate";


const DataTableRegister = ({register_ssb: {_id, name, address, dob, height, weight, salary},deleteRegister}) => {

    const convertRp = (nominal) => {
        const numb = nominal;
        const format = numb.toString().split('').reverse().join('');
        const convert = format.match(/\d{1,3}/g);
        const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('')

        return rupiah
    }

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <tr>
            <td scope="row">1.</td>
            <td>{name}</td>
            <td>{address}</td>
            <td>{formatDate(dob)}</td>
            <td>{height} cm</td>
            <td>{weight} kg</td>
            <td>{convertRp(salary)}</td>
            <td>
                <a href={`/register_ssb/${_id}`} className='btn btn-primary'>
                Edit
                </a>
            </td>
            <td>
                <button
                    onClick={() => deleteRegister(_id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

DataTableRegister.propTypes = {
    register_ssb: PropTypes.object.isRequired,
    deleteRegister: PropTypes.func.isRequired
}

export default connect(null, { deleteRegister })(DataTableRegister);
