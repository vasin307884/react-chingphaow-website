/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import "./App.css";
import "./css/default.css";
import logo from "./asset/chingphaow.png";
import alert from "./asset/alert.png";
import LOGO1 from "./asset/LOGO1.PNG";

class Landingpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      markers: [],
      page: 1,
      seed: 1,
      refreshing: false,
      filterCrime: "",
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      region: {
        latitude: 20.050470250943587,
        longitude: 99.87799879855217,
        latitudeDelta: 0.2922,
        longitudeDelta: 0.0421,
      },
    };
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  fetchMarkerData() {
    fetch("https://chingphaow-application.herokuapp.com/requests/")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          markers: responseJson.data,
          refreshing: false,
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
      <div>
        {/* <!--navigation--> */}
        <nav class="navbar1 navbar1-expand-md navbar1-light bg-white fixed-top sticky-navigation">
          <a class="navbar1-brand mx-auto">
            <img src={LOGO1} class="logo" alt="logo" />
          </a>
          <button
            class="navbar1-toggler navbar1-toggler-right border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbar1Collapse"
            aria-controls="navbar1Collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span data-feather="grid"></span>
          </button>
          <div class="collapse navbar1-collapse" id="navbar1Collapse">
            <ul class="navbar1-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#about">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#download">
                  Download
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#process">
                  Process
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link page-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <form class="form-inline">
              <Link to="/login">
                <p class="mb-0 mx-3">
                  <a class="page-scroll font-weight-bold" href="#contact">
                    Login
                  </a>
                </p>
              </Link>
            </form>
          </div>
        </nav>

        <section class="pt-7 pt-md-8" id="home">
          <div class="container">
            <div class="row">
              <div class="col-md-8 mx-auto my-auto text-center">
                <h1>
                  A project of “Chingphaow Application” is created for
                  Chiang-Rai.
                </h1>
                <p class="lead mt-4 mb-5">
                  In the northern part of <b>Thailand</b> , there are mountains,
                  forests and plantations of the villagers, which often causes
                  wildfires during the dry season.
                </p>
              </div>
              <div className="container">
                <div className="app flex-row align-items-center" id="homepage">
                  <Map
                    google={this.props.google}
                    zoom={12}
                    style={mapStyles}
                    initialCenter={{
                      lat: 20.050470250943587,
                      lng: 99.87799879855217,
                    }}
                    showsUserLocation={true}
                  >
                    {this.state.isLoading
                      ? null
                      : this.state.markers.map((marker, index) => {
                          return (
                            <Marker
                              onClick={this.onMarkerClick}
                              pinColor={marker.color}
                              key={index}
                              position={{
                                lat: marker.latitude,
                                lng: marker.longitude,
                              }}
                              name={marker.name}
                              address={marker.address}
                              phone={marker.phone}
                              fromdate={marker.fromdate}
                              status={marker.statusValue}
                              staff_first_name={marker.first_name}
                              staff_last_name={marker.last_name}
                              icon={{
                                path:
                                  "M7.8,1.3L7.8,1.3C6-0.4,3.1-0.4,1.3,1.3c-1.8,1.7-1.8,4.6-0.1,6.3c0,0,0,0,0.1,0.1 l3.2,3.2l3.2-3.2C9.6,6,9.6,3.2,7.8,1.3C7.9,1.4,7.9,1.4,7.8,1.3z M4.6,5.8c-0.7,0-1.3-0.6-1.3-1.4c0-0.7,0.6-1.3,1.4-1.3 c0.7,0,1.3,0.6,1.3,1.3 C5.9,5.3,5.3,5.9,4.6,5.8z",
                                fillColor: marker.color,
                                fillOpacity: 1.0,
                                strokeWeight: 0,
                                scale: 3,
                              }}
                              style={{
                                color: marker.color,
                              }}
                            ></Marker>
                          );
                        })}
                    <InfoWindow
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}
                      onClose={this.onClose}
                    >
                      <div class="infoWindow">
                        <h3>ชื่อผู้ส่ง : {this.state.selectedPlace.name}</h3>
                        {/* <h2>เบอร์โทร : {this.state.selectedPlace.phone}</h2> */}
                        {/* <h2>ที่อยู่ : {this.state.selectedPlace.address}</h2> */}
                        <h5>
                          วันที่ส่งมา : {this.state.selectedPlace.fromdate}
                        </h5>
                        <h5
                          style={{ color: this.state.selectedPlace.pinColor }}
                        >
                          สถานะ : {this.state.selectedPlace.status}
                        </h5>
                        <h5>
                          เจ้าหน้าที่ที่ดูแลจุด :{" "}
                          {this.state.selectedPlace.staff_first_name}{" "}
                          {this.state.selectedPlace.staff_last_name}
                        </h5>
                      </div>
                    </InfoWindow>
                  </Map>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- about section --> */}
        <section class="pb-7">
          <div class="container">
            <hr class="my-6" />
            <div class="row">
              <div class="col-md-6 mx-auto text-center">
                <h4 class="dot-circle font-weight-normal">
                  We intend to create websites and application in order to
                  improve the health of everyone.
                </h4>
              </div>
            </div>

            {/* topic1 */}
            <div class="row mt-5" id="about">
              <div class="col-md-6 order-2 order-md-1 my-md-auto">
                <h3>About me</h3>
                <p class="text-muted lead">
                  Chingphaow is a method of Prescribe Burning which uses fire
                  for forest management. Burning is the main objective. To
                  reduce the amount of fuel in the forest This is to reduce the
                  chance of forest fires. Or if a forest fire occurs The
                  intensity and danger of the fire (Fire Hazard) will be less
                  able to control the fire easily and safely.
                </p>
                <a href="#" class="btn1 btn1-primary">
                  Read more
                </a>
              </div>
              <div class="col-md-6 order-1 order-md-2">
                <img
                  src={logo}
                  class="img-fluid d-block mx-auto"
                  alt="Google Design"
                />
              </div>
            </div>
            <hr class="my-4" />
            <div class="row">
              <div class="col-md-6">
                <img
                  src={alert}
                  class="img-fluid d-block mx-auto"
                  alt="Facebook Messenger"
                />
              </div>

              {/* topic2 */}
              <div class="col-md-6 my-md-auto">
                <h3>Warning </h3>
                <p class="text-muted lead">
                  Chingohaow in the period of relative calm wind The weather is
                  not very hot. And the relative humidity of the air is quite
                  high With an appropriate time for the competition between 2 am
                  and 5 pm
                </p>
                <a href="#" class="btn1 btn1-primary">
                  Read more
                </a>
              </div>
            </div>
            <hr class="my-4" />
            <div class="row" id="download">
              <div class="col-md-6 order-2 order-md-1 my-md-auto">
                {/* topic3 */}
                <h3>Mobile application</h3>
                <p class="text-muted lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer id ante posuere, vestibulum mauris eget, efficitur
                  felis. Vestibulum tincidunt sit amet odio at gravida. Cras
                  mollis dapibus orci, in interdum odio scelerisque rhoncus.
                </p>
                <a href="#" class="btn1 btn1-primary">
                  View project
                </a>
              </div>
              <div class="col-md-6 order-1 order-md-2">
                <img
                  src="img/twitter-mobile.jpeg"
                  class="img-fluid d-block mx-auto"
                  alt="Twitter Mobile"
                />
              </div>
            </div>
            <hr class="my-4" />
          </div>
        </section>

        {/*                
                <!--process--> */}
        <section class="py-7" id="process">
          <div class="container">
            <div class="row">
              <div class="col-md-7 mx-auto text-center">
                <h2>How we work</h2>
                <p class="lead text-muted">
                  Our methods will have get location ,system analyze ,update
                  status ,start process chingphaow.
                </p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-md-7 mx-auto timeline">
                <div class="media pb-5">
                  <div class="icon-box mt-1">
                    <div class=" icon-cursor icon-box-inner small-xs text-primary">
                      <span data-feather="disc"></span>
                    </div>
                  </div>
                  <div class="media-body">
                    <h5>Get your location</h5>
                    <p class="text-muted">
                      When your send location on mobile application.System will
                      receive your location.
                    </p>
                  </div>
                </div>
                <div class="media pb-5">
                  <div class="icon-box mt-1">
                    <div class="icon-calculator icon-box-inner small-xs text-primary">
                      <span data-feather="copy"></span>
                    </div>
                  </div>
                  <div class="media-body">
                    <h5>System analyze</h5>
                    <p class="text-muted">
                      The system will analyze your data with Temperature,
                      weather, humidity. To find the right date and time.
                    </p>
                  </div>
                </div>
                <div class="media pb-5">
                  <div class="icon-box mt-1">
                    <div class="icon-pencil icon-box-inner small-xs text-primary">
                      <span data-feather="box"></span>
                    </div>
                  </div>
                  <div class="media-body">
                    <h5>Update status</h5>
                    <p class="text-muted">
                      The staff will change your status to yellow to be ready to
                      burn.
                    </p>
                  </div>
                </div>
                <div class="media pb-5">
                  <div class="icon-box mt-1">
                    <div class="icon-speedometer icon-box-inner small-xs text-primary">
                      <span data-feather="box"></span>
                    </div>
                  </div>
                  <div class="media-body">
                    <h5>Start chingphaow</h5>
                    <p class="text-muted">
                      The staff will change your status to yellow to be ready to
                      burn.
                    </p>
                  </div>
                </div>
                <div class="media">
                  <div class="icon-box mt-1">
                    <div class="icon-star icon-box-inner small-xs text-primary">
                      <span data-feather="server"></span>
                    </div>
                  </div>
                  <div class="media-body">
                    <h5>Finsih !</h5>
                    <p class="text-muted">
                      When the status turns green, the burn has finished.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-7">
              <div class="col-md-6 mx-auto text-center">
                <h3 class="dot-circle dot-lg">The origin of "Chingohaow"</h3>
                <p class="lead text-muted mb-4">
                  The purpose of this project to reduce the occurrence of
                  wildfires, pollution problems ,and to manage schedules for
                  burning of villagers. Therefore, there is a burning control
                  process called “Ching-Phaow (Early burning)”
                </p>
              </div>
            </div>
          </div>
        </section>

        <div class="container" id="contact">
          <div class=" w3-container " id="contact">
            <h3 class="contact w3-center w3-margin">CONTACT</h3>
            <p class="w3-center w3-large">
              Lets get in touch. Send us a message:
            </p>
            <div>
              <p>
                <i class="mm fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>{" "}
                Ching rai, Thailand
              </p>
              <p>
                <i class="ph fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i>{" "}
                Phone: 0812345
              </p>
              <p>
                <i class="em fa fa-envelope fa-fw w3-xxlarge w3-margin-right">
                  {" "}
                </i>{" "}
                Email: mail@mail.com
              </p>
              <br></br>
              <form>
                <p>
                  <input
                    class="w3-input w3-border"
                    type="text"
                    placeholder="Name"
                    required
                    name="Name"
                  ></input>
                </p>
                <p>
                  <input
                    class="w3-input w3-border"
                    type="text"
                    placeholder="Email"
                    required
                    name="Email"
                  ></input>
                </p>
                <p>
                  <input
                    class="w3-input w3-border"
                    type="text"
                    placeholder="Subject"
                    required
                    name="Subject"
                  ></input>
                </p>
                <p>
                  <input
                    class="w3-input w3-border"
                    type="text"
                    placeholder="Message"
                    required
                    name="Message"
                  ></input>
                </p>
                <p>
                  <button class="buttonsubmit w3-button " type="submit">
                    <i class="fa fa-paper-plane"></i> SEND MESSAGE
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
        <br></br>
        <footer class="footer w3-center w3-padding-64">
          <a href="#homepage" class="w3-button w3-light-grey">
            <i class="fa fa-arrow-up w3-margin-right"></i>To the top
          </a>
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
  width: "75%",
  height: "100%",
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAyir1wNaHCINAHUmm_4e-8hpICN3Q6z2U",
})(Landingpage);
