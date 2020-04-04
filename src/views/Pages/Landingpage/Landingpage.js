import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './App.css';
class Landingpage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isLoading: true,
          markers: [],
          page: 1, 
          seed: 1,
          refreshing: false,
          filterCrime: '',
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {},
          region: {
            latitude: 20.050470250943587,
            longitude: 99.87799879855217,
            latitudeDelta: 0.2922,
            longitudeDelta: 0.0421
          }
        };
      }
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
    
      onClose = props => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          });
        }
      };
      fetchMarkerData() {
        fetch('https://chingphaow-application.herokuapp.com/requests/')
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              isLoading: false,
              markers: responseJson.data,
              refreshing: false
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
      componentDidMount() {
    
        this.fetchMarkerData();
      }
      
  render() {
    return (
      <div >
  <div class="w3-bar w3-white w3-card" id="myNavbar">
    <a href="#home" class="w3-bar-item w3-button w3-wide">LOGO</a>
    
    <div class="w3-right w3-hide-small">
      <a href="#about" class="w3-bar-item w3-button">ABOUT</a>
      <a href="#team" class="w3-bar-item w3-button"><i class="fa fa-user"></i> TEAM</a>
      <a href="#work" class="w3-bar-item w3-button"><i class="fa fa-th"></i> WORK</a>
      <a href="#contact" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> CONTACT</a>
      <Link to="/login"><a href="#contact" class="w3-bar-item w3-button"> LOGIN</a></Link>
    </div>
    </div>
    
      <div className="app flex-row align-items-center" id="homepage">
          
         <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: 20.050470250943587, lng: 99.87799879855217 }}
        showsUserLocation={true}
      >
        {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
          return (
            <Marker
              onClick={this.onMarkerClick}
              pinColor={marker.color}
              key={index}
              position={{ lat: marker.latitude, lng: marker.longitude }}
              name={marker.name}
              address={marker.address}
              phone={marker.phone}
              fromdate={marker.fromdate}
              status={marker.statusValue}
              icon={{
                path: "M7.8,1.3L7.8,1.3C6-0.4,3.1-0.4,1.3,1.3c-1.8,1.7-1.8,4.6-0.1,6.3c0,0,0,0,0.1,0.1 l3.2,3.2l3.2-3.2C9.6,6,9.6,3.2,7.8,1.3C7.9,1.4,7.9,1.4,7.8,1.3z M4.6,5.8c-0.7,0-1.3-0.6-1.3-1.4c0-0.7,0.6-1.3,1.4-1.3 c0.7,0,1.3,0.6,1.3,1.3 C5.9,5.3,5.3,5.9,4.6,5.8z",
                fillColor: marker.color,
                fillOpacity: 1.0,
                strokeWeight: 0,
                scale: 3
              }}
              style={{
                color: marker.color
              }}
            >
            </Marker>

          );
        })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h2>ชื่อผู้ส่ง : {this.state.selectedPlace.name}</h2>
            <h2>เบอร์โทร : {this.state.selectedPlace.phone}</h2>
            <h2>ที่อยู่ : {this.state.selectedPlace.address}</h2>
            <h2>วันที่ส่งมา : {this.state.selectedPlace.fromdate}</h2>
            <h2 style={{ color: this.state.selectedPlace.pinColor }}>สถานะ : {this.state.selectedPlace.status}</h2>
          </div>
        </InfoWindow>
      </Map>

      </div>
     
     {/* <header class="w3-container w3-red w3-center" >
     <h1 class="w3-margin w3-jumbo">START PAGE</h1>
  <p class="w3-xlarge">Template by w3.css</p>
  <button class="w3-button w3-black w3-padding-large w3-large w3-margin-top">Get Started</button>
     </header> */}
     <div class="w3-row-padding w3-padding-64 w3-container">
  <div class="w3-content">
    <div class="w3-twothird">
      <h1>ชิงเผาคืออะไร</h1>
      <h5 class="w3-padding-32">การชิงเผาเป็นวิธีการหนึ่งของการเผาตามกำหนด (Prescribe Burning)
            อันเป็นการใช้ประโยชน์จากไฟเพื่อการจัดการป่าไม้
            การชิงเผามีวัตถุประสงค์หลัก เพื่อลดปริมาณเชื้อเพลิงในป่าลง
            ทั้งนี้เพื่อเป็นการลดโอกาสในการเกิดไฟป่า หรือถ้าเกิดไฟป่าขึ้น
            ความรุนแรงแลอันตรายของไฟนั้น (Fire Hazard) จะมีน้อยลง
            สามารถควบคุมไฟได้ง่ายและปลอดภัย
</h5>

      <p class="w3-text-grey">สำหรับประเทศไทย มีการชิงเผาเพื่อป้องกันไฟในสวนป่ามาเป็นเวลานานแล้ว
            โดยเฉพาะอย่างยิ่งในระยะที่ต้นไม้ยังมีขนาดเล็ก
            ซึ่งจะมีเชื้อเพลิงจำพวกวัชพืชต่างๆ ขึ้นอยู่ในปริมาณมาก
            สำหรับในป่าธรรมชาติ
            หลังจากที่กรมป่าไม้ได้ดำเนินการควบคุมไฟป่าในพื้นที่ป่าทั่วประเทศ
            ทำให้ในหลายพื้นที่มีการสะสมของเชื้อเพลิงในปริมาณมาก
            และในปีใดที่เกิดไฟไหม้ขึ้นในพื้นที่นั้น ไฟจะมีความรุนแรงมาก
            จนยากต่อการควบคุมและเป็นอันตรายอย่างยิ่งต่อพนักงานดับไฟป่า ดังนั้น
            การชิงเผาจึงเริ่มเข้ามามีบทบาทสำคัญในการควบคุมไฟในป่าธรรมชาติมากขึ้นเรื่อยๆ
            เช่นกัน
</p>
    </div>

    <div class="w3-third w3-center">
    <img src="https://s3-ap-southeast-1.amazonaws.com/img-in-th/b4c6d636c3bc69243b82e933579fdfb8.png" alt="chingphaow" border="0" />
    </div>
  </div>
</div>
<div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
  <div class="w3-content">
    <div class="w3-third w3-center">
      <i class="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right"></i>
    </div>

    <div class="w3-twothird">
      <h1>ข้อควรคำนึงในการชิงเผา</h1>
      <h5 class="w3-padding-32"> ในการชิงเผา นอกจากจะต้องพิจารณาถึงวิธีการและเทคนิคการเผา
            ปัจจัยที่กำหนดความรุนแรงของไฟ เครื่องมือและอุปกรณ์ที่ใช้ในการเผา
            ตลอดจนถึงผลกระทบที่เกิดจากการเผาแล้ว ยังจำเป็นต้อง
            คำนึงถึงเรื่องต่างๆ ดังต่อไปนี้
</h5>

      <p class="w3-text-grey"> ต้องทำแนวกันไฟรอบพื้นที่ที่จะชิงเผาเสียก่อน
            เพื่อป้องกันไม่ให้ไฟลุกลามออกไปนอกพื้นที่ชิงเผา
            โดยอาจอาศัยแนวที่มีอยู่แล้ว เช่น ลำห้วย หรือถนน
            และต้องมีเจ้าหน้าที่พร้อมเครื่องมือดับไฟป่าคอยควบคุมไม่ให้ไฟลามออกนอกพื้นที่
            ทำการชิงเผาในช่วงเวลาที่ลมค่อนข้างสงบ อากาศไม่ร้อนจัด
            และความชื้นสัมพัทธ์ของอากาศค่อนข้างสูง
            โดยช่วงเวลาที่เหมาะสมสำหรับการชิงเผาอยู่ระหว่าง 2.00 น. ถึง 5.00 น.
</p>
    </div>
  </div>
</div>

<div class="w3-container w3-black w3-center w3-opacity w3-padding-64">
    <h1 class="w3-margin w3-xlarge">Chingphaow will save Thailand</h1>
</div>
<div class="w3-container w3-light-grey"  id="contact">
  <br></br><br></br><br></br><br></br>
<h3 class="w3-center">CONTACT</h3>
  <p class="w3-center w3-large">Lets get in touch. Send us a message:</p>
  <div>
  <p><i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Ching rai, Thailand</p>
    <p><i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone: 0812345</p>
    <p><i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> Email: mail@mail.com</p>
    <br></br>
    <form>
    <p><input class="w3-input w3-border" type="text" placeholder="Name" required name="Name"></input></p>
    <p><input class="w3-input w3-border" type="text" placeholder="Email" required name="Email"></input></p>
    <p><input class="w3-input w3-border" type="text" placeholder="Subject" required name="Subject"></input></p>
    <p><input class="w3-input w3-border" type="text" placeholder="Message" required name="Message"></input></p>
    <p>
        <button class="w3-button w3-black" type="submit">
          <i class="fa fa-paper-plane"></i> SEND MESSAGE
        </button>
      </p>
    </form>
  </div>

</div>
<footer class="w3-center w3-black w3-padding-64">
  <a href="#homepage" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
  <div class="w3-xlarge w3-section">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
  </div>
  <p>Powered by MFUSE</p>
</footer>
      </div>

     
    );
    
  }
  
}
const mapStyles = {
    width: '100%',
    height: '100%',
  };
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAyir1wNaHCINAHUmm_4e-8hpICN3Q6z2U'
  })(Landingpage);

