import React, { useEffect, useState } from 'react'
import { Form ,Button} from 'react-bootstrap'
import './UpdateUser.css'
import { useNavigate, useParams } from 'react-router-dom'
function UpdateUser() {

    const {id}=useParams();

    const navigate = useNavigate();

    const [formData, setFromData] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
     })
     
  
     const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFromData({ ...formData, [name]: value })
     }

     useEffect(()=>{
  const fetchEmployee= async(id)=>{
    try {
       const response= await fetch(`http://localhost:5020/api/get/${id}`);
       const data = await response.json();
       setFromData(data); 
    } catch (error) {
        console.log("Error fetching user"+ error.message);
    }
  }
fetchEmployee();
     },[]);

     const onSubmitChange= async(e)=>{
     e.preventDefault();
     try {
       const response= await fetch(`http://localhost:5020/api/update/${id}`,{
        method: "PATCH",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(formData),
     });
     const data= await response.json();
     console.log("user updated",data); 
     navigate("/")
     } catch (error) {
        console.log("", error.message);
     }
     }
  return (
    <div>
        <div className="center-form">
            <h1>Edit Employee Employee</h1>
            <Form onSubmit={onSubmitChange}>
               <Form.Group controlId="formBasicName">
                  <Form.Control type="text" placeholder="Enter name here" name='name' value={formData.name} onChange={handleInputChange} />
                  <Form.Control type="email" placeholder="Enter email here" name='email' value={formData.email} onChange={handleInputChange} />
                  <Form.Control type="text" placeholder="Enter phone here" name='phone' value={formData.phone} onChange={handleInputChange} />
                  <Form.Control type="text" placeholder="Enter department here" name='department' value={formData.department} onChange={handleInputChange} />
                  <Button type='submit' className='w-100' variant="primary"> Edit Employee </Button>
               </Form.Group>
            </Form>
         </div>
    </div>
  )
}
export default UpdateUser;