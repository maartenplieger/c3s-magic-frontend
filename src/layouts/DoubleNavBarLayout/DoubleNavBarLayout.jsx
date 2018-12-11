import React, { Component } from 'react';
import { Row } from 'reactstrap';
export default class NavBarLayout extends Component {
  render () {
    const { route } = this.props;
    const { header, secondNavbar, viewComponent } = route;
    return (
      <div className='innerContainer'>
        { header
          ? <Row className='Header' tag='header'>
            {React.cloneElement(header, this.props) || 'HeaderLayout Oops'}
          </Row>
          : null }
        { secondNavbar
          ? <Row className='secondNavbar'>
            {React.cloneElement(secondNavbar, this.props) || 'SecondNavbar Oops'}
          </Row>
          : null }
        { viewComponent
          ? <Row className='ViewComponent' tag='main'>
            { viewComponent }
          </Row>
          : null }
        { /* <Row className='MainSection'>
          {this.props.children}
        </Row> */ }
      </div>
    );
  }
}
