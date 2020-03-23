import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
export class Home extends Component {
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
              color={marker.color}
              key={index}
              position={{ lat: marker.latitude, lng: marker.longitude }}
              name={marker.name}
              address={marker.address}
              phone={marker.phone}
              fromdate={marker.fromdate}
              status={marker.statusValue}
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
            <h2 style={{color:this.state.selectedPlace.color}}>สถานะ : {this.state.selectedPlace.status}</h2>
          </div>
        </InfoWindow>
      </Map>

    );
  }
}
const mapStyles = {
  width: '100%',
  height: '80%',
};
export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyir1wNaHCINAHUmm_4e-8hpICN3Q6z2U'
})(Home);
