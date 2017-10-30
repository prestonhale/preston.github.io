import React, { Component } from 'react';
import {Row, Col, Grid, Modal, Carousel} from 'react-bootstrap';
import thumbnail from './thumbnail.jpg'
import straight from './straight.png'
import title from './title.png'
import twisted from './twisted.png'


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
                {/* <h5 className="project-title text-center">Keep It Groovy</h5> */}
                <div className="project-overlay" />
                <img src={thumbnail}/>
            </div>
            <div>
                <Modal show={this.state.showModal} onHide={this.closeModal}>
                <Modal.Body>
                    <Carousel>
                    <Carousel.Item>
                        <img width={900} height={500} src={twisted} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} src={straight} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} src={title} />
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
                        <a href="https://globalgamejam.org/2017/games/keep-it-groovy">
                            <div className="interact-button download-button text-center">
                                Download Game
                            </div>
                        </a>
                        <h3>Overview</h3>
                        <p>
                            Keep it Groovy is a fast-paced, explicitly multiplayer game.  Two teams compete in two phases.
                            In the first phase Team A draws grooves into the track of a record and Team B tries to trace 
                            those grooves.  In the second phase the roles reverse.  Who ever last longest wins/is the grooviest.
                            Its a simple concept and a 100% original soundtrack (and effects!), themetically on-point art and 
                            a hyper-speed competition-fueling gameplay bring it all home.
                        </p>
                        <h3>Commentary</h3>
                        <p>
                            Keep it Groovy is probably the most fun I've had at a game jam.  That's the product of two things.
                            First, the concept is just phenomenal.  Long after the jam was over the entire team realized that
                            we had no idea when the idea for the name came about, it was just sort of inevitable.  Second, 
                            I don't think it'd be possible to come up with a better team composition.  We were 2 programmers, 
                            an artist and a composer.  Everyone was put to WORK, and by day 2 we already felt pretty good about
                            the product.
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
