import React from "react";
import { Col, Row } from "react-bootstrap";
import { Card, CardActions, CardContent } from '@mui/material';
import aaboutimg from "../../Assets/about.png";
import Yen from "./images/Yen.webp"
import Shuai from "./images/Shuai.jpg"
import Duolin from "./images/Duolin Wang.jpg"
import Yuexu from "./images/Yuexu.jpg"
import Manish from "./images/Manish.jpg"

function Teamstack() {
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
                                <img decoding="async" src={Yuexu} alt="Yuexu Jiang" style={img_css} />
                            </div>
                            <h3 style={name_css}>Yuexu Jiang</h3>
                            <p>Postdoctoral Fellow</p>
                            <p>Christopher S. Bond Life Sciences Center</p>
                            <p>Department of Electrical Engineering and Computer Science</p>
                            <a style={email_css} href="mailto:yjm85@missouri.edu" target="_blank"> Email Yuexu</a>
                        </div >
                    </CardContent>
                </Card >
                <Card style={faculty_card_css}>
                    <CardContent>
                        <div >
                            <div>
                              <div>
                                  <img decoding="async" src={Duolin} alt="Duolin Wang" style={img_css} />
                              </div>
                            </div>
                            <h3  style={name_css}>Duolin Wang</h3>
                            <p>Postdoctoral Fellow</p>
                            <p>Christopher S. Bond Life Sciences Center</p>
                            <p>Department of Electrical Engineering and Computer Science</p>
                        </div >
                    </CardContent>
                </Card >
                <Card style={faculty_card_css}>
                    <CardContent>
                        <div >
                            <div>
                              <div>
                                  <img decoding="async" src={Shuai} alt="Shuai Zeng" style={img_css} />
                              </div>
                            </div>
                            <h3  style={name_css}>Shuai Zeng</h3>
                            <p>Postdoctoral Fellow</p>
                            <p>Christopher S. Bond Life Sciences Center</p>
                            <p>Department of Electrical Engineering and Computer Science</p>
                        </div >
                    </CardContent>
                </Card >
                <Card style={faculty_card_css}>
                    <CardContent>
                        <div >
                            <div>
                                <img decoding="async" src={Manish} alt="Manish Sridhar" style={img_css} />
                            </div>
                            <h3  style={name_css}>Manish Sridhar</h3>
                            <p>Masters Student</p>
                            <p>Department of Electrical Engineering and Computer Science</p>
                        </div >
                    </CardContent>
                </Card >
                <Card style={faculty_card_css}>
                    <CardContent>
                        <div >
                            <div>
                              <div>
                                  <img decoding="async" src={Yen} alt="Yen On Chan" style={img_css} />
                              </div>
                            </div>
                            <h3  style={name_css}>Yen On Chan</h3>
                            <p>PhD. Student</p>
                            <p>MU Institute for Data Science and Informatics</p>
                            <p>Department of Electrical Engineering and Computer Science</p>
                        </div >
                    </CardContent>
                </Card >
    </Row>
  );
}

export default Teamstack;
