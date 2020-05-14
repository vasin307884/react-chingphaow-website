/* eslint-disable array-callback-return */
import React, { Component } from "react";
// import { NavLink} from 'react-router-dom';
import { Table,Card ,CardHeader,CardBody,Badge,Button} from "reactstrap";
import jwt_decode from 'jwt-decode'
// import axios from 'axios'
export default class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      role:'',
      requestsdata: [],
      loading: false,
      error: null
    };
  }
  fetchRequestData() {
    fetch("https://chingphaow-application.herokuapp.com/requests/")
      .then(response => response.json())
      .then(response => {
        this.setState({
          isLoading: false,
          requestsdata: response.data,
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
      email: decoded.email,
      role:decoded.role
    })
  }
  updateFilter = (event) => {
    this.setState({ value: event.target.value })
 }
 deleteData(id){
   if(window.confirm('คุณต้องการจะลบออกรายการใช่หรือไม่?'))
   {
     fetch('https://chingphaow-application.herokuapp.com/requests/delete/'+id,
     {
      method : 'DELETE',
      header : {'Accept':'application/json',
      'Content-Type':'application/json'
    }
     })
   }
 }
  render() {
    return (
      <div className="animated fadeIn">
              <label>
        สถานะ :
      <select 
      onSelect={this.state.value} 
      onChange={this.updateFilter}>
        <option value={this.state.statusValue} label="ทั้งหมด"></option>
        <option value="กำลังรอเจ้าหน้าที่ตรวจสอบ" label="กำลังรอเจ้าหน้าที่ตรวจสอบ"></option>
        <option value="กำลังดำเนินการชิงเผา" label="กำลังดำเนินการชิงเผา"></option>
        <option value="ชิงเผาเสร็จเรียบร้อยแล้ว" label="ชิงเผาเสร็จเรียบร้อยแล้ว"></option>
      </select>
      </label>
        <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> ตารางคำขอ
              </CardHeader>
              <CardBody>
        <Table responsive >
          <thead>
            <tr>
              <th>ไอดี</th>
              <th>ชื่อผู้ส่ง</th>
              <th>ที่อยู่</th>
              <th>เบอร์โทร</th>
              <th>(ละติจูด,ลองจิจูด)</th>
              <th>วันที่ส่งมา</th>
              <th>วันที่เริ่ม</th>
              <th>อัพเดทล่าสุดเมื่อ</th>
              <th>พื้นที่</th>
              <th>สถานะ</th>
              <th>เจ้าหน้าที่ที่ดูแล</th>
            </tr>
          </thead>
          {this.state.requestsdata.map((requestsdata) => {
            const adminLink = (
              <Button color='danger' onClick={()=>this.deleteData(requestsdata.id)}>ลบออกจากลิสต์</Button>
            )
          if ( !this.state.value || requestsdata.statusValue === this.state.value ) {
          return (
            <tbody>
              <tr>
                <td>{requestsdata.id}</td>
                <td>{requestsdata.name}</td>
                <td>{requestsdata.address}</td>
                <td>{requestsdata.phone}</td>
                <td>{requestsdata.latitude},{requestsdata.longitude}</td>
                <td>{requestsdata.fromdate}</td>
                <td>{requestsdata.todate}</td>
                <td>{requestsdata.lastupdate}</td>
                <td>{requestsdata.area} ตร.ม ({requestsdata.area/1600} ไร่)</td>
                <Badge style={{ color: requestsdata.color }}>
                  {requestsdata.statusValue}
                </Badge>
                <td>{requestsdata.first_name} {requestsdata.last_name}</td>
                {this.state.role==='admin' ? adminLink : null}
              </tr>
            </tbody>
          )
          }})}
        </Table>
        </CardBody>
            </Card>
      </div>
    );
  }
}
