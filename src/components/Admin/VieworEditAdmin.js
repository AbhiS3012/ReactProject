import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function VieworEditAdmin() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [contact, setContact] = useState('')

    const {id} = useParams(); 
    //used to get the id which is coming from localstorage(adminlogin) -> admindashboard -> view/edit

    const viewAdmin = async () => { 
      if(id) {
        const response = await fetch(`http://localhost:9090/admin/${id}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },
        })
        .then(async response => {
            const admin = await response.json()
            console.log("admin verified", admin);
            setFname(admin.fname);
            setLname(admin.lname);
            setUserName(admin.userName);
            setPassword(admin.password);
            setAddress(admin.address);
            setContact(admin.contact);
        })
        .catch(error => {
            console.log("There was an error!", error);
        })  
      }
    }

    //Edit/Update Admin
    const editAdmin = async (event) => {
      event.preventDefault();
        
      const response = await fetch("http://localhost:9090/admin", {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({id, fname, lname, userName, password, address, contact})
      })
      .then(async response => {
          const admin = await response.json()
          console.log("admin updated Successfully!", admin);

          //as soon as admin updated data gets reloaded
          setFname(admin.fname);
          setLname(admin.lname);
          setUserName(admin.userName);
          setPassword(admin.password);
          setAddress(admin.address);
          setContact(admin.contact);
      })
      .catch(error => {
        console.log("There was an error!", error);
      })

      //as soon as admin edited it will clear all fields
      // setFname('');
      // setLname('');
      // setUserName('');
      // setPassword('');
      // setAddress('');
      // setContact('');
    }

    useEffect(() => {

      viewAdmin();

    }, [])

  return (
      <div className='container my-3'>
        <h2 style={{textAlign: 'center'}}>View/Edit Personal Information</h2>
        <br />
        <form>
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
                    <input type="text" value={password} className="form-control" id="password" onChange={(event) => {setPassword(event.target.value)}} required/>
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
              <button type="submit" className="btn btn-primary" onClick={(event) => {editAdmin(event)}}>Edit</button>
              <Link to='/admin-dashboard' className='btn btn-primary'>&larr; Back</Link>
            </div>
        </form>
      </div>
  )
}

export default VieworEditAdmin;