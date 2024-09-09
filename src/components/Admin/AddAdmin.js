import React, { useState } from 'react';
import {Link} from 'react-router-dom';
//import {Link, useNavigate} from 'react-router-dom';

function AddAdmin() {
    //const navigate = useNavigate();

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')

    const addAdmin = async (event) => {
        event.preventDefault();
        
        //get it from google
        const response = await fetch("http://localhost:9090/admin/addadmin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({fname, lname, userName, password, address, contact})
        })
        
        // This is an optional part got from google
        .then(async response => {
            const json = await response.json()
            console.log("admin Registered Successfully", json);
            // navigate('/admin-login');
        })
        .catch(error => {
            console.log("There was an error!", error);
        })
        
        //as soon as admin added it will clear all fields
        setFname('');
        setLname('');
        setUserName('');
        setPassword('');
        setAddress('');
        setContact('');
    }

  return (
    <div className='container my-3'>
        <h2 style={{textAlign: 'center'}}>Admin Registration Form</h2>
        <br />
        <form onSubmit={(event) => {addAdmin(event)}}>
            <div className="row">
                <div className="col-md-6">
                    <label className="form-label" htmlFor="fname">First Name</label>
                    <input type="text" value={fname} className="form-control" id="fname" onChange={(event) => {setFname(event.target.value)}} required/>
                </div>
                <div className="col-md-6">
                    <label className="form-label" htmlFor="lname">Last Name</label>
                    <input type="text" value={lname} className="form-control" id="lname" onChange={(event) => {setLname(event.target.value)}} required/>
                </div>

                <div className="col-md-6 my-3">
                    <label className="form-label" htmlFor="userName">UserName</label>
                    <input type="text" value={userName}className="form-control" id="userName" onChange={(event) => {setUserName(event.target.value)}} required/>
                </div>
                <div className="col-md-6 my-3">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="text" value={password} className="form-control" id="password" onChange={(event) => {setPassword(event.target.value)}} minLength={5} required/>
                </div>

                <div className="col-md-6 my-3">
                    <label className="form-label" htmlFor="address">Address</label>
                    <input type="text" value={address} className="form-control" id="address" onChange={(event) => {setAddress(event.target.value)}} required/>
                </div>
                <div className="col-md-6 my-3">
                    <label className="form-label" htmlFor="contact">Contact</label>
                    <input type="text" value={contact} className="form-control" id="contact" onChange={(event) => {setContact(event.target.value)}} required/>
                </div>
            </div>
            <div className='container d-flex justify-content-between'>
                <button type="submit" className="btn btn-primary">Register</button>
                <Link to='/admin-dashboard' className='btn btn-primary'>&larr; Back</Link>
            </div>
        </form>
    </div>
  )
}

export default AddAdmin

//another way is in video no.63 -> codewithharry
//<button type="submit" className="btn btn-primary" onClick={addAdmin}>Register</button> this is also correct

