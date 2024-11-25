import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import {Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function Dashboard() {

   const [employee,setEmployee] =useState([]);
   const navigate= useNavigate();

   useEffect(()=> {
      
    const fetchEmployee = async()=>{
      try {
      const response= await fetch("http://localhost:5020/api/all");
      const data= await response.json();
      setEmployee(data);
      } catch (error) {
        console.log("Error fetching employee", error.message);
      }
    }
    fetchEmployee();
   },[]);
   const handleUpdate= (employeeId)=>{
    navigate(`/employee/${employeeId}`);
   }
   
const handleDelete= async(employeeId)=>{
     try {
    const response=  await fetch(`http://localhost:5020/api/delete/${employeeId}`,{
        method: "DELETE",
      });
      if(response.ok){
        setEmployee((prevEmployee)=>
          prevEmployee.filter((employee)=>employee.id !==employeeId)
        )
      }
      console.log(`Employee with id ${employeeId} deleted successfully`);
     } catch (error) {
      console.log("Error deleting employee", error.message);
     }
}
  return (
    <>
    <Container className="mt-5">
  <Row>
    <Col>
     <h1 className='text-center'> Employee</h1>
     <Table>
     <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Department</th>
        <th>Action</th>
      </tr>
     </thead>
     <tbody>
      {employee.map((emp)=>(
      <><tr key={emp.id}></tr><td>{emp.name}</td><td>{emp.email}</td><td>{emp.phone}</td><td>{emp.department}</td><td>
          <Button variant="outline-secondary" onClick={()=>handleUpdate(emp.id)}>update</Button>
          <Button variant="outline-danger" onClick={()=>handleDelete(emp.id)}>Delete</Button>
        </td></>
))}
     </tbody>
     </Table>
    </Col>
  </Row>
    </Container>
    </>
  )
}

export default Dashboard