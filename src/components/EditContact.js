import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditContact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const {id} = useParams();

    const contacts = useSelector( (state) => state)
    const dispatch = useDispatch()
    const history = useHistory()
    const currentContact = contacts.find( contact => contact.id === parseInt(id))

    useEffect( () => {
        if(currentContact){
            setName(currentContact.name) 
            setEmail(currentContact.email) 
            setPhone(currentContact.phone) 
        }
    },[currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find( contact => contact.id !== parseInt(id) && contact.email === email)
        const checkPhone = contacts.find( contact => contact.id !== parseInt(id) && contact.phone === parseInt(phone))

        if(!email || !phone || !name){
            return toast.warning("Please fill in all fields!")
        }

        if(checkEmail){
            return toast.error("This email already exists!")
        }

        if(checkPhone){
            return toast.error("This phone number already exists!")
        }

        const data = {
            id: parseInt(id),
            name,
            phone,
            email
        }
        dispatch({ type: "UPDATE_CONTACT", payload:data})
        toast.success("Student updated successfully")
        history.push("/")
    }


    return (
        <div className="container">
            {currentContact ? (
                <>
            
            <div className="row">
            <h1 className="display-3 my-5 text-center">Edit Student Detail{id}</h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Name"
                                className="form-control my-3"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Email"
                                className="form-control my-3"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="number"
                                placeholder="Phone Number"
                                className="form-control my-3"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                value="Update Student"
                                className="btn btn-dark my-3"
                            />
                        </div>
                        <div className="form-group">
                            <Link to="/" className="btn btn-danger">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
            </>
            ): (
                <h1 className="display-3 my-5 text-center">Student contact with id {id} is not exists.</h1>
            )}
        </div>
    );
};

export default EditContact;