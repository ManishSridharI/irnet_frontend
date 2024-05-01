import React from "react";
import { Col, Row } from "react-bootstrap";
import { Card, CardActions, CardContent } from '@mui/material';
import Trupti from "./images/Trupti-Joshi.webp";
import Dong from "./images/Dong-Xu-1024x1024.webp"

function Facultystack() {
  const faculty_card_css = { width: '30%', margin: '1%', boxShadow: '0 0 2rem rgb(3 3 3 / 20%), 0 0 0.3rem rgb(3 3 3 / 9%)' };
  const img_css = { width: '250px', height: '250px' };
  const email_css = { background: 'black', padding: '8px', color: 'white', fontWeight: 'bolder'};
  const name_css = { fontWeight: 400, margin: '5px' };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Card style={faculty_card_css}>
                    <CardContent>
                        <div >
                            <div>
                              <div>
                                  <img decoding="async" src={Dong} alt="Dong Xu" style={img_css} />
                              </div>
                            </div>
                            <h3  style={name_css}>Dong Xu</h3>
                            <p >Curators’ Distinguished Professor Fellow, AAAAS, AIMBE Core Faculty, LAS, IDSI, IPG</p>
                            <p >Department of Electrical Engineering and Computer Science</p>
                        </div >
                    </CardContent>
                </Card >
      <Card style={faculty_card_css}>
                    <CardContent>
                        <div >
                            <div>
                                <img decoding="async" src={Trupti} alt="Trupti Joshi" style={img_css} />
                            </div>
                            <h3  style={name_css}>Trupti Joshi</h3>
                            <p>Assistant Professor</p>
                            <p>Core Faculty MUIDSI, DPST, LSC, IPG, EECS</p>
                            <p>Department of Biomedical Informatics, Biostatistics and Medical Epidemiology (BBME)</p>
                            <a style={email_css} href="mailto:JoshiTr@missouri.edu" target="_blank"> Email Trupti</a>
                        </div >
                    </CardContent>
                </Card >
    </Row>
  );
}

export default Facultystack;
