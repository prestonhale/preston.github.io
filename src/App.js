import React, { Component } from 'react';
import {Row, Col, Grid, Modal, Carousel} from 'react-bootstrap';

import TheGreatBear from './projectGreatBear/GreatBear.js';
import LargeTheGreatBear from './largeProjectGreatBear/LargeGreatBear.js';
import KeepItGroovy from './projectKeepItGroovy/KeepItGroovy.js';
import PriestSimulator from './projectPriestSimulator/PriestSimulator.js';
import Teampay from './projectTeampay/Teampay.js';

import githubBw from './static/images/github-bw.png';

import './static/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {'showModal': false}
    this.showModal = this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  showModal() {
    this.setState({ showModal: true });
  }
  
  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="content">
        <div class="excuses">
          {/* Q: Why is this written in React?  A: Sorry, yeah.  I was working on a game in React and it just ended up sticking around. The React cruft should disappear the next time I have a free weekend. */}
        </div>
        <Grid fluid={true} id="body">

          <div id="header">
            <Row>
              <div id="title">
                <h1 className="text-center">
                  <div>
                    <span className="the">the</span><span className="preston">PrestonHale</span>
                  </div>
                  <img width={600} title="I was in South Africa for two weeks." src={githubBw} />
                </h1>
              </div>
            </Row>
          </div>

          <div id="projects">
            <Row>
              <Col align="center" md={12}>
                <h2 className="section-title text-center">PROJECTS</h2>
              </Col>
              </Row>
              <Row className='is-flex'>
              <Col className="project-selector" md={3} sm={12}>
                <Col className="project-box selected" md={12}>
                  <TheGreatBear />
                </Col>
                <Col className="project-box" md={12}>
                  <Teampay />
                </Col>
                <Col className="project-box" md={12}>
                  <KeepItGroovy />
                </Col>
                <Col className="project-box" md={12}>
                  <PriestSimulator />
                </Col>
              </Col>
              <Col className="project-viewer" md={9} sm={12}>
                  <LargeTheGreatBear />
              </Col>
            </Row>
          </div>

          <div id="about">
            <Row>
              <Col align="center" md={12}>
                <h2 className="section-title text-center">ABOUT</h2>
              </Col>
            </Row>
            <div className="about-me-info text-center">
              <Row>
                <Col className="no-float" md={3} sm={12}>
                  <p>
                    I'm a software engineer at a start-up called Teampay. We solve the corporate card problem by providing users with a virtual card solution.  I do a little bit of everything but our Slack chatbot is my baby.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={4} mdOffset={4} sm={8} smOffset={2}>
                  <a href="#">
                    <div className="interact-button download-resume text-center">
                      Download Resume
                    </div>
                  </a>
                </Col>
              </Row>
            </div>
          </div>

          <div id="contact">
            <Row>
              <Col>
                <p>Some content</p>
              </Col>
            </Row>
          </div>

        </Grid>
      </div>
     )
   }
 }


export default App;
