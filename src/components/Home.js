import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import StudentDetail from './StudentDetail';

const Home = () => {
    const contacts = useSelector( (state) => state)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 text-right">
                    <Link to="/add" className="btn btn-outline-dark">Add</Link>
                </div>
                <div>
                    {
                        contacts.map((contact, id) => <StudentDetail contact={contact} key={id}></StudentDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;