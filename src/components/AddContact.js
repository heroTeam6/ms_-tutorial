import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const contacts = useSelector( (state) => state)
    console.log(contacts)
    const dispatch = useDispatch()

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find( contact => contact.email === email && contact)
        const checkPhone = contacts.find( contact => contact.phone === parseInt(phone))

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
            id: contacts[contacts.length - 1].id + 1,
            name,
            phone,
            email
        }
        dispatch({ type: "ADD_CONTACT", payload:data})
        toast.success("Student added successfully")
        history.push("/")
    }

    return (
        <div className="container">
            <div className="row">
                <h1 className="display-3 my-5 text-center">
                    Add Student
                </h1>
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
                                value="Add Student"
                                className="btn btn-block btn-dark my-3"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddContact;