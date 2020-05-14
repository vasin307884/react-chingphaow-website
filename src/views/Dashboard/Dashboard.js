/* eslint-disable jsx-a11y/alt-text */
// import React, { Component, lazy, Suspense } from 'react';
import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import axios from "axios";
import "./css/style3.css";

import {
  // Badge,
  Button,
  // ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  // CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  // DropdownItem,
  // DropdownMenu,
  DropdownToggle,
  // Progress,
  Row,
  // Container,

  // Table,
} from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle } from "@coreui/coreui/dist/js/coreui-utilities";
// import { number } from 'prop-types';
import AQItable from "./asset/aqi.JPG";
// const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
// const brandInfo = getStyle("--info");
// const brandWarning = getStyle('--warning')
const brandDanger = getStyle("--danger");

const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: "New Clients",
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: "Recurring Clients",
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: "Pageviews",
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: "Organic",
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: "CTR",
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: "Bounce Rate",
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        backgroundColor: "transparent",
        borderColor: variant ? variant : "#c2cfd6",
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      },
    ],
    yAxes: [
      {
        display: false,
      },
    ],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

class Dashboard extends Component {
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "Chiang Rai",
  };
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      chartData: {},
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  componentDidMount() {
    axios
      .get("https://chingphaow-application.herokuapp.com/requests/")
      .then((response) => {
        const getAmount = response.data.data.length;
        const ArrayDataStatus1 = response.data.data.filter(
          (item) => item.statusValue === "กำลังรอเจ้าหน้าที่ตรวจสอบ"
        ).length;
        const ArrayDataStatus2 = response.data.data.filter(
          (item) => item.statusValue === "กำลังดำเนินการชิงเผา"
        ).length;
        const ArrayDataStatus3 = response.data.data.filter(
          (item) => item.statusValue === "ชิงเผาเสร็จเรียบร้อยแล้ว"
        ).length;
        const ArrayArea = response.data.data.map((item) => item.area);
        const ArrayDate = response.data.data.map((item) => item.lastupdate);
        this.setState({
          dataAmount: getAmount,
          dataStatus1: ArrayDataStatus1,
          dataStatus2: ArrayDataStatus2,
          dataStatus3: ArrayDataStatus3,
          dataArea: ArrayArea,
          dataDate: ArrayDate,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("https://chingphaow-application.herokuapp.com/requests/totalArea")
      .then((response) => {
        const getTotalArea = response.data.data.map((item) => item.Total);
        this.setState({
          TotalArea: getTotalArea,
        });
      });
    axios
      .get(
        "https://chingphaow-application.herokuapp.com/requests/totalSpecific"
      )
      .then((response) => {
        const getSpecificStatus1 = response.data.data.map(
          (item) => item.Totalspecific
        );
        const getSpecificStatus2 = response.data.data.map(
          (item) => item.statusValue
        );
        this.setState({
          TotalSpecficStatus1: getSpecificStatus1,
          TotalSpecficStatus2: getSpecificStatus2,
        });
      });
  }
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  render() {
    return (
      <div className="animated fadeIn">
        <div className="App-header">
          <h2>Dashboard</h2>
          <label>
            พื้นที่ :
            <select onSelect={this.state.value} onChange={this.updateFilter}>
              <option value={this.state.statusValue} label="เชียงราย"></option>
            </select>
          </label>
        </div>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown
                    id="card1"
                    isOpen={this.state.card1}
                    toggle={() => {
                      this.setState({ card1: !this.state.card1 });
                    }}
                  >
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                  </Dropdown>
                </ButtonGroup>

                <div className="f2">จำนวนคำขอทั้งหมด</div>
                <div className="f1 text-value">{this.state.dataAmount}</div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger ">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown
                    id="card2"
                    isOpen={this.state.card2}
                    toggle={() => {
                      this.setState({ card2: !this.state.card2 });
                    }}
                  >
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                  </Dropdown>
                </ButtonGroup>
                <div className="f2">รอเจ้าหน้าที่ตรวจสอบ</div>
                <div className="f1 text-value">{this.state.dataStatus1}</div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown
                    id="card3"
                    isOpen={this.state.card3}
                    toggle={() => {
                      this.setState({ card3: !this.state.card3 });
                    }}
                  >
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                  </Dropdown>
                </ButtonGroup>
                <div className="f2">กำลังดำเนินการชิงเผา</div>
                <div className="f1 text-value">{this.state.dataStatus2}</div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-success ">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown
                    id="card4"
                    isOpen={this.state.card4}
                    toggle={() => {
                      this.setState({ card4: !this.state.card4 });
                    }}
                  >
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                  </Dropdown>
                </ButtonGroup>
                <div className="f2">เสร็จเรียบร้อยแล้ว</div>
                <div className="f1 text-value">{this.state.dataStatus3}</div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>พื้นที่ทั้งหมด</CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="6" xl="6">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">พื้นที่ทั้งหมด</small>
                          <br />
                          <strong className="h4">
                            {this.state.TotalArea} ตร.ม /{" "}
                          </strong>
                          <br></br>
                          <strong className="h4">
                            {this.state.TotalArea / 1600} ไร่
                          </strong>
                          <div className="chart-wrapper">
                            <Line
                              data={makeSparkLineData(0, brandPrimary)}
                              options={sparklineChartOpts}
                              width={100}
                              height={30}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-danger">
                          <small className="text-muted">
                            PM2.5(ug/m^3)เฉลี่ย
                          </small>
                          <br />
                          <strong className="h4">33</strong>
                          <div className="chart-wrapper">
                            <Line
                              data={makeSparkLineData(1, brandDanger)}
                              options={sparklineChartOpts}
                              width={100}
                              height={30}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-success">
                          <small className="text-muted">
                            AQI(ดัชนีคุณภาพอากาศเฉลี่ย)
                          </small>
                          <br />
                          <strong className="h4">48</strong>
                          <div className="chart-wrapper">
                            <Line
                              data={makeSparkLineData(4, brandSuccess)}
                              options={sparklineChartOpts}
                              width={100}
                              height={30}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Line
                      width={60}
                      height={20}
                      data={{
                        labels: [
                          "เฉลี่ย 24 ชม.",
                          "เฉลี่ย 12 ชม.",
                          "เฉลี่ย 6 ชม.",
                          "เฉลี่ย 3 ชม.",
                          "เฉลี่ย 1 ชม.",
                        ],
                        datasets: [
                          {
                            label: "PM2.5(ug/m^3)",
                            backgroundColor: [brandDanger],
                            borderColor: brandDanger,
                            data: [18, 28, 26, 14, 21],
                          },
                          {
                            label: "AQI(ดัชนีคุณภาพอากาศเฉลี่ย)",
                            borderColor: brandSuccess,
                            data: [70, 78, 50, 62, 56],
                          },
                        ],
                      }}
                      options={{
                        legend: {
                          display: this.props.displayLegend,
                          position: this.props.legendPosition,
                        },
                        scales: {
                          yAxes: [
                            {
                              ticks: {
                                beginAtZero: true,
                                min: 0,
                              },
                            },
                          ],
                        },
                      }}
                    />
                    <img src={AQItable} width="600" height="350" />
                  </Col>
                  <Col xs="12" md="6" xl="6">
                    <div className="chart-wrapper">
                      <Pie
                        width={50}
                        height={25}
                        data={{
                          labels: [
                            "กำลังรอเจ้าหน้าที่ตรวจสอบ",
                            "กำลังดำเนินการชิงเผา",
                            "ชิงเผาเสร็จเรียบร้อย",
                          ],
                          datasets: [
                            {
                              label: "จำนวนคำร้องขอ",
                              backgroundColor: [
                                "rgba(216, 138, 125, 1)",
                                "rgba(255, 206, 86, 0.6)",
                                "rgba(154, 216, 125, 1)",
                              ],
                              borderColor: "rgba(216, 138, 125, 1)",
                              data: [
                                this.state.dataStatus1,
                                this.state.dataStatus2,
                                this.state.dataStatus3,
                              ],
                            },
                          ],
                        }}
                        options={{
                          title: {
                            display: this.props.displayTitle,
                            text: "พื้นที่(จังหวัด) : Chiang Rai",
                            fontSize: 25,
                          },
                          legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition,
                          },
                        }}
                      />
                    </div>

                    <hr className="mt-0" />
                    <div className="chart-wrapper">
                      <Bar
                        width={50}
                        height={20}
                        data={{
                          labels: [
                            "กำลังดำเนินการชิงเผา",
                            "กำลังรอเจ้าหน้าที่ตรวจสอบ",
                            "ชิงเผาเสร็จเรียบร้อย",
                          ],
                          datasets: [
                            {
                              label: "พื้นที่ของแต่ละสถานะ(ตร.ม)",
                              backgroundColor: [
                                "rgba(255, 206, 86, 0.6)",
                                "rgba(216, 138, 125, 1)",
                                "rgba(154, 216, 125, 1)",
                              ],
                              borderColor: "rgba(0, 0, 0, 1)",
                              data: this.state.TotalSpecficStatus1,
                            },
                          ],
                        }}
                        options={{
                          legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition,
                          },
                          scales: {
                            yAxes: [
                              {
                                ticks: {
                                  beginAtZero: true,
                                  min: 0,
                                },
                              },
                            ],
                          },
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                <br />
              </CardBody>
            </Card>
            <Row></Row>
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <Row>
                      <Col sm="5">
                        <CardTitle className="mb-0">
                          กราฟแสดงพื้นที่เผา
                        </CardTitle>
                        <div className="small text-muted">November 2019</div>
                      </Col>
                      <Col sm="7" className="d-none d-sm-inline-block">
                        <Button color="primary" className="float-right">
                          <i className="icon-cloud-download"></i>
                        </Button>
                        <ButtonToolbar
                          className="float-right"
                          aria-label="Toolbar with button groups"
                        >
                          <ButtonGroup
                            className="mr-3"
                            aria-label="First group"
                          >
                            <Button
                              color="outline-secondary"
                              onClick={() => this.onRadioBtnClick(1)}
                              active={this.state.radioSelected === 1}
                            >
                              Day
                            </Button>
                            <Button
                              color="outline-secondary"
                              onClick={() => this.onRadioBtnClick(2)}
                              active={this.state.radioSelected === 2}
                            >
                              Month
                            </Button>
                            <Button
                              color="outline-secondary"
                              onClick={() => this.onRadioBtnClick(3)}
                              active={this.state.radioSelected === 3}
                            >
                              Year
                            </Button>
                          </ButtonGroup>
                        </ButtonToolbar>
                      </Col>
                    </Row>
                    <div
                      className="chart-wrapper"
                      style={{ height: 300 + "px", marginTop: 40 + "px" }}
                    >
                      <Line
                        width={50}
                        height={10}
                        data={{
                          labels: this.state.dataDate,
                          datasets: [
                            {
                              label: "พื้นที่(ตร.ม)",
                              backgroundColor: ["rgba(118, 183, 193, 1)"],
                              borderColor: "rgba(196, 248, 233, 1)",
                              data: this.state.dataArea,
                            },
                          ],
                        }}
                        options={{
                          legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition,
                          },
                          scales: {
                            yAxes: [
                              {
                                ticks: {
                                  beginAtZero: true,
                                  min: 0,
                                },
                              },
                            ],
                          },
                        }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
