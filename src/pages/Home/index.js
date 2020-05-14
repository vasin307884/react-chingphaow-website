/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

// import data from '../data/data.json';
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {     
      isLoading: true,
      markers: [],
      page: 1,
      seed: 1,
      refreshing: false,
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
    this.updateFilter = this.updateFilter.bind(this);
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
  updateFilter = (event) => {
    this.setState({ value: event.target.value })
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
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: 20.050470250943587, lng: 99.87799879855217 }}
        showsUserLocation={true}
      >
       
        {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
          if ( !this.state.value || marker.statusValue === this.state.value ) {
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
              staff_first_name={marker.first_name}
              staff_last_name={marker.last_name}
              latitude={marker.latitude}
              longitude={marker.longitude}
              lastupdate={marker.lastupdate}
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
        }})}
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
            <h2>เจ้าหน้าที่ที่ดูแลจุด : {this.state.selectedPlace.staff_first_name} {this.state.selectedPlace.staff_last_name}</h2>
            <h2>อัพเดทล่าสุดเมื่อ : {this.state.selectedPlace.lastupdate}</h2>
            <a href={`https://www.google.com/maps?ie=UTF8&z=13&q=${this.state.selectedPlace.latitude},${this.state.selectedPlace.longitude}`} target="_blank">กดเพื่อนำทาง</a>
          </div>
        </InfoWindow>
        {/* {data.map((marker, index) => {
          const date = `วันที่ : ${marker.acq_date}`;
          return (
            <Marker
              key={index}
              position={{ lat: marker.latitude, lng: marker.longitude }}
              title={date}
            >
            </Marker>
          );
        })} */}
      </Map>
      
      </div>
      
    );
  }
}
const mapStyles = {
  width: '90%',
  height: '75%',
};
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyir1wNaHCINAHUmm_4e-8hpICN3Q6z2U'
})(Home);
