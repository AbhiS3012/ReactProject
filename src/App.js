import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import AdminLogin from './components/Admin/AdminLogin';
import StudentLogin from './components/Student/StudentLogin';
import AdminDashboard from './components/Admin/AdminDashboard';
import StudentDashboard from './components/Student/StudentDashboard';
import AddAdmin from './components/Admin/AddAdmin';
import AdminList from './components/Admin/AdminList';
import VieworEditAdmin from './components/Admin/VieworEditAdmin';
import AddStudent from './components/Admin/AddStudent';
import StudentList from './components/Student/StudentList';
import VieworEditStudent from './components/Student/VieworEditStudent';

function App() {
  //we can use useContext() to avoide mess, for now i am using this only for login
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Alert alert={alert}/>

        <div className='contaier'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin-login' element={<AdminLogin showAlert={showAlert} />} />
            <Route path='/student-login' element={<StudentLogin />} />
            <Route path='/admin-dashboard' element={<AdminDashboard />}/>
            <Route path='/student-dashboard' element={<StudentDashboard />}/>
            <Route path='/add-admin' element={<AddAdmin />} />
            <Route path='/admin-list' element={<AdminList />} />
            <Route path='/view-edit-admin/:id' element={<VieworEditAdmin />} />
            <Route path='/add-student' element={<AddStudent />} />
            <Route path='/student-list' element={<StudentList />} />
            <Route path='/view-edit-student' element={<VieworEditStudent />} />
          </Routes>
        </div>
    </BrowserRouter>
    </>
  );
}

export default App;
