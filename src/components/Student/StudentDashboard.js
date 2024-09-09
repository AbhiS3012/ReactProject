import React from 'react'
import { GearFill, ListOl } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

function StudentDashboard() {
  return (
    <div className='container'>
        <div className='row my-5'>
            <div className='col-md-3 my-2'>
                <div className="card text-white bg-secondary" style={{width: '13rem'}}>   
                    <div className="card-body">
                        <div className='card-header' style={{textAlign: 'center'}}><h5>Student</h5></div>
                        <div className='card-text'>
                            <p className="card-text">View, Edit/Update Your Personal Information.</p>
                            
                            <Link to="/student-list" style={{fontSize: '2.2rem', color: 'black', paddingInline: '25px'}}><ListOl /></Link>
                            <Link to="/view-edit-student" style={{fontSize: '2.2rem', color: 'black', paddingInline: '25px'}}><GearFill /></Link>

                            {/* here codes gets duplicated we can use another div tag and in that we can use style */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-3 my-2'>
                <div className="card" style={{width: '15rem'}}>
                    
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"></p>
                        <Link to="/" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
            <div className='col-md-3 my-2'>
                <div className="card" style={{width: '15rem'}}>
                    
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"></p>
                        <Link to="/" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
            <div className='col-md-3 my-2'>
                <div className="card" style={{width: '15rem'}}>
                    
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"></p>
                        <Link to="/" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
            <div className='col-md-3 my-2'>
                <div className="card" style={{width: '15rem'}}>
                    
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"></p>
                        <Link to="/" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentDashboard