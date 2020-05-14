// import React, { Component, lazy, Suspense } from 'react';
import React, { Component } from 'react';
import { Bar, Line, Pie, Polar, Radar, } from 'react-chartjs-2';
import axios from 'axios';

import {
  Badge,
  Button,
  // ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  // DropdownItem,
  // DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Container,

  // Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { number } from 'prop-types';
import AQItable from './asset/aqi.JPG'
// const Widget03 = lazy(() => import('../../views/Widgets/Widget03'));

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
// const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};
const pie = {
  labels: [
    'Red',
    'Green',
    'Yellow',
  ],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
    }],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};
const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40, 50],
    },
  ],
};
const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
// const socialBoxData = [
//   { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
//   { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
//   { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
//   { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
// ];

// const makeSocialBoxData = (dataSetNo) => {
//   const dataset = socialBoxData[dataSetNo];
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         backgroundColor: 'rgba(255,255,255,.1)',
//         borderColor: 'rgba(255,255,255,.55)',
//         pointHoverBackgroundColor: '#fff',
//         borderWidth: 2,
//         data: dataset.data,
//         label: dataset.label,
//       },
//     ],
//   };
//   return () => data;
// };

// const socialChartOpts = {
//   tooltips: {
//     enabled: false,
//     custom: CustomTooltips
//   },
//   responsive: true,
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   scales: {
//     xAxes: [
//       {
//         display: false,
//       }],
//     yAxes: [
//       {
//         display: false,
//       }],
//   },
//   elements: {
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//       hoverBorderWidth: 3,
//     },
//   },
// };

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
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
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
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

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function (tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Dashboard extends Component {
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'Chiang Rai'
  }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      chartData: {}
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
        const ArrayDataStatus1 = response.data.data.filter((item) => item.statusValue == "กำลังรอเจ้าหน้าที่ตรวจสอบ").length;
        const ArrayDataStatus2 = response.data.data.filter((item) => item.statusValue == "กำลังดำเนินการชิงเผา").length;
        const ArrayDataStatus3 = response.data.data.filter((item) => item.statusValue == "ชิงเผาเสร็จเรียบร้อยแล้ว").length;
        const ArrayArea = response.data.data.map((item) => item.area);
        const ArrayDate = response.data.data.map((item) => item.lastupdate);
        this.setState({
          dataAmount: getAmount,
          dataStatus1: ArrayDataStatus1,
          dataStatus2: ArrayDataStatus2,
          dataStatus3: ArrayDataStatus3,
          dataArea : ArrayArea,
          dataDate : ArrayDate
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
    .get("https://chingphaow-application.herokuapp.com/requests/totalArea")
    .then((response)=>{
      const getTotalArea = response.data.data.map((item)=>item.Total) 
      this.setState({
        TotalArea : getTotalArea
      })
    })
    axios
    .get("https://chingphaow-application.herokuapp.com/requests/totalSpecific")
    .then((response)=>{
      const getSpecificStatus1 = response.data.data.map((item)=>item.Totalspecific)
      const getSpecificStatus2 = response.data.data.map((item)=>item.statusValue)
      this.setState({
        TotalSpecficStatus1 : getSpecificStatus1,
        TotalSpecficStatus2 : getSpecificStatus2
      })
    })
  }
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  render() {
    return (
      <div className="animated fadeIn">
        <div className="App-header">
          <h2>Dashboard</h2>
          <label>
            พื้นที่ : 
            <select
              onSelect={this.state.value}
              onChange={this.updateFilter}>
              <option value={this.state.statusValue} label="เชียงราย"></option>
            </select>
          </label>
          {/* <h2>จำนวนคำขอทั้งหมด : {this.state.dataAmount}</h2>
          <h2>กำลังรอเจ้าหน้าที่ตรวจสอบ : {this.state.dataStatus1}</h2>
          <h2>กำลังดำเนินการชิงเผา : {this.state.dataStatus2}</h2>
          <h2>ชิงเผาเสร็จเรียบร้อยแล้ว : {this.state.dataStatus3}</h2>
          <h2>พื้นที่ที่เผาไปโดยประมาณ : {this.state.TotalArea} ตร.ม หรือ {this.state.TotalArea/1600} ไร่(โดยประมาณ)</h2> */}
        </div>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                    {/* <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu> */}
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">{this.state.dataAmount}</div>
                <div>จำนวนคำขอทั้งหมด</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger ">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                    {/* <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu> */}
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">{this.state.dataStatus1}</div>
                <div>กำลังรอเจ้าหน้าที่ตรวจสอบ</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                    {/* <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu> */}
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">{this.state.dataStatus2}</div>
                <div>กำลังดำเนินการชิงเผา</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-success ">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                    {/* <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu> */}
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">{this.state.dataStatus3}</div>
                <div>ชิงเผาเสร็จเรียบร้อยแล้ว</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
          </Col>
          
        </Row>

        <Row>
          <Col>
            <Card>
              <CardHeader>
              พื้นที่ทั้งหมด
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" md="6" xl="6">
                    <Row>
                      <Col sm="6">
                        <div className="callout callout-info">
                          <small className="text-muted">พื้นที่ทั้งหมด</small>
                          <br />
                          <strong className="h4">{this.state.TotalArea} ตร.ม / </strong><br></br>
                          <strong className="h4">{this.state.TotalArea/1600} ไร่</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-danger">
                          <small className="text-muted">PM2.5(ug/m^3)เฉลี่ย</small>
                          <br />
                          <strong className="h4">33</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>                        
                      </Col>
                      <Col sm="6">
                        <div className="callout callout-success">
                          <small className="text-muted">AQI(ดัชนีคุณภาพอากาศเฉลี่ย)</small>
                          <br />
                          <strong className="h4">48</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(4, brandSuccess)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>                        
                      </Col>
                    </Row>
                    <Line
                        width={60}
                        height={20}
                        data={{
                          labels:['เฉลี่ย 24 ชม.','เฉลี่ย 12 ชม.','เฉลี่ย 6 ชม.','เฉลี่ย 3 ชม.','เฉลี่ย 1 ชม.'],
                          datasets: [{
                            label: "PM2.5(ug/m^3)",
                            backgroundColor: [
                              brandDanger,
                            ],
                            borderColor: brandDanger,
                            data: [18,28,26,14,21],
                          },                        
                          {
                            label: "AQI(ดัชนีคุณภาพอากาศเฉลี่ย)",                            
                            borderColor: brandSuccess,
                            data: [70,78,50,62,56],
                          }]
                        }}
                        options={{
                          legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                          },
                          scales: {
                            yAxes: [{
                              ticks: {
                                beginAtZero: true,
                                min: 0
                              }
                            }]
                          }
                        }}
                      />
                      <img src={AQItable} width='600' height='350' />
                    {/* <hr className="mt-0" />
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Monday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="34" />
                        <Progress className="progress-xs" color="danger" value="78" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Tuesday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="56" />
                        <Progress className="progress-xs" color="danger" value="94" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Wednesday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="12" />
                        <Progress className="progress-xs" color="danger" value="67" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Thursday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="43" />
                        <Progress className="progress-xs" color="danger" value="91" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Friday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="22" />
                        <Progress className="progress-xs" color="danger" value="73" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Saturday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="53" />
                        <Progress className="progress-xs" color="danger" value="82" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Sunday
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="info" value="9" />
                        <Progress className="progress-xs" color="danger" value="69" />
                      </div>
                    </div>
                    <div className="legend text-center">
                      <small>
                        <sup className="px-1"><Badge pill color="info">&nbsp;</Badge></sup>
                        New clients
                        &nbsp;
                        <sup className="px-1"><Badge pill color="danger">&nbsp;</Badge></sup>
                        Recurring clients
                      </small>
                    </div> */}
                  </Col>
                  <Col xs="12" md="6" xl="6">
                    <div className="chart-wrapper">
                      <Pie
                        width={50}
                        height={25}
                        data={{
                          labels: ["กำลังรอเจ้าหน้าที่ตรวจสอบ", "กำลังดำเนินการชิงเผา", "ชิงเผาเสร็จเรียบร้อย"],
                          datasets: [{
                            label: "จำนวนคำร้องขอ",
                            backgroundColor: [
                              'rgba(216, 138, 125, 1)',
                              'rgba(255, 206, 86, 0.6)',
                              'rgba(154, 216, 125, 1)',
                            ],
                            borderColor: 'rgba(216, 138, 125, 1)',
                            data: [this.state.dataStatus1, this.state.dataStatus2, this.state.dataStatus3],
                          }]
                        }}
                        options={{
                          title: {
                            display: this.props.displayTitle,
                            text: 'พื้นที่(จังหวัด) : Chiang Rai',
                            fontSize: 25
                          },
                          legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                          }
                        }}
                      />
                    </div>

                    <hr className="mt-0" />
                    <div className="chart-wrapper">
                      <Bar
                        width={50}
                        height={20}
                        data={{
                          labels: ["กำลังดำเนินการชิงเผา","กำลังรอเจ้าหน้าที่ตรวจสอบ", "ชิงเผาเสร็จเรียบร้อย"],
                          datasets: [{
                            label: "พื้นที่ของแต่ละสถานะ(ตร.ม)",
                            backgroundColor: [
                              'rgba(255, 206, 86, 0.6)',
                              'rgba(216, 138, 125, 1)',
                              'rgba(154, 216, 125, 1)',
                            ],
                            borderColor: 'rgba(0, 0, 0, 1)',
                            data: this.state.TotalSpecficStatus1,
                          }]
                        }}
                        options={{                         
                          legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                          },
                          scales: {
                            yAxes: [{
                              ticks: {
                                beginAtZero: true,
                                min: 0
                              }
                            }]
                          }
                        }}
                      />
                    </div>

                  </Col>
                </Row>
                <br />


              </CardBody>
            </Card>
            <Row>
              {/* <Col>
                <Card>
                  <CardBody>
                    <Row>
                      <Col sm="5">
                        <CardTitle className="mb-0">Traffic</CardTitle>

                      </Col>
                      <Container>
                        <Row>
                          <Col xs="12" sm="6" lg="4">
                            <Card className="text-white bg-dark  ">
                              <CardBody className="pb-0">
                                <div className="text-value">1658</div>
                                <div>Members online</div>
                              </CardBody>
                              <div className="chart-wrapper" style={{ height: '70px' }}>
                                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
                              </div>
                            </Card>
                          </Col>
                          <Col xs="12" sm="6" lg="4">
                            <Card className="text-white bg-dark ">
                              <CardBody className="pb-0">

                                <div className="text-value">94</div>
                                <div>Members online</div>
                              </CardBody>
                              <div className="chart-wrapper" style={{ height: '70px' }}>
                                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
                              </div>
                            </Card>
                          </Col>
                          <br />
                          <Col xs="12" sm="6" lg="4">
                            <Card className="text-white bg-dark ">
                              <CardBody className="pb-0">

                                <div className="text-value">375</div>
                                <div>Members online</div>
                              </CardBody>
                              <div className="chart-wrapper" style={{ height: '70px' }}>
                                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
                              </div>
                            </Card>
                          </Col>
                          <br></br>
                          <Col xs="12" sm="6" lg="3">
                            <Card className="text-white bg-dark">
                              <CardBody className="pb-0">

                                <div className="text-value">1</div>
                                <div>Members online</div>
                              </CardBody>

                            </Card>
                          </Col>
                          <Col xs="12" sm="6" lg="3">
                            <Card className="text-white bg-dark">
                              <CardBody className="pb-0">
                                <div className="text-value">39</div>
                                <div>Members online</div>
                              </CardBody>

                            </Card>
                          </Col>
                          <Col xs="12" sm="6" lg="3">
                            <Card className="text-white bg-dark">
                              <CardBody className="pb-0">
                                <div className="text-value">97</div>
                                <div>Members online</div>
                              </CardBody>

                            </Card>
                          </Col>
                          <Col xs="12" sm="6" lg="3">
                            <Card className="text-white bg-dark">
                              <CardBody className="pb-0">
                                <div className="text-value">709</div>
                                <div>Members online</div>
                              </CardBody>

                            </Card>
                          </Col>
                        </Row>
                      </Container>
                    </Row>
                  </CardBody>

                </Card>
              </Col> */}
            </Row>
             <Row>
              <Col>
                <Card>
                  <CardBody>
                    <Row>
                      <Col sm="5">
                        <CardTitle className="mb-0">กราฟแสดงพื้นที่เผา</CardTitle>
                        <div className="small text-muted">November 2019</div>
                      </Col>
                      <Col sm="7" className="d-none d-sm-inline-block">
                        <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                        <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                          <ButtonGroup className="mr-3" aria-label="First group">
                            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                          </ButtonGroup>
                        </ButtonToolbar>
                      </Col>
                    </Row>
                    <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                      {/* <Line data={mainChart} options={mainChartOpts} height={300} /> */}
                      <Line
                        width={50}
                        height={10}
                        data={{
                          labels:this.state.dataDate,
                          datasets: [{
                            label: "พื้นที่(ตร.ม)",
                            backgroundColor: [
                              'rgba(118, 183, 193, 1)',
                            ],
                            borderColor: 'rgba(196, 248, 233, 1)',
                            data: this.state.dataArea,
                          }]
                        }}
                        options={{
                          legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                          },
                          scales: {
                            yAxes: [{
                              ticks: {
                                beginAtZero: true,
                                min: 0
                              }
                            }]
                          }
                        }}
                      />
                    </div>
                  </CardBody>
                  {/* <CardFooter>
                    <Row className="text-center">
                    <Col sm={12} md className="mb-sm-2 mb-0">
                        <div className="text-muted">กำลังรอเผา</div>
                        <strong>22.123 ตร.ม (80%)</strong>
                        <Progress className="progress-xs mt-2" color="danger" value="80" />
                      </Col>
                      <Col sm={12} md className="mb-sm-2 mb-0">
                        <div className="text-muted">กำลังเผา</div>
                        <strong>78.706 ตร.ม (60%)</strong>
                        <Progress className="progress-xs mt-2" color="warning" value="60" />
                      </Col>
                      <Col sm={12} md className="mb-sm-2 mb-0">
                        <div className="text-muted">เผาเสร็จ</div>
                        <strong>29.703 ตร.ม (40%)</strong>
                        <Progress className="progress-xs mt-2" color="success" value="40" />
                      </Col>                      
                    </Row>
                  </CardFooter> */}
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
