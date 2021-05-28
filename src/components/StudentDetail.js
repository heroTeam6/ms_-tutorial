import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const StudentDetail = (props) => {
    const {name, phone, email, id} = props.contact

    const dispatch = useDispatch()

    const deleteContact = (id) => {
        dispatch({type: "DELETE_CONTACT", payload:id})
        toast.success("Contact deleted successfully!")
    }
    return (
        <div className="container row">
            <div className="col-md-3 text-center my-2">
                <h6>{name}</h6>
            </div>
            <div className="col-md-3 text-center my-2">
                <h6>{email}</h6>
            </div>
            <div className="col-md-3 text-center my-2">
                <h6>{phone}</h6>
            </div>
            <div className="col-md-3 text-center my-2">
                <Link to={`/edit/${id}`} className="btn btn-primary btn-small mx-2">Edit</Link>
                <button type="button" onClick={() => deleteContact(id)} className="btn btn-danger btn-small">Delete</button>
            </div>
        </div>
    );
};

export default StudentDetail;