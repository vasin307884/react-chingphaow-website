import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      staff_phone:'',
      email: '',
      created:'',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      staff_phone: decoded.staff_phone,
      email: decoded.email,
      created: decoded.created
    })
  }

  render() {
    return (
      // <div className="container">
      //   <div className="jumbotron mt-5">
      //     <div className="col-sm-8 mx-auto">
      //       <h1 className="text-center">PROFILE</h1>
      //     </div>
      //     <table className="table col-md-6 mx-auto">
      //       <tbody>
      //         <tr>
      //           <td>Fist Name</td>
      //           <td>{this.state.first_name}</td>
      //         </tr>
      //         <tr>
      //           <td>Last Name</td>
      //           <td>{this.state.last_name}</td>
      //         </tr>
      //         <tr>
      //           <td>เบอร์โทร</td>
      //           <td>{this.state.staff_phone}</td>
      //         </tr>
      //         <tr>
      //           <td>Email</td>
      //           <td>{this.state.email}</td>
      //         </tr>
      //         <tr>
      //           <td>สร้างเมื่อ</td>
      //           <td>{this.state.created}</td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   </div>
      // </div>
 <div>
     <div class="w3-content w3-margin-top">
      <div class="w3-row-padding">
        <div class="w3-third">
        <div class="w3-white w3-text-grey w3-card-4">
        <div class="w3-display-container">
        <img src="https://s3-ap-southeast-1.amazonaws.com/img-in-th/7dfef7c0af70785f8950a0ebac70bbe3.png" className="img-avatar" alt="admin@bootstrapmaster.com" />
          <div class="w3-display-bottomleft w3-container w3-text-black">
            
          </div>
        </div>
        <div class="w3-container">
        <h2>{this.state.first_name}&nbsp;{this.state.last_name}</h2>
        
          <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>สร้างเมื่อ: {this.state.created}</p>
          <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>{this.state.email}</p>
          <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{this.state.staff_phone}</p>
        </div>
        </div>
        </div>
        <div class="w3-twothird">
        <div class="w3-container w3-card w3-white w3-margin-bottom">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
        <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2020/03/13</h6>
        <p>ชื่อผู้ส่ง:Walden Skeats ละติจูด:20.0564341	ลองจิจูด:99.8919532 วันที่ส่งมา:2020/3/4 16:9:32</p>
          <hr></hr>
        </div>
        <div class="w3-container w3-card w3-white">
        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i> อื่นๆ</h2>
        </div>
        </div>
      </div>
     </div>  
</div>
    )
  }
}

export default Profile