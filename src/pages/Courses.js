import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import ModalMenu from '../components/ModalMenu.jsx';

import RedHam from '../assets/images/red-ham.png';
import Logo from '../assets/images/boldlogo.jpeg';
import Img1 from '../assets/images/img1.jpg';
import Img3 from '../assets/images/img3.jpg';
import Img4 from '../assets/images/img4.jpg';
import Img5 from '../assets/images/img5.jpg';

import Iconfb from '../assets/images/iconfacebook.png';
import Icontt from '../assets/images/icontwitter.png';
import Iconlink from '../assets/images/iconlinkedin.png';

const Courses = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (

    <Container fluid className="adjust-height">

      <Helmet>
        <link rel="stylesheet" href="./style/courses.css" />
        <link rel="stylesheet" href="./style/menu.css" />
        <link rel="stylesheet" href="./style/footer.css" />
      </Helmet>

      <Row className="justify-content-center h-100">
        <Col sm={12}>

          <Row className="justify-content-center">
            <Col lg={8} sm={12}> 

              <Row className="pt-4 align-items-center">
                <Col className="pl-0">
                  <Image src={Logo} fluid/>
                </Col>

                <Col className="menu text-right pr-0" sm={1}>
                  
                  <Button bsPrefix className="open-menu p-0" onClick={() => setModalShow(true)}>
                    <Image src={RedHam} fluid/>
                  </Button>
            
                  <ModalMenu
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />

                </Col>
              </Row>

              <Row className="justify-content-center text-center pt-5">
                <Col >
                  <p className="intro"> O que você gostaria de <strong>aprender hoje?</strong> </p>
                </Col>
              </Row>

            </Col>
          </Row>


          <Row className="justify-content-center">
            <Col lg={10}>


              <Row className="pt-5 pb-3">
                <Col>
                  <p className="sub-intro">Todos os cursos</p>
                </Col>
              </Row>

            <Row className="justify-content-between pt-4">

              <Col className="course-col flex-column d-flex" lg={3}>
                  <Link to={'/WebDesign'}>
                    <div className="div-main d-flex flex-column h-100 justify-content-between pb-1">

                      <Image src={Img4} fluid/>

                      <div className="div-title flex-grow-1 p-4">
                        <p className="title" >Web Design</p>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                      </div>

                      <div className="div-text text-center ml-5 mr-5 pt-4">
                        <p>Duração: 16 horas</p>
                        <p>Mentor: Ressie Rottman</p>
                      </div>

                      <div className="div-btn text-center mt-5 mb-3">
                        <Button bsPrefix>Assistir</Button>
                      </div>

                    </div>
                  </Link>
                </Col>

                <Col className="course-col flex-column d-flex" lg={3}>
                  <Link className="h-100" to={''}>
                    <div className="div-main d-flex flex-column h-100 justify-content-between pb-1">

                      <Image src={Img3} fluid/>

                      <div className="div-title flex-grow-1 p-4">
                        <p className="title" >Photography</p>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                      </div>

                      <div className="div-text text-center ml-5 mr-5 pt-4">
                        <p>Duração: 12 horas</p>
                        <p>Mentor: Floyd Fukuda</p>
                      </div>

                      <div className="div-btn text-center mt-5 mb-3">
                        <Button bsPrefix>Assistir</Button>
                      </div>

                    </div>
                  </Link>
                </Col>

                <Col className="course-col flex-column d-flex" lg={3}>
                  <Link className="h-100" to={''}>
                    <div className="div-main d-flex flex-column h-100 justify-content-between pb-1">

                      <Image src={Img1} fluid/>

                      <div className="div-title flex-grow-1 p-4">
                        <p className="title" >Digital Marketing</p>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                      </div>

                      <div className="div-text text-center ml-5 mr-5 pt-4">
                        <p>Duração: 24 horas</p>
                        <p>Mentor: Elena Cully</p>
                      </div>

                      <div className="div-btn text-center mt-5 mb-3">
                        <Button bsPrefix>Assistir</Button>
                      </div>

                    </div>
                  </Link>
                </Col>

                <Col className="course-col flex-column d-flex" lg={3}>
                  <Link className="h-100" to={''}>
                    <div className="div-main d-flex flex-column h-100 justify-content-between pb-1">

                      <Image src={Img5} fluid/>

                      <div className="div-title flex-grow-1 p-4">
                        <p className="title" >SEO Engine</p>
                        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                      </div>

                      <div className="div-text text-center ml-5 mr-5 pt-4">
                        <p>Duração: 16 horas</p>
                        <p>Mentor: Elena Cully</p>
                      </div>

                      <div className="div-btn text-center mt-5 mb-3">
                        <Button bsPrefix>Assistir</Button>
                      </div>

                    </div>
                  </Link>
                </Col>

              </Row>


              <Row className="justify-content-center">
                <Col className="text-center mt-5">
                  <Link className="courses-link" to={''}>
                    Ver mais cursos
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

export default Courses;
