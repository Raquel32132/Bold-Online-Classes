import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import ModalMenu from '../components/ModalMenu.jsx';

import RedHam from '../assets/images/red-ham.png';
import Logo from '../assets/images/boldlogo.jpeg';
import Img7 from '../assets/images/img7.jpg';
import Img8 from '../assets/images/img8.jpg';
import Img9 from '../assets/images/img9.jpg';
import Img6 from '../assets/images/img6.jpg';
import Img11 from '../assets/images/img11.jpg';
import Icon1 from '../assets/images/icon1.png';
import Icon2 from '../assets/images/icon2.png';

import Iconfb from '../assets/images/iconfacebook.png';
import Icontt from '../assets/images/icontwitter.png';
import Iconlink from '../assets/images/iconlinkedin.png';

const WebDesign = () => {

    const [modalShow, setModalShow] = React.useState(false);
  
    return (
  
      <Container fluid className="adjust-height">
  
        <Helmet>
          <link rel="stylesheet" href="./style/web-design.css" />
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

                <Row className="justify-content-center mt-5">
                  <Col className="text-center mt-5">
                    <p className="title">Web Design Completo</p>
                    <p className="intro">HTML/CSS + Criação do seu Portfolio</p>
                  </Col>
                </Row>


              </Col>
            </Row>

            <Row className="justify-content-center mt-5 pt-5">
              <Col lg={10}>

              <Row className="text-center justify-content-between align-items-center mt-5 mb-3">
                <Col className="img-col p-0" lg={7}>
                  <Image src={Img7} fluid/>
                </Col>

                <Col className="text-col p-5" lg={5}>
                  <p>Aprenda a fazer WebDesign e Desenvolvimento Web em HTML e CSS e termine o curso com o seu Portfolio Online publicado.</p>
                </Col>
              </Row>

              <Row>
                <Col className="title2 mt-5 p-0 mb-4">
                  <p>O que você aprenderá.</p>
                </Col>
              </Row>


              <Row className="justify-content-between">
                <Col lg={5} className="text pl-0">
                  <p>Ao final do curso os alunos terão fluência na linguagem HTML/CSS e estarão preparados para fazer páginas web com códigos, usando apenas um editor de texto. Além disso, todos os alunos terminam o curso com um portfolio/currículo publicado na internet, pois este é o projeto que vamos fazer juntos aqui, desde o começo.</p>
                </Col>

                <Col lg={6} className="">
                  <Row className="align-items-center pb-1">
                    <Col lg={1} className="p-0">
                      <Image src={Icon1} fluid/>
                    </Col>
                    <Col className="name p-0">
                      <p>Jonathan Walker</p>
                    </Col>
                  </Row> 
                  <Row>
                    <Col lg={10} className="text2 p-0">
                      <p>In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.</p>
                    </Col>
                  </Row>

                  <Row className="align-items-center pb-1">
                    <Col lg={1} className="p-0">
                      <Image src={Icon2} fluid/>
                    </Col>
                    <Col className="name p-0">
                      <p>Brenda Mercer</p>
                    </Col>
                  </Row> 
                  <Row>
                    <Col lg={10} className="text2 p-0">
                      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sodales primis, mollis viverra conubia ligula inceptos laoreet libero tortor, nascetur non habitasse iaculis tempor nec egestas fames augue, platea porta integer nostra curae sed arcu. Nec ut diam vulputate ante scelerisque ridiculus lobortis orci mi curae.</p>
                    </Col>
                  </Row>

                </Col>
              </Row>

              <Row>
                <Col className="title3 p-0 mt-3">
                  <p>Conteúdo do curso</p>
                </Col>
              </Row>

              <Row className="justify-content-center">
                
              </Row>

              <Row className="justify-content-center flex-column mt-4">
                <Col className="offset-md-2">
                  <div className="title4 p-0">
                    <p>Aprendendo HTML</p>
                  </div>

                  <div className="lista p-0">
                    <ul>
                      <li>Introdução</li>
                      <li>Estrutura Básica do Documento HTML</li>
                      <li>Os Elementos HTML (Tags)</li>
                      <li>Os Atributos HTML</li>
                      <li>Formatação da página (Style)</li>
                      <li>O Elemento DIV (Parte 1)</li>
                      <li>O Elemento DIV (Parte 2)</li>
                      <li>Listas e iFrame</li>
                      <li>O Atributo ID</li>
                      <li>Exercício - Construção de uma página de notícia (Parte 1)</li>
                      <li>Exercício - Construção de uma página de notícia (Parte 2)</li>
                    </ul>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col className="classes mt-5 mb-4">
                  <p>Aulas</p>
                </Col>
              </Row>

              <Row> 
                <Col className="classe-col flex-column d-flex mb-3" lg={3}>
                  <Link className="h-100" to={'/WebDesign1'}>
                    <div className="div-main d-flex flex-column h-100 justify-content-between">
                      <Image src={Img8} fluid/>
                      <div className="div-main2 flex-grow-1 pl-4 pr-4 pt-4">
                        <p className="div-title">Introdução</p>
                        <p className="div-text">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</p>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col className="classe-col flex-column d-flex mb-3" lg={3}>
                  <Link className="h-100" to={'/WebDesign2'}>
                    <div className="div-main d-flex flex-column h-100 justify-content-between pb-1">
                      <Image src={Img9} fluid/>
                      <div className="div-main2 flex-grow-1 pl-4 pr-4 pt-4">
                        <p className="div-title">Estrutura Básica do Documento HTML</p>
                        <p className="div-text">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad</p>
                      </div>
                    </div>
                  </Link>
                </Col>

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

                <Col className="classe-col flex-column d-flex mb-3" lg={3}>
                  <Link className="h-100" to={''}>
                    <div className="div-main d-flex flex-column h-100 justify-content-between pb-1">
                      <Image src={Img6} fluid/>
                      <div className="div-main2 flex-grow-1 pl-4 pr-4 pt-4">
                        <p className="div-title">O Elemento DIV (Parte 2)</p>
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
                        <p className="div-title">Listas e iFrame</p>
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
                        <p className="div-title">O Atributo ID</p>
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
                        <p className="div-title">Exercício - Construção de uma página de notícia (Parte 1)</p>
                        <p className="div-text">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad</p>
                      </div>
                    </div>
                  </Link>
                </Col>

                <Col className="classe-col flex-column d-flex mb-3" lg={3}>
                  <Link className="h-100" to={''}>
                    <div className="div-main d-flex flex-column h-100 justify-content-between pb-1">
                      <Image src={Img6} fluid/>
                      <div className="div-main2 flex-grow-1 pl-4 pr-4 pt-4">
                        <p className="div-title">Exercício - Construção de uma página de notícia (Parte 2)</p>
                        <p className="div-text">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</p>
                      </div>
                    </div>
                  </Link>
                </Col>
              </Row>

              
            </Col>
          </Row>


          <Col lg={12}>
            <Row className="justify-content-center pt-5 pb-5 mt-5">
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
  
  export default WebDesign;
  