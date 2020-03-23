import React, { Component } from 'react'
export default class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestsdata: [],
      loading: false,
      error: null,
    }
  }
  fetchRequestData() {
    fetch('https://chingphaow-application.herokuapp.com/requests/')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          isLoading: false,
          requestsdata: response.data,
          refreshing: false
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount(){
    this.fetchRequestData();
  }
  render() {
    return (
      <table>
      <thead>
        <tr>
          <th>ไอดี</th>
          <th>ชื่อผู้ส่ง</th>
          <th>ที่อยู่</th>
          <th>เบอร์โทร</th>
          <th>ละติจูด</th>
          <th>ลองจิจูด</th>
          <th>วันที่ส่งมา</th>
          <th>วันที่เริ่ม</th>
          <th>อัพเดทล่าสุดเมื่อ</th>
          <th>สถานะ</th>
        </tr>
      </thead>
      {this.state.requestsdata.map(requestsdata=>(
      <tbody>
        <tr>
          <td>{requestsdata.id}</td>
          <td>{requestsdata.name}</td>
          <td>{requestsdata.address}</td>
          <td>{requestsdata.phone}</td>
          <td>{requestsdata.latitude}</td>
          <td>{requestsdata.longitude}</td>
          <td>{requestsdata.fromdate}</td>
          <td>{requestsdata.todate}</td>
          <td>{requestsdata.lastupdate}</td>
          <td style={{color:requestsdata.color}}>{requestsdata.statusValue}</td>

        </tr>
      </tbody>
      ))}
    </table>

    );
  }
}

