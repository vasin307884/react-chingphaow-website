import React, { Component } from "react";
import { Table, Card, CardHeader, CardBody, Badge } from "reactstrap";
export default class Stafflist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffdata:[],
      loading: false,
      error: null
    };
  }
  fetchRequestData() {
    fetch("https://chingphaow-application.herokuapp.com/staffs/")
      .then(response => response.json())
      .then(response => {
        this.setState({
          isLoading: false,
          staffdata: response.data,
          refreshing: false
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  componentDidMount() {
    this.fetchRequestData();
  }
  updateFilter = (event) => {
    this.setState({ value: event.target.value })
 }
  render() {
    return (
      <div className="animated fadeIn">
        <label>
          รายชื่อสตาฟ :
          <select
            onSelect={this.state.value}
            onChange={this.updateFilter}>
            {this.state.staffdata.map((staff) => {
              return (
                <option key={staff.staff_id} value={this.state.value}>
                  {staff.first_name} {staff.last_name}
                </option>
              )                            
            })}
            
          </select>
        </label>
      </div>
    );
  }
}
