import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewEmployee = () => {

  const [data,changeData] = useState(
    [
      {"sno":1,"name":"Mark Thomas","code":1001,"number":+919074526171,"designation":"HR"},
      {"sno":2,"name":"Jacob Martin","code":1002,"number":+918606471362,"designation":"Data Analyst"},
      {"sno":3,"name":"John Doe","code":1003,"number":+918921446131,"designation":"CEO"},
      {"sno":4,"name":"Rani Kapoor","code":1004,"number":+918421416930,"designation":"Software Tester"},
      {"sno":5,"name":"Riya Thomas","code":1005,"number":+917926146132,"designation":"Business Analyst"},
      {"sno":6,"name":"Ruben Joseph","code":1006,"number":+919945351217,"designation":"Software Tester"},
      {"sno":7,"name":"Arjun Reddy","code":1007,"number":+917921446131,"designation":"Developer"},
      {"sno":8,"name":"John Doe","code":1008,"number":+919921845230,"designation":"Data Analyst"},
      {"sno":9,"name":"Abel Philip","code":1009,"number":+919921891152,"designation":"Manager"},
      {"sno":10,"name":"Mathew Kurian","code":1010,"number":+917211446126,"designation":"Business Analyst"}
    ]
  )
  return (
    <div>
<NavigationBar />
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            
        <table className="table">
  <thead>
    <tr>
      <th scope="col">SI.NO</th>
      <th scope="col">Full Name</th>
      <th scope="col">Employee Code</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Designation</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
      (value,index) => {
        return(
          <tr>
      <th scope="row">{value.sno}</th>
      <td>{value.name}</td>
      <td>{value.code}</td>
      <td>{value.number}</td>
      <td>{value.designation}</td>
    </tr>
        )
      }
    )}

  </tbody>
</table>
               
          
        </div>
    </div>
</div>

    </div>
  )
}

export default ViewEmployee