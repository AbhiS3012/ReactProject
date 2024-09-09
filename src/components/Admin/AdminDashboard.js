import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GearFill, ListOl, PersonFill, PersonPlusFill} from 'react-bootstrap-icons';

function AdminDashboard() {
    const navigate = useNavigate();

    const logOutHandler = () => {
        localStorage.clear();
        navigate('/admin-login');
    }

  return (
    <>
    <div style={{textAlign: "right", fontSize: "30px", marginRight: "50px"}} >
        <h4>
            <span style={{fontSize: "2rem"}}><PersonFill /></span> 
            {localStorage.getItem('fname')} {localStorage.getItem('lname')}
        </h4>   
    </div>
    <div style={{ textAlign: "right", fontSize: "30px", marginRight: "50px" }}>
        {/* <span className='mx-3' style={{ fontSize: "17px" }}>{localStorage.getItem('username')}</span> */}
        <button type="submit" onClick={logOutHandler} className="btn btn-primary">LogOut</button>
    </div>

    <div className='container'>
        <div className='row my-5'>
            <div className='col-md-3 my-2'>
                <div className="card text-white bg-secondary" style={{width: '13rem'}}>
                    <div className="card-body">
                        <div className="card-header" style={{textAlign: 'center'}}><h5>Admin</h5></div>
                        <div className='card-text my-2'>
                            <p className="card-text">Add, View, Delete, Edit/Update Your Personal Information.</p>

                            {/* Using react-bootstrap-icons */}
                            <Link to="/add-admin" style={{fontSize: '2.2rem', color: 'black', paddingLeft: "15px"}}><PersonPlusFill /></Link>
                            <Link to="/admin-list" style={{fontSize: '2.2rem', color: 'black', paddingLeft: "20px"}}><ListOl /></Link>
                            <Link to={`/view-edit-admin/${localStorage.getItem('id')}`} style={{fontSize: '2.2rem', color: 'black', paddingLeft: "20px"}}><GearFill /></Link>
                            {/* here codes gets duplicated we can use another div tag and in that we can use style */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-3 my-2'>
                <div className="card text-white bg-dark" style={{width: '13rem'}}>
                    <div className="card-body">
                        <div className="card-header" style={{textAlign: 'center'}}><h5>Admin</h5></div>
                        <div className='card-text my-2'>
                            <p className="card-text">Add New Student.</p>

                            <Link to="/add-student" style={{fontSize: '2.2rem', color: 'grey', paddingInline: '75px'}}><PersonPlusFill /></Link>
                        </div>   
                    </div>
                </div>
            </div>
            <div className='col-md-3 my-2'>
                <div className="card text-bk bg-light" style={{width: '13rem'}}>
                    <div className="card-body">
                        <div className="card-header" style={{textAlign: 'center'}}><h5>Admin</h5></div>
                        <div className='card-text my-2'>
                            <p className="card-text">Add, View, Delete, Edit/Update Your Personal Information.</p>
                        </div>   
                    </div>
                </div>
            </div>
            <div className='col-md-3 my-2'>
                <div className="card text-white bg-danger" style={{width: '13rem'}}>
                    <div className="card-body">
                        <div className="card-header" style={{textAlign: 'center'}}><h5>Admin</h5></div>
                        <div className='card-text my-2'>
                            <p className="card-text">Add, View, Delete, Edit/Update Your Personal Information.</p>
                        </div>   
                    </div>
                </div>
            </div>
            <div className='col-md-3 my-2'>
                <div className="card text-white bg-success" style={{width: '13rem'}}>
                    <div className="card-body">
                        <div className="card-header" style={{textAlign: 'center'}}><h5>Admin</h5></div>
                        <div className='card-text my-2'>
                            <p className="card-text">Add, View, Delete, Edit/Update Your Personal Information.</p>
                        </div>   
                    </div>
                </div>
            </div>
            <div className='col-md-3 my-2'>
                <div className="card text-white bg-warning" style={{width: '13rem'}}>
                    <div className="card-body">
                        <div className="card-header" style={{textAlign: 'center'}}><h5>Admin</h5></div>
                        <div className='card-text my-2'>
                            <p className="card-text">Add, View, Delete, Edit/Update Your Personal Information.</p>
                        </div>   
                    </div>
                </div>
            </div>
            <div className='col-md-3 my-2'>
                <div className="card text-white bg-info" style={{width: '13rem'}}>
                    <div className="card-body">
                        <div className="card-header" style={{textAlign: 'center'}}><h5>Admin</h5></div>
                        <div className='card-text my-2'>
                            <p className="card-text">Add, View, Delete, Edit/Update Your Personal Information.</p>
                        </div>   
                    </div>
                </div>
            </div>
            <div className='col-md-3 my-2'>
                <div className="card text-white bg-primary" style={{width: '13rem'}}>
                    <div className="card-body">
                        <div className="card-header" style={{textAlign: 'center'}}><h5>Admin</h5></div>
                        <div className='card-text my-2'>
                            <p className="card-text">Add, View, Delete, Edit/Update Your Personal Information.</p>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AdminDashboard