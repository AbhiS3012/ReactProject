import React from 'react';
import { Link } from 'react-router-dom';
import admin from '../images/admin.jpg';
import student from '../images/student.jpg';

function Login() {
  return (
    <>
        <div className='container my-3'>
            <div className='row' style={{marginLeft: '20%'}}>
                <div className='col'>
                    <div className="card my-3" style={{maxWidth: "18rem"}}>
                    <div className="card-header" style={{textAlign: 'center'}}><h3>Admin</h3></div>
                        <img src={admin} className="card-img-top" alt="Not Found" />
                        <div className="card-body">
                            <Link to="/admin-login" className="btn btn-dark" style={{width: '100%'}}>Login</Link>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className="card my-3" style={{maxWidth: "18rem"}}>
                    <div className="card-header" style={{textAlign: 'center'}}><h3>Student</h3></div>
                        <img src={student} className="card-img-top" alt="Not Found" />
                        <div className="card-body">
                            <Link to="/student-login" className="btn btn-dark" style={{width: '100%'}}>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login