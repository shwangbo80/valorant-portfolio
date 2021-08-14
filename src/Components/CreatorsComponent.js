import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap"
import creatorImg1 from "../Img/creator1.png"
import creatorImg2 from "../Img/creator2.jpeg"
import creatorImg3 from "../Img/creator3.jpeg"


function CreatorsComponent() {
    return (
        <Container fluid className="streamerBg bgContainer">
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <Container>

                        <Row>
                            <Col>
                                <Col md={6} >
                                </Col>
                                <h1 className="big_header my-5 py-5 text-white">CREATORS UNITED</h1>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col md={6}>
                                <div className="videoContainer">
                                    <iframe src="https://www.youtube.com/embed/I-mdsj348fU?playlist=I-mdsj348fU;controls=0&amp;start=48&autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="videoContainer">
                                    <iframe src="https://www.youtube.com/embed/Lxw7Dy-qYbw?playlist=Lxw7Dy-qYbw;controls=0&amp;start=48&autoplay=1&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
                                </div>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={12}>
                                <h1 className="text-white my-5 pt-5">FEATURED CONTENT CREATORS</h1>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col md={4}>
                                <Image src={creatorImg1} fluid className="creatorImg"></Image>
                                <h1 className="text-light text-center mt-3">Jack</h1>
                            </Col>
                            <Col md={4}>
                                <Image src={creatorImg2} fluid className="creatorImg"></Image>
                                <h1 className="text-light text-center mt-3">Laura</h1>
                            </Col>
                            <Col md={4}>
                                <Image src={creatorImg3} fluid className="creatorImg"></Image>
                                <h1 className="text-light text-center mt-3">Kathy</h1>
                            </Col>

                        </Row>
                    </Container>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Container>
    );
}

export default CreatorsComponent;
