import React, { Component } from 'react';
import {Row, Col, Grid, Modal, Carousel} from 'react-bootstrap';
import './GreatBear.css'
import greatBear from './greatBear.png'

class TheGreatBear extends Component {
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
        <div>
            <div className="project-box" onClick={this.showModal}>
                <h5 className="project-title text-center">The Great Bear</h5>
                <div className="project-overlay" />
                <img src={greatBear}/>
            </div>
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


export default TheGreatBear;
