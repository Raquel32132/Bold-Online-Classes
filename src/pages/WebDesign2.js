import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import ModalMenu from '../components/ModalMenu.jsx';
import Video from '../components/ModalVideoVimeo.jsx';

import RedHam from '../assets/images/red-ham.png';
import Logo from '../assets/images/boldlogo.jpeg';
import Seta from '../assets/images/seta.png';
import Img8 from '../assets/images/img8.jpg';
import Img9 from '../assets/images/img9.jpg';
import Img6 from '../assets/images/img6.jpg';
import Img11 from '../assets/images/img11.jpg';

import Iconfb from '../assets/images/iconfacebook.png';
import Icontt from '../assets/images/icontwitter.png';
import Iconlink from '../assets/images/iconlinkedin.png';

const WebDesign2 = () => {

    const [modalShow, setModalShow] = React.useState(false);
  
    return (
  
      <Container fluid className="adjust-height">
  
        <Helmet>
          <link rel="stylesheet" href="./style/web-design1.css" />
          <link rel="stylesheet" href="./style/menu.css" />
          <link rel="stylesheet" href="./style/footer.css" />
        </Helmet>
  
        <Row className="justify-content-center h-100">
          <Col className="mb-3" lg={12}>
  
            <Row className="justify-content-center">
              <Col lg={8}> 
  
                <Row className="pt-4 align-items-center">
                  <Col className="pl-0">
                    <Image src={Logo} fluid/>
                  </Col>
  
                  <Col className="menu text-right pr-0" lg={1}> 
                    <Button bsPrefix className="open-menu p-0" onClick={() => setModalShow(true)}>
                      <Image src={RedHam} fluid/>
                    </Button>
                    <ModalMenu
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </Col>
                </Row>

                <Row className="justify-content-center mt-5 mb-3">
                  <Col className="text-center mt-5">
                    <h1 className="title">Web Design Completo</h1>
                    <h2 className="intro">Estrutura Básica do Documento HTML</h2>
                  </Col>
                </Row>

                

              </Col>
            </Row>

            <Row className="justify-content-center mt-5">
              <Col lg={8}>

                <div className="video text-center mb-5 pb-5">
                    <Video/>
                </div>


                <h2 className="title2">Introdução</h2>

                <div className="content mt-5 pr-4 mb-5">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>

                <Row>
                    <Col className="next-classe text-right p-0 mb-5">
                        <Link to={''}>Continuar para a próxima aula</Link>
                    </Col>
                    <Col lg={1}>
                        <Link to={''}>
                            <Image src={Seta}/>
                        </Link>
                    </Col>
                </Row>

              </Col>

              <Col lg={10}>
                <div className="offset-md-1">
                    <h2 className="title2">Próximas aulas</h2>
                </div>

                <Row className="mt-5 pt-5">
                    <Col className="classe-col flex-column d-flex mb-3" lg={3}>
                        <Link className="h-100" to={''}>
                            <div className="div-main d-flex flex-column h-100 justify-content-between pb-1">
                            <Image src={Img6} fluid/>
                            <div className="div-main2 flex-grow-1 pl-4 pr-4 pt-4">
                                <p className="div-title">Os Elementos HTML (Tags)</p>
                                <p className="div-text">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</p>
                            </div>
                            </div>
                        </Link>
                    </Col>

                    <Col className="classe-col flex-column d-flex mb-3" lg={3}>
                        <Link className="h-100" to={''}>
                            <div className="div-main d-flex flex-column h-100 justify-content-between pb-1">
                            <Image src={Img11} fluid/>
                            <div className="div-main2 flex-grow-1 pl-4 pr-4 pt-4">
                                <p className="div-title">Os Atributos HTML</p>
                                <p className="div-text">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</p>
                            </div>
                            </div>
                        </Link>
                    </Col>

                    <Col className="classe-col flex-column d-flex mb-3" lg={3}>
                        <Link className="h-100" to={''}>
                            <div className="div-main d-flex flex-column h-100 justify-content-between">
                              <Image src={Img8} fluid/>
                              <div className="div-main2 flex-grow-1 pl-4 pr-4 pt-4">
                                <p className="div-title">Formatação da página (Styles)</p>
                                <p className="div-text">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</p>
                              </div>
                            </div>
                        </Link>
                    </Col>

                    <Col className="classe-col flex-column d-flex mb-3" lg={3}>
                      <Link className="h-100" to={''}>
                        <div className="div-main d-flex flex-column h-100 justify-content-between pb-1">
                          <Image src={Img9} fluid/>
                          <div className="div-main2 flex-grow-1 pl-4 pr-4 pt-4">
                            <p className="div-title">O Elemento DIV (Parte 1)</p>
                            <p className="div-text">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad</p>
                          </div>
                        </div>
                      </Link>
                    </Col>
                </Row>
              </Col>
            </Row>

            <Col lg={12}>
            <Row className="justify-content-center pt-5 pb-5">
              <Col lg={8}>

                <Row className="pt-5">
                  <Col lg={3} className="p-0">
                    <p className="contact-text">Entre em contato</p>
                  </Col>
                </Row>

                <Row>
                  <Col lg={3}>
                    <Row>

                    <Col lg={10}>
                      <Row>
                        <Col lg={2} className="p-0">
                        <Image src={Iconfb} fluid/>
                        </Col>
                        <Col lg={2} className="p-0">
                        <Image src={Icontt} fluid/>
                        </Col>
                        <Col lg={2} className="p-0">
                        <Image src={Iconlink} fluid/>
                        </Col>
                      </Row>
                    </Col>

                    </Row>
                  </Col>

                  <Col lg={6} className="p-0 text-center">
                    <Link to={'/'} className="contact-button">Fale conosco</Link>
                  </Col>
                </Row>

                <Row>
                  <Col className="p-0 pt-5 mt-5">
                    <p className="trademark">Bold Online Courses®</p>
                  </Col>
                </Row>

              </Col>
            </Row>
          </Col>
  
          </Col>
        </Row>
      </Container>
  
    );
  }
  
  export default WebDesign2;