/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { NavLink,Link,withRouter } from 'react-router-dom';
import {  UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
// import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode'
import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from './asset/chingphaow.png'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      role:'',
      errors: {}
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      role : decoded.role
    })
  }
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
    alert("ออกจากระบบ!");
  }
  render() {
    const staffLink = (
      <ul className="navbar-nav">
        <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
            <NavLink to="/request" className="nav-link" >Request</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
          </NavItem>
        </Nav>
        <li className="nav-item">
          <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

    const adminLink = (
      <ul className="navbar-nav">
        <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
            <NavLink to="/request" className="nav-link" >Request</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/stafflist" className="nav-link" >Staff List</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink to="/register" className="nav-link" >Staff registration</NavLink>
          </NavItem>
        </Nav>
        <li className="nav-item">
          <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height:55, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
            <NavLink to="/home" className="nav-link" >Home</NavLink>
          </NavItem>
          {this.state.role==='admin' ? adminLink : staffLink}
        </Nav>
        <Nav className="ml-auto" navbar>
          {/* <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem> */}
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src="https://s3-ap-southeast-1.amazonaws.com/img-in-th/7dfef7c0af70785f8950a0ebac70bbe3.png" className="img-avatar" alt="admin@bootstrapmaster.com" />
              {this.state.first_name}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <Link to="/profile">
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              </Link>
              {/* <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem> */}
              {/* <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem divider /> */}
              <DropdownItem onClick={this.logOut.bind(this)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        <AppAsideToggler className="d-lg-none" mobile />
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default withRouter(DefaultHeader);
