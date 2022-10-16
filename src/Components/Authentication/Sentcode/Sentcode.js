import { React } from "react";
//import ant design elements
import {
  ArrowLeftOutlined
} from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import { Link } from "react-router-dom";
import "./Sentcode.css";


export const Sentcode = () => {
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

              <div
                style={{ marginTop: "5%", display: "flex" }}
                className="heading"
              >
                <Link to="/CreateAccount">
                  <ArrowLeftOutlined
                    style={{ fontSize: "40px", color: "#EAB354" }}
                  />
                </Link>
                <h1 style={{ height: "45px", marginLeft: "20px" }}>
                  OK! We sent you a Code
                </h1>
              </div>
              <div
                className="haveAccount"
                style={{ marginTop: "118px", width: "75%" }}
              >
                <span>
                  Please enter the code sent to abcd@google.com within next 30
                  minutes.
                </span>
              </div>
              <Col className="inputContainer">
                <Col className="inputForm">
                  <div
                    style={{
                      marginBottom: "24px",

                      marginLeft: "16px"
                    }}
                  >
                    <Col>Code</Col>
                  </div>
                  <Input
                    className="inputAnt"
                    style={{ padding: "15px", borderRadius: "15px" }}
                    placeholder="Enter the code here"
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
                  height: "50px"
                }}
              >
                Continue
              </Button>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around"
                }}
              >
                <span style={{ marginTop: "50px" }}>- OR -</span>
                <div
                  style={{
                    width: "70%",
                    display: "flex",
                    justifyContent: "center",
                    maxWidth: "600px",
                    marginTop: "5%",
                    height: "40px"
                  }}
                >
                  <div>Didnot receive the link? </div>
                  <Link style={{ color: "#EAB354" }} to="/SentCode">
                    Send it again.
                  </Link>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};
