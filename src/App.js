import React, { Component } from 'react';
import {Row, Col, Grid, Modal, Carousel} from 'react-bootstrap';

import TheGreatBear from './projectGreatBear/GreatBear.js';
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
          <Row>
            <Col className="centered-column" md={8} mdOffset={2} sm={12}>
              <div id="header">
                <div id="title">
                  <h1 className="text-center">
                    <div>
                      <span className="the">the</span><span className="preston">PrestonHale</span>
                    </div>
                    <img width={600} title="I was in South Africa for two weeks." src={githubBw} />
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
                      <div className="interact-button download-resume text-center">
                        Download Resume
                      </div>
                    </a>
                  </Col>
                </Row>
                <div className="about-me-info text-center">
                  <Row>
                    <Col className="no-float" md={3} sm={12}>
                      <h4>About Me</h4>
                      <div class="small-divider"/>
                      <div className="about-me-section">
                        <p>I am a programmer of many languages, a virtual world explorer (and sometimes actual world explorer), and enthusiast for all things tech, nerd, gaming, and cold brew. If you want to start a stupid long conversation ask me about my bike or my favorite RPG.</p>
                      </div>
                    </Col>
                    <Col className="no-float" md={3} sm={12}>
                      <h4>What I've Done</h4>
                      <div class="small-divider"/>
                      <div className="about-me-section">
                        <p>
                          I've been forunate enough to have a huge variety of experiences.  Among other things, I've been the Data Director for a charter school, managed nearly 100 people at the city's largest Cerebral Palsy care center, and first-hire at a startup.
                        </p>
                      </div>
                    </Col>
                    <Col className="no-float" md={3} sm={12}>
                      <h4>What I'm Doing</h4>
                      <div class="small-divider"/>
                      <div className="about-me-section">
                        <p>
                          I'm a software engineer at a start-up called Teampay. We solve the corporate card problem by providing users with a virtual card solution.  I do a little bit of everything but our Slack chatbot is my baby.
                        </p>
                      </div>
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
                    <Teampay />
                  </Col>
                  <Col md={3} sm={6}>
                    <TheGreatBear />
                  </Col>
                  <Col md={3} sm={6}>
                    <KeepItGroovy />
                  </Col>
                  <Col md={3} sm={6}>
                    <PriestSimulator />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}


export default App;
