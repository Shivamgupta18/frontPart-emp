import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import './Postuser.css'
import { useNavigate } from 'react-router-dom'

function PostUser() {

   const [formData, setFromData] = useState({
      name: "",
      email: "",
      phone: "",
      department: ""
   })
   const navigate = useNavigate();

   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFromData({ ...formData, [name]: value })
   }
   const onSubmitChange = async (e) => {
      e.preventDefault();
      console.log(formData)
      try {
         const response = await fetch("http://localhost:5020/api/employee", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
         });
         const data = await response.json();
         console.log("Employee Created", data);
         navigate("/")
      } catch (error) {
         console.log("Error created employee", error.message);
      }
   }
   return (
      <>
         <div className="center-form">
            <h1>Post New Employee</h1>
            <Form onSubmit={onSubmitChange}>
               <Form.Group controlId="formBasicName">
                  <Form.Control type="text" placeholder="Enter name here" name='name' value={formData.name} onChange={handleInputChange} />
                  <Form.Control type="email" placeholder="Enter email here" name='email' value={formData.email} onChange={handleInputChange} />
                  <Form.Control type="text" placeholder="Enter phone here" name='phone' value={formData.phone} onChange={handleInputChange} />
                  <Form.Control type="text" placeholder="Enter department here" name='department' value={formData.department} onChange={handleInputChange} />
                  <Button type='submit' className='w-100' variant="primary"> Post Employee </Button>
               </Form.Group>
            </Form>
         </div>
      </>
   )
}

export default PostUser