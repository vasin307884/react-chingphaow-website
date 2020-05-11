import React, { Component } from "react";
import { Table, Card, CardHeader, CardBody,Button } from "reactstrap";
import jwt_decode from 'jwt-decode'
export default class Stafflist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffdata:[],
      email: '',
      loading: false,
      error: null
    };
  }
  fetchRequestData() {
    fetch("https://chingphaow-application.herokuapp.com/staffs/")
      .then(response => response.json())
      .then(response => {
        this.setState({
          isLoading: false,
          staffdata: response.data,
          refreshing: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.fetchRequestData();
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      email: decoded.email
    })
  }
  updateFilter = (event) => {
    this.setState({ value: event.target.value })
 }
 delete(staff_id){
  if(window.confirm('คุณต้องการจะลบออกรายการใช่หรือไม่?')){
    fetch('https://chingphaow-application.herokuapp.com/requests/delete'+staff_id,{
     method:'DELETE',
     headers : {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
    })
  }
}
  render() {
    const adminlink = (
      <Table responsive >
          <thead>
            <tr>
              <th>ไอดี</th>
              <th>ชื่อจริง</th>
              <th>นามสกุล</th>
              <th>เบอร์โทร</th>
              <th>email</th>
            </tr>
          </thead>
          {this.state.staffdata.map((staff) => {
          return (
            <tbody>
              <tr>
                <td>{staff.staff_id}</td>
                <td>{staff.first_name}</td>
                <td>{staff.last_name}</td>
                <td>{staff.staff_phone}</td>
                <td>{staff.email}</td>
                <Button color='danger' onClick={()=>this.delete(staff.staff_id)}>ลบออกจากลิสต์</Button>
              </tr>
            </tbody>
          )
          })}
        </Table>
    )
    const stafflink =(
      <h1>เฉพาะแอดมินเท่านั้น</h1>
      
    )
    return (
      <div className="animated fadeIn">
        {/* <label>
          รายชื่อสตาฟ :
          <select
            onSelect={this.state.value}
            onChange={this.updateFilter}>
            {this.state.staffdata.map((staff) => {
              return (
                <option key={staff.staff_id} value={this.state.value}>
                  {staff.first_name} {staff.last_name}
                </option>
              )                            
            })}
            
          </select>
        </label> */}
        <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> รายชื่อสตาฟ
              </CardHeader>
              <CardBody>
              {this.state.email==='lnwza' ? adminlink : stafflink}
        </CardBody>
            </Card>
      </div>
    );
  }
}
