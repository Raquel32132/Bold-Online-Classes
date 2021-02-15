import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import ModalMenu from '../components/ModalMenu.jsx';

import RedHam from '../assets/images/red-ham.png';
import Logo from '../assets/images/boldlogo.jpeg';
import Img1 from '../assets/images/img1.jpg';
import Img2 from '../assets/images/img2.jpg';
import Img3 from '../assets/images/img3.jpg';
import Img4 from '../assets/images/img4.jpg';
import Img5 from '../assets/images/img5.jpg';
import Img6 from '../assets/images/img6.jpg';
import Iconfb from '../assets/images/iconfacebook.png';
import Icontt from '../assets/images/icontwitter.png';
import Iconlink from '../assets/images/iconlinkedin.png';


const Home = () => {

  const [modalShow, setModalShow] = React.useState(false);

  return (

    <Container fluid className="adjust-height">

      <Helmet>
        <link rel="stylesheet" href="./style/home.css" />
        <link rel="stylesheet" href="./style/menu.css" />
        <link rel="stylesheet" href="./style/footer.css" />
      </Helmet>

      <Row className="justify-content-center h-100">
        <Col className ="gradient" lg={12}>

          <Row className="justify-content-center pb-5 mb-3">
            <Col lg={8}> 

              <Row className="pt-5 align-items-center">
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

              <Row className="justify-content-center text-center pt-4 mt-4">
                <Col lg={9}>
                  <p className="intro"> <strong>Bold</strong> é uma <strong>escola digital</strong> que te </p> 
                  <p className="intro"> auxilia a aprender com os <strong>melhores</strong> </p> 
                  <p className="intro"> <strong>profissionais</strong> do mercado. </p>
                </Col>
              </Row>

              <Row className="justify-content-center text-center pt-4 mt-5">
                <Col lg={4} className="zoom p-0">
                  <Image src={Img1} fluid/>
                </Col>
                <Col lg={4} className="zoom p-0">
                  <span className="img-text">Finanças para empresas</span>
                  <Image src={Img2} fluid/>
                </Col>
                <Col lg={4} className="zoom p-0">
                  <Image src={Img3} fluid/>
                </Col>
                <Col lg={4} className="zoom p-0">
                  <Image src={Img4} fluid/>
                </Col>
                <Col lg={4} className="zoom p-0">
                  <Image src={Img5} fluid/>
                </Col>
                <Col lg={4} className="zoom p-0">
                  <Image src={Img6} fluid/>
                </Col>
              </Row>

              <Row className="pt-5 mt-2">
                <Col lg={8} className="text-center">
                  <Link to={'/Courses'} className="courses-link">Veja todos os nossos cursos</Link>  
                </Col>
              </Row>

            </Col>
          </Row>
        </Col>

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
      </Row>
    </Container>

  );
}

export default Home;
