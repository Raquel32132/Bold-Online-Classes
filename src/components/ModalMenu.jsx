import React from 'react';
import { Modal, Button, Image, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CloseIcon from '../assets/images/close-icon.png';

const ModalMenu = (props) => {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false}
      >
        <Modal.Body className="ham-menu text-center"> 

          <Col lg={11} className="text-right pt-5 mt-5">
            <Button bsPrefix className="close-menu" onClick={props.onHide}>
              <Image src={CloseIcon} fluid/>
            </Button>
          </Col>

          <Col lg={12} className="pt-5">
            <Link to={'/'} className="menu-item">
              <strong>início</strong>
            </Link>
          </Col>


          <Col lg={12} className="pt-5">
            <Link to={''} className="menu-item">
              <strong>sobre</strong>
            </Link>
          </Col>

          <Col lg={12} className="pt-5">
            <Link to={'/Courses'} className="menu-item">
              <strong>cursos</strong>
            </Link>
          </Col>
        
          <Col lg={12} className="pt-5">
            <Link to={''} className="menu-item">
              <strong>login</strong>
            </Link>
          </Col>
          
          <Col lg={12} className="pt-5 pb-5">
            <Link to={''} className="menu-item">
              <strong>contato</strong>
            </Link>
          </Col>

        </Modal.Body>
      </Modal>
    );
  }
  
  function App() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button onClick={() => setModalShow(true)}>
          
        </Button>
  
        <ModalMenu
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

  export default ModalMenu;