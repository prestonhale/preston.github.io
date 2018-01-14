import React, { Component } from 'react';
import {Row, Col, Modal, Carousel} from 'react-bootstrap';
import insurance from './insurance.jpg'
import headcrab from './headcrab.png'
import title from './title.jpg'
import thumbnail from './thumbnail.jpg'


class PriestSimulator extends Component {
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
            <div onClick={this.showModal}>
                {/* <h5 className="project-title text-center">Keep It Groovy</h5> */}
                <div className="project-overlay" />
                <img class="project-thumbnail" src={thumbnail}/>
            </div>
            <div>
                <Modal show={this.state.showModal} onHide={this.closeModal}>
                <Modal.Body>
                    <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} src={title} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} src={headcrab} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} src={insurance} />
                    </Carousel.Item>
                    </Carousel>
                    <Row>
                        <Col md={3}>
                            <h3>Role</h3>
                            <p>Programming</p>
                            <h3>Technologies</h3>
                            <p>C#, Unity</p>
                            <h3>Duration</h3>
                            <p>3 days</p>
                        </Col>
                        <Col md={9}>
                            <a href="https://globalgamejam.org/2016/games/rpg-priest-simulator">
                                <div className="interact-button download-button text-center">
                                    Download Game
                                </div>
                            </a>
                            <h3>Overview</h3>
                            <p>
                                In RPG Priest Simulator, you're not the hero, you're the guy who who has to deal with the
                                heroes.  Play as that enduring RPG role, the village priest.  While you may not get the slay
                                the dragons, you'll see the results of other people's attempts and if you're quick, make a 
                                some cold, hard, gp in the porcess.
                            </p>
                            <h3>Commentary</h3>
                            <p>
                                We may have been tempting fate adding "Game of the Year Edition" to the end there.  I wish 
                                RPG priest simulator game together better than it did.  This was my first in-person jam and
                                the group working on it was actually phenomenal, there was no reason for it not to come together
                                better.
                                <br />
                                <br />
                                In the end, our core mistake was not nailing down the gameplay loop sooner.  We ended up with a
                                ton of excellent code, art, writing, and ideas that never meshed because there was no gameplay
                                on which to hang them.
                                <br />
                                <br />
                                This was a learning experience for me and while I'm not happy with the finished product, I'm still
                                proud of what we accomplished here.
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

export default PriestSimulator;
