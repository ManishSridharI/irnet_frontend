import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Mizzou from "../Assets/mizzou.png"
import { VscSend } from "react-icons/vsc"; 
import { GiMeshNetwork } from "react-icons/gi";
import { CiLocationArrow1 } from "react-icons/ci";
import { BiPhone } from "react-icons/bi";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <form action=''>
        <Row className="mb-4 justify-content-center"  style={{marginTop: 30}}> 
          <Col xs="auto" className="my-0 px-2"> 
            <h4>
              <strong><b className="purple">Got Queries?</b></strong>
            </h4>
          </Col>
          <Col md="4" xs="12" className="my-0 px-2" > 
            <input type='text' id='form5Example2' className="form-control" placeholder="Your issue" /> 
          </Col>
          <Col xs="auto" className="my-0 px-2"> 
            <Button type="submit" className="fork-btn-inner" href="mailto:yjm85@missouri.edu,JoshiTr@missouri.edu"> 
              <VscSend/> &nbsp; Email Us
            </Button>
          </Col>
        </Row>
      </form>
      <section className=''>
        <Container className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col md='3' lg='4' xl='3' className='mx-auto mb-4'>
           <h5 className='purple'> <GiMeshNetwork/>&nbsp;IRNet</h5>
              <p className='white'>
                Welcome!
              </p>
            </Col>

            <Col md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='purple'>Other Developements</h6>
              <p className='white'>
                <a href='https://impres.missouri.edu/impres' target="_blank" className='white'>IMPRes</a>
              </p>
              <p className='white'>
                <a href='https://g2pdeep.org/' target="_blank" className='white'>G2PDeep</a>
              </p>
              <p className='white'>
                <a href='https://mu-loc.org/' target="_blank" className='white'>MuLocDeep</a>
              </p>
              <p className='white'>
                <a href='https://kbcommons.org/' target="_blank" className='white'>KBCommons</a>
              </p>
            </Col>

            <Col md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='purple'>Team</h6>
              <p className='white'>Yuexu Jiang </p>
              <p className='white'>Manish Sridhar</p>
              <p className='white'>Dong Xu</p>
              <p className='white'>Trupti Joshi</p>
            </Col>

            <Col md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='purple'>Contact</h6>
              <p className='white'><CiLocationArrow1 /> &nbsp;LSC 110</p>
              <p className='white'><CiLocationArrow1 /> &nbsp;MU Bond Life Sciences Center</p>
              <p className='white'><CiLocationArrow1 /> &nbsp;Columbia, Missouri</p>
              <p className='white'><BiPhone /> &nbsp;573-882-0093</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <Row>
      <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ManishSridharI"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/mizzou"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/school/university-of-missouri/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
          </Row> */}
      <Row>
      <Col md="4" className="footer-copywright">
          <h3>University of Missouri      <img src={Mizzou} className="footer-logo" /></h3> 
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} IRNET</h3>
        </Col>
       
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ManishSridharI"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/mizzou"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/school/university-of-missouri/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
