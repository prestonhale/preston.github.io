import React, { Component } from 'react';
import {Row, Col, Grid, Modal, Carousel} from 'react-bootstrap';
import thumbnail from './thumbnail.jpg'

class Teampay extends Component {
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
                <div className="project-overlay" />
                <img src={thumbnail}/>
            </div>
            <div>
                <Modal show={this.state.showModal} onHide={this.closeModal}>
                <Modal.Body>
                    <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} src={thumbnail} />
                    </Carousel.Item>
                    </Carousel>
                    <Row>
                    <Col md={3}>
                        <h3>Role</h3>
                        <p>Software Developer</p>
                        <h3>Duration</h3>
                        <p>Aug 2016 - Present</p>
                    </Col>
                    <Col md={9}>
                        <h3>Overview</h3>
                        <p>
                        </p>
                        <h3>Commentary</h3>
                        <p>
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


export default Teampay;
