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
        <div fluid={true} id="body">

          <div id="header">
            <div class="row">
              <div id="title">
                <h1 className="text-center">
                  <div>
                    <span className="the">the</span><span className="preston">PrestonHale</span>
                  </div>
                  <img width={600} title="I was in South Africa for two weeks." src={githubBw} />
                </h1>
              </div>
            </div>
          </div>

          <div id="projects">
            <div class="section-header">
              <div class="row">
                <div class="col-md-12" align="center">
                  <h2 className="section-title text-center">PROJECTS</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12" align="center">
                  <div class="project-bar short-bar"></div>
                </div>
              </div>
            </div>
            <div class="row is-flex">
              <div class="project-selector col-md-3 col-sm-12">
                <div class="col-md-12 project-box selected">
                  <TheGreatBear />
                </div>
                <div class="col-md-12 project-box">
                  <Teampay />
                </div>
                <div class="col-md-12 project-box">
                  <KeepItGroovy />
                </div>
                <div class="col-md-12 project-box">
                  <PriestSimulator />
                </div>
              </div>
              <div className="col-md-9 col-sm-12 project-viewer">
                  <LargeTheGreatBear />
              </div>
            </div>
          </div>

          <div id="about">
            <div class="section-header">
              <div class="row">
                <div class="col-md-12" align="center">
                  <h2 className="section-title text-center">ABOUT</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12" align="center">
                  <div class="short-bar about-bar"></div>
                </div>
              </div>
            </div>
            <div className="about-me-info text-center">
              <div class="row">
                <div class="col-md-3 col-sm-12 no-float">
                  <p>
                    I'm a software engineer at a start-up called Teampay. We solve the corporate card problem by providing users with a virtual card solution.  I do a little bit of everything but our Slack chatbot is my baby.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset=2">
                  <a href="#">
                    <div className="interact-button download-resume text-center">
                      Download Resume
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="contact">
            <div class="row">
              <div class="col-md-12">
                <p>Some content</p>
              </div>
            </div>
          </div>

        </div>
      </div>
     )
   }
 }


export default App;
