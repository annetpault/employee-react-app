import React from 'react'
import NavigationBar from './NavigationBar'

const ViewEmployee = () => {
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
    <tr>
      <th scope="row">1</th>
      <td>Mark Thomas</td>
      <td>1001</td>
      <td>+91 9074526171</td>
      <td>HR</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob Martin</td>
      <td>1002</td>
      <td>+91 8606471362</td>
      <td>Data Analyst</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>John Doe</td>
      <td>1003</td>
      <td>+91 8921446131</td>
      <td>CEO</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Rani Kapoor</td>
      <td>1004</td>
      <td>+91 8421416930</td>
      <td>Software Tester</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Riya Thomas</td>
      <td>1005</td>
      <td>+91 7926146132</td>
      <td>Business Analyst</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Ruben Joseph</td>
      <td>1006</td>
      <td>+91 9945351217</td>
      <td>Software Tester</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Arjun Reddy</td>
      <td>1007</td>
      <td>+91 7921446131</td>
      <td>Developer</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>John Doe</td>
      <td>1008</td>
      <td>+91 9921845230</td>
      <td>Data Analyst</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>Abel Philip</td>
      <td>1009</td>
      <td>+91 9921891152</td>
      <td>Manager</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>Mathew Kurian</td>
      <td>1010</td>
      <td>+91 7211446126</td>
      <td>Business Analyst</td>
    </tr>
  </tbody>
</table>
               
          
        </div>
    </div>
</div>

    </div>
  )
}

export default ViewEmployee