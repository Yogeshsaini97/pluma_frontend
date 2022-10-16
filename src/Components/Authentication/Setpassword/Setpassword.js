import { React } from "react";
import { Button, Col, Input, Row } from "antd";
import { Link } from "react-router-dom";
import "./Setpassword.css";


export const Setpassword = () => {
  return (
    <>
      <div className="Logincomponent">
        <div>
          <Row
            style={{ position: "relative", top: "295px" }}
            className="container LoginContainer"
          >
            <div className="containerLogin">
              <img
                style={{
                  position: "absolute",
                  zIndex: "4",
                  width: "170px",
                  left: "-110px",
                  top: "250px"
                }}
                src="/assets/images/Group.png"
                alt="error"
              />
              <Button
                style={{
                  position: "absolute",
                  borderRadius: "100px",
                  backgroundColor: "#505C8B",
                  color: "#fff",
                  fontSize: "40px",
                  width: "58px",
                  height: "57px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  font: "Prompt",
                  fontWeight: "600",
                  right: "-30px",
                  bottom: "30px"
                }}
              >
                ?
              </Button>
              <div
                className="backgroundBlue"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  backgroundColor: "#505c8b",
                  zIndex: "-1",
                  borderRadius: "50px"
                }}
              />

              <div className="headingContainer">
                <h1 className="heading">Set your password</h1>
              </div>
              <div className="haveAccount">
                <span>Please set a new password for your account</span>
              </div>

              <Col className="inputContainer">
                <Col className="inputForm">
                  <Col>New Password</Col>
                  <Input
                    className="inputAnt"
                    style={{
                      padding: "15px",
                      borderRadius: "15px",
                      top: "-9px"
                    }}
                    placeholder="Enter your Email here"
                  />
                </Col>
                <Col className="inputForm">
                  <Col>Confirm Password</Col>
                  <Input
                    className="inputAnt"
                    style={{
                      padding: "15px",
                      borderRadius: "15px",
                      top: "-9px"
                    }}
                    placeholder="Enter your Password here"
                  />
                </Col>
              </Col>

              <Button
                type="primary"
                style={{
                  marginTop: "50px",
                  backgroundColor: "#FFB600",
                  borderRadius: "10px",
                  border: "20px",
                  width: "280px",
                  height: "600px"
                }}
              >
                Set Password
              </Button>
              <div style={{ marginTop: "10px" }}>
                By logging in you our Terms and Conditions
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around"
                }}
              >
                <span style={{ marginTop: "80px" }}>- OR -</span>
                <div
                  style={{
                    width: "70%",
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: "600px",
                    marginTop: "5%"
                  }}
                >
                  <Button style={{ height: "60px", borderRadius: "10px" }}>
                    <img src="/assets/images/Google.png" alt="error" />
                    Sign up with Google
                  </Button>
                  <Button style={{ height: "60px", borderRadius: "10px" }}>
                    <img src="/assets/images/GitHub.png" alt="error" />
                    Sign up with GitHub
                  </Button>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};
