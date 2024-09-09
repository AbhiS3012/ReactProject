import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminLogin(props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:9090/admin/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userName, password})
        })
        .then(async response => {
            const admin = await response.json()
            console.log("admin logedin Successfully", admin);
            
            //to update data of that logedin admin id only, we are using localstorage (key, value).
            //save data to localstorage so that we can use as and when required.
            localStorage.setItem('fname',admin.fname);
            localStorage.setItem('lname',admin.lname);
            localStorage.setItem('id',admin.id);
            localStorage.setItem('username',admin.userName);

            navigate('/admin-dashboard');
        })
        .catch(error => {
            console.log("There was an error!", error);
            setUserName('');
            setPassword('');
            props.showAlert("Invalid Credentials", "danger");
        })
  }

  return (
    <div>
      <div className='container my-3'>
        <h2 style={{textAlign: 'center'}}>Admin Login</h2>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">UserName</label>
            <input type="userName" value={userName} className="form-control" id="userName" aria-describedby="usernameHelp" onChange={(event) => setUserName(event.target.value)}  required/>
            <small id="userHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" value={password} className="form-control" id="password" onChange={(event) => setPassword(event.target.value)} required/>
          </div>
          <div className='container d-flex justify-content-between'>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to='/login' className='btn btn-primary'>&larr; Back</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin


//when we are using onSubmit then we can use rquired attribute as well as we can get inbuild browser validation.
//we can use onClick also which is for button.
//as per the requirenment we need to decide.
//onSubmit={handleSubmit} we can directly use this also.