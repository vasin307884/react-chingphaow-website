import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
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
        
<div class="w3-top">
  <div class="w3-bar w3-white w3-card" id="myNavbar">
    <a href="#home" class="w3-bar-item w3-button w3-wide">LOGO</a>
    
    <div class="w3-right w3-hide-small">
      <a href="#about" class="w3-bar-item w3-button">ABOUT</a>
      <a href="#team" class="w3-bar-item w3-button"><i class="fa fa-user"></i> TEAM</a>
      <a href="#work" class="w3-bar-item w3-button"><i class="fa fa-th"></i> WORK</a>
      <a href="#pricing" class="w3-bar-item w3-button"><i class="fa fa-usd"></i> PRICING</a>
      <a href="#contact" class="w3-bar-item w3-button"><i class="fa fa-envelope"></i> CONTACT</a>
    </div>
    </div>
    
      {/* <div className="app flex-row align-items-center">
          
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

      </div> */}
     
     {/* <header class="w3-container w3-red w3-center" >
     <h1 class="w3-margin w3-jumbo">START PAGE</h1>
  <p class="w3-xlarge">Template by w3.css</p>
  <button class="w3-button w3-black w3-padding-large w3-large w3-margin-top">Get Started</button>
     </header> */}
     <div class="w3-row-padding w3-padding-64 w3-container">
  <div class="w3-content">
    <div class="w3-twothird">
      <h1>Lorem Ipsum</h1>
      <h5 class="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>

      <p class="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>

    <div class="w3-third w3-center">
      <i class="fa fa-anchor w3-padding-64 w3-text-red"></i>
    </div>
  </div>
</div>
<div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
  <div class="w3-content">
    <div class="w3-third w3-center">
      <i class="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right"></i>
    </div>

    <div class="w3-twothird">
      <h1>Lorem Ipsum</h1>
      <h5 class="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>

      <p class="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</div>

<div class="w3-container w3-black w3-center w3-opacity w3-padding-64">
    <h1 class="w3-margin w3-xlarge">Quote of the day: live life</h1>
</div>
      </div>
     

     
    );
    
  }
  
}
const mapStyles = {
    width: '100%',
    height: '85%',
  };
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAyir1wNaHCINAHUmm_4e-8hpICN3Q6z2U'
  })(Landingpage);

