import React, { Component } from 'react';
import {Row, Col, Grid, Modal, Carousel} from 'react-bootstrap';
import logo from './logo.svg';
import greatBear from './greatBear.png'
import keepItGroovy from './keepItGroovy.png'
import './App.css';

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
        <Grid fluid={true} className="full-width">
          <Row>
            <Col className="full-width" sm={12}>
              <div className='color-line'></div>
            </Col>
          </Row>
        </Grid>
        <Grid fluid={true} id="body">
          <Row>
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
                    <Col className="no-float" md={3} sm={12}>
                      <h4>About Me</h4>
                      <div class="small-divider"/>
                      <div className="about-me-section">
                        <p>My name is Preston</p>
                        <p>I'm type code and make worlds. </p>
                      </div>
                    </Col>
                    <Col className="no-float" md={3} sm={12}>
                      <h4>What I've Done</h4>
                      <div class="small-divider"/>
                      <div className="about-me-section">
                        <p>
                          I've been forunate enough to have a huge variety of experiences.  Among other things, I've been the Data Director for NYC's first-ever charter school and managed nearly 100 people at the city's largest Cerebral Palsy care center.
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
                    <div className="project-box">
                      <h5 className="project-title text-center">Teampay</h5>
                      <div className="project-overlay" />
                      <img src={greatBear}/>
                    </div>
                  </Col>
                  <Col md={3} sm={6}>
                    <div className="project-box" onClick={this.showModal}>
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
                </Row>
              </div>
            </Col>
            </Row>
          </Grid>

          <Grid fluid={true} id="contact-container" className="full-width">
            <div className="contact-info">
              <Row>
                <div className="content-divider">
                  <Col md={5} smHidden>
                    <div className="rust-line left" />
                  </Col>
                  <Col md={2} sm={12}>
                    <h3 className="align-middle text-center">Contact</h3>
                  </Col>
                  <Col md={5} sm={12}>
                    <div className="align-middle rust-line right"></div>
                  </Col>
                </div>
              </Row>
              <Row>
                <Col mdOffset={3} md={3} className="contact-form text-center">
                  <Row>
                    <h3>Send a Message</h3>
                  </Row>
                  <form className="form-horizontal">
                    <Row>
                      <Col md={6}>
                        <Row>
                          <Col>
                              <div className="form-group">
                                <div className="col-sm-10">
                                  <input type="name" className="form-control" id="name" placeholder="Name" />
                                </div>
                              </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="form-group">
                              <div className="col-sm-10">
                                <input type="email" className="form-control" id="email" placeholder="Email Address" />
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <div className="form-group">
                              <div className="col-sm-10"> 
                                <input type="subject" className="form-control" id="subject" placeholder="Subject" />
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          <div className="col-sm-10"> 
                            <input type="message" className="form-control" id="message" placeholder="Message" />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </Col>
                <Col md={3} className="social-buttons text-center">
                  <Row>
                    <h3>Find Me</h3>
                  </Row>
                  <Row>
                    <a href="https://twitter.com/theprestonhale">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/theprestonhale">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </Row>
                  <Row>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </Row>
                </Col>
              </Row>
            </div>
          </Grid>

          <div>
            <Modal show={this.state.showModal} onHide={this.closeModal}>
              <Modal.Body>
                <Carousel>
                  <Carousel.Item>
                    <img width={900} height={500} src={greatBear} />
                    <Carousel.Caption>
                      <h4>I'm the Caption 1</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img width={900} height={500} src={keepItGroovy} />
                    <Carousel.Caption>
                      <h4>I'm the Caption 2</h4>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                <Row>
                  <Col md={3}>
                    <h3>Role</h3>
                    <p>Design, Level Editing, Scripting, Texture Editing</p>
                    <h3>Tools Used</h3>
                    <p>Skyrim Creation Kit, Papyrus(Javascript)</p>
                    <h3>Duration</h3>
                    <p>6 months</p>
                  </Col>
                  <Col md={9}>
                    <h3>Overview</h3>
                    <p>
                      The Great Bear adds a new 40-60 minute quest to Skyrim and includes an entirely new world space and a branching
                      story that ends in a multi-phase boss fight.  Particularly I found Skyrim's bosses to be pretty anti-climactic
                      and wanted to see if I could do better within the constraints of their own level design tools.
                    </p>
                    <p>
                      The Great Bear quest is probably the project I'm currently most proud of, if only because its been the most
                      iterative.  Shortly after I released it to the Steam Workshop, and definitely before 
                      I was ready, it was featured on the Workshop front-page for a little over 2 weeks.  I immediately got several
                      thousand players and they were vocal about what was working and what wasn't.  I faced bugs from the gigantic,
                      dialogue wasn't automatically bundled into the build and didn't work at all, to the horribly specific, a 
                      leftover console message.
                    </p>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>
          </div>
      </div>
    )
  }
}


export default App;
