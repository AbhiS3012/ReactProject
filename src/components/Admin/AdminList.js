import React, { useEffect, useState } from "react";
import { Trash3Fill } from "react-bootstrap-icons";

function AdminList() {
    //Delete Admin
    
      const deleteAdmin = async (id) => {
          if(id) {
            const response = await fetch(`http://localhost:9090/admin/${id}`, {
              method: 'DELETE',
              headers: {
                  'Content-Type': 'application/json'
              },
            })
            .then(async response => {
              console.log("Admin Deleted Successfully having id "+ id);
              getAll(); //as soon as entry gets deleted it will update the list
            })
            .catch(error => {
                console.log("There was an error!", error);
            })
            
          }
      }
    

    //Get List of Admins
    const [admins, setAdmins] = useState([])

    const getAll = async () => {
        const response = await fetch("http://localhost:9090/admin/getalladmins", {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          },
        })
        .then(async response => {
          const json = await response.json();
          console.log("Admin List ", json);
          setAdmins(json);
        })
        .catch(error => {
            console.log("There was an error!", error);
        })
    }

    //as soon as we click on list icon it will first call return() and then useEffect(getAll()).
    useEffect(() => {

      getAll();

    }, [])
  
  return (
    <div className="container">
      <h2 style={{textAlign: 'center'}}>List Of Admins</h2>
      <br />
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
          {admins.length===0 && 'No Admins to display'}
          
          {
            admins.map((admin) => (
                  <tr key={admin.id}>
                    <td>{admin.id}</td>
                    <td>{admin.fname}</td>
                    <td>{admin.lname}</td>
                    <td>{admin.contact}</td>
                    <td>{admin.address}</td>
                    {/* button is extra which is used only for delete admin rest all is same for list of admins */}
                    <td>
                      <button type="submit" onClick={() => deleteAdmin(admin.id)} className="btn btn-danger"><Trash3Fill /></button>
                    </td>
                  </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminList;
