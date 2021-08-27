import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import {deleteRegister} from "../../actions/registration";
import {connect} from "react-redux";
import formatDate from "../../utils/formatDate";


const RegistrationItem = ({registration: {_id, name, address, dob, height, weight, salary},index, history, deleteRegister}) => {

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

    useEffect(() => {
        // refreshPage(); //calling getEducations()
    }, [])


    return (
        <tr>
            <td scope="row">{index+1}.</td>
            <td>{name}</td>
            <td>{address}</td>
            <td>{formatDate(dob)}</td>
            <td>{height} cm</td>
            <td>{weight} kg</td>
            <td>{convertRp(salary)}</td>
            <td>
                <a href={`/register/${_id}`} className='btn btn-primary'>
                Edit
                </a>
            </td>
            <td>
                <button
                    onClick={() => deleteRegister(_id, history)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

RegistrationItem.propTypes = {
    registration: PropTypes.object.isRequired,
    deleteRegister: PropTypes.func.isRequired
}

export default connect(null, { deleteRegister })(RegistrationItem);
