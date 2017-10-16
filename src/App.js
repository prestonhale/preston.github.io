import React, { Component } from 'react';
import Map from './map/Map.js';
import {Row, Col, Grid} from 'react-bootstrap';
import logo from './logo.svg';
import greatBear from './greatBear.png'
import keepItGroovy from './keepItGroovy.png'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {'contentType': 'home'}
  }
  
  render() {
    return (
      <Grid fluid={true} id="body">
        <Row>
          <div className='color-line'></div>
          <Col md={8} mdOffset={2} sm={12}>
            <div id="header">
              <div id="title">
                <h1 className="text-center">
                  <span className="the">the</span><span className="preston">PrestonHale</span>
                </h1>
              </div>
            </div>

            <div className="content-divider">
              <Row>
                <Col md={5} smHidden>
                  <div className="rust-line" />
                </Col>
                <Col md={2} sm={12}>
                  <h3 className="align-middle text-center">About</h3>
                </Col>
                <Col md={5} sm={12}>
                  <div className="align-middle rust-line"></div>
                </Col>
              </Row>
            </div>

            <div id="about">
              <Row>
                <Col md={4} mdOffset={4} sm={8} smOffset={2}>
                  <a href="#">
                    <div className="download-resume text-center">
                      Download Resume
                    </div>
                  </a>
                </Col>
              </Row>
              <div className="about-me-info text-center">
                <Row>
                  <Col md={3} sm={12}>
                    <h4>About Me</h4>
                  </Col>
                  <Col md={3} sm={12}>
                    <h4>What I've Done</h4>
                  </Col>
                  <Col md={3} sm={12}>
                    <h4>What I'm Doing</h4>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} sm={12}>
                      <p>
                        I
                      </p>
                  </Col>
                  <Col md={3} sm={12}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada lacus vitae congue efficitur. Etiam vel neque ultricies, feugiat arcu sit amet, eleifend purus.
                      </p>
                  </Col>
                  <Col md={3} sm={12}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum malesuada lacus vitae congue efficitur. Etiam vel neque ultricies, feugiat arcu sit amet, eleifend purus.
                      </p>
                  </Col>
                </Row>
              </div>
            </div>
            
            <div className="content-divider">
              <Row>
                <Col md={5} smHidden>
                  <div className="rust-line" />
                </Col>
                <Col md={2} sm={12}>
                  <h3 className="align-middle text-center">Projects</h3>
                </Col>
                <Col md={5} sm={12}>
                  <div className="align-middle rust-line"></div>
                </Col>
              </Row>
              <Row>
                <Col md={3} sm={6}>
                  <div className="project-box">
                    <h5 className="project-title text-center">The Great Bear</h5>
                    <div className="project-overlay" />
                    <img src={greatBear}/>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <div className="project-box">
                    <h5 className="project-title text-center">Keep It Groovy</h5>
                      <div className="project-overlay" />
                      <img src={keepItGroovy}/>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <div className="project-box">
                    <h5 className="project-title text-center">RPG Priest Simulator: GOTY</h5>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <div className="project-box">
                    <h5 className="project-title text-center">Gather</h5>
                  </div>
                </Col>
              </Row>
            </div>

            <div className="content-divider">
              <Row>
                <Col md={5} smHidden>
                  <div className="rust-line" />
                </Col>
                <Col md={2} sm={12}>
                  <h3 className="align-middle text-center">Contact</h3>
                </Col>
                <Col md={5} sm={12}>
                  <div className="align-middle rust-line"></div>
                </Col>
              </Row>
            </div>

          </Col>
        </Row>
      </Grid>
    )
  }
}


export default App;
