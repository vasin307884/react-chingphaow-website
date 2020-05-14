import React, { Component } from 'react';
// import { Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import '../Landingpage/css/default.css'
import { Link } from 'react-router-dom';
import logo from '../Landingpage/asset/chingphaow-removebg.png'
import cover1 from './asset/cover1.png'
import cover2 from './asset/cover2.png'
class Page404 extends Component {
  render() {
    return (
      <div className="">
      <div class="w3-content">
     
        <header class="w3-container w3-center w3-padding-32"> 
  <h1><b>ข่าวสารวันนี้</b></h1>
  <p>ยินดีต้อนรับสู่หน้าข่าวสารของ <span class="w3-tag">ชิงเผา</span></p>
</header>

{/* <!-- Grid --> */}
<div class="w3-row">
{/* <!-- Blog entries --> */}
<div class="w3-col l8 s12">
{/* <!-- Blog entry --> */}
  <div class="w3-card-4 w3-margin w3-white">
  <img src={cover1} class="logo" alt="logo" width="100%" />
    <div class="w3-container">
      <h3><b>ชิงเผาคืออะไร?</b></h3>
      <h5> <span class="w3-opacity">May 14, 2020</span></h5>
    </div>
    <div class="w3-container">
    <p> การชิงเผาเป็นวิธีการหนึ่งของการเผาตามกำหนด (Prescribe Burning) อันเป็นการใช้ประโยชน์จากไฟเพื่อการจัดการป่าไม้ การชิงเผามีวัตถุประสงค์หลัก เพื่อลดปริมาณเชื้อเพลิงในป่าลง ทั้งนี้เพื่อเป็นการลดโอกาสในการเกิดไฟป่า หรือถ้าเกิดไฟป่าขึ้น ความรุนแรงแลอันตรายของไฟนั้น (Fire Hazard) จะมีน้อยลง สามารถควบคุมไฟได้ง่ายและปลอดภัย</p>
        <div class="w3-row">
        <div class="w3-col m8 s12">
        <a href="http://www.dnp.go.th/forestfire/FIRESCIENCE/lesson%204/lesson4_3.htm"><p><button class="w3-button w3-padding-large w3-white w3-border"><b>อ่านต่อ »</b></button></p></a>
        </div>
        <div class="w3-col m4 w3-hide-small">
          {/* <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-tag">0</span></span></p> */}
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Blog entry --> */}
  <div class="w3-card-4 w3-margin w3-white">
  <img src={cover2} class="logo" alt="logo" width="100%" />
    <div class="w3-container">
      <h3><b>ข้อควรคำนึงในการชิงเผา</b></h3>
      <h5>Title description, <span class="w3-opacity">April 7, 2014</span></h5>
    </div>
    <div class="w3-container">
    <p> ต้องทำแนวกันไฟรอบพื้นที่ที่จะชิงเผาเสียก่อน เพื่อป้องกันไม่ให้ไฟลุกลามออกไปนอกพื้นที่ชิงเผา โดยอาจอาศัยแนวที่มีอยู่แล้ว เช่น ลำห้วย หรือถนน และต้องมีเจ้าหน้าที่พร้อมเครื่องมือดับไฟป่าคอยควบคุมไม่ให้ไฟลามออกนอกพื้นที่
    ทำการชิงเผาในช่วงเวลาที่ลมค่อนข้างสงบ อากาศไม่ร้อนจัด และความชื้นสัมพัทธ์ของอากาศค่อนข้างสูง โดยช่วงเวลาที่เหมาะสมสำหรับการชิงเผาอยู่ระหว่าง 2.00 น. ถึง 5.00 น.
    </p>
        <div class="w3-row">
        <div class="w3-col m8 s12">
        <a href="http://www.dnp.go.th/forestfire/FIRESCIENCE/lesson%204/lesson4_3.htm"><p><button class="w3-button w3-padding-large w3-white w3-border"><b>อ่านต่อ »</b></button></p></a>
        </div>
        <div class="w3-col m4 w3-hide-small">
          {/* <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span class="w3-tag">0</span></span></p> */}
        </div>
      </div>
    </div>
    
  </div>
 
</div>

<div class="w3-col l4">
{/* <!-- About Card -->  */}
  <div class="w3-card w3-margin w3-margin-top">
  <img src={logo} class="logo" alt="logo" width="100%" />
    <div class="w3-container w3-white">
      <h4><b>ที่มาของชิงเผา</b></h4>
      <p>วัตถุประสงค์ของโครงการนี้เพื่อลดการเกิดไฟป่าปัญหามลภาวะและจัดการตารางการเผาไหม้ของชาวบ้าน ดังนั้นจึงมีกระบวนการควบคุมการเผาไหม้ที่เรียกว่า“ชิงเผา”</p>
    </div>
  </div>
  {/* <!-- Posts --> */}
  <div class="w3-card w3-margin">
  <div class="w3-container w3-padding">
      <h4>ข่าวยอดนิยม</h4>
    </div>
    <ul class="w3-ul w3-hoverable w3-white">
    <li class="w3-padding-16">
        
    <a href="http://www.dnp.go.th/forestfire/FIRESCIENCE/lesson%204/lesson4_3.htm"><span class="w3-large">ชิงเผาคืออะไร?</span><br></br></a>
        
      </li>
      <li class="w3-padding-16">
        
      <a href="http://www.dnp.go.th/forestfire/FIRESCIENCE/lesson%204/lesson4_3.htm"> <span class="w3-large">ข้อควรคำนึงในการชิงเผา</span><br></br></a>
       
      </li>
      
    </ul>
  </div>
</div>

</div>
      </div>
      {/* <!-- Footer --> */}
<footer class="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
  
  <Link to ="/landingpage"><button class="w3-button w3-black w3-padding-large w3-margin-bottom">ย้อนกลับ</button></Link>
  <p>Powered by MFUSE</p>
</footer>
      </div>
      
      // <div className="app flex-row align-items-center">
      //   <Container>
      //     <Row className="justify-content-center">
      //       <Col md="6">
      //         <div className="clearfix">
      //           <h1 className="float-left display-3 mr-4">404</h1>
      //           <h4 className="pt-3">Oops! You're lost.</h4>
      //           <p className="text-muted float-left">The page you are looking for was not found.</p>
      //         </div>
      //         <InputGroup className="input-prepend">
      //           <InputGroupAddon addonType="prepend">
      //             <InputGroupText>
      //               <i className="fa fa-search"></i>
      //             </InputGroupText>
      //           </InputGroupAddon>
      //           <Input size="16" type="text" placeholder="What are you looking for?" />
      //           <InputGroupAddon addonType="append">
      //             <Button color="info">Search</Button>
      //           </InputGroupAddon>
      //         </InputGroup>
      //       </Col>
      //     </Row>
      //   </Container>
      // </div>
    );
  }
}

export default Page404;
