import { React, useState } from "react";
//import ant design elements
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  KeyOutlined,
  MailOutlined
} from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";


export const Login = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bool, setbool] = useState(false);
  const [emptyemail, setemptyemail] = useState(false);
  const [emptypassword, setemptypassword] = useState(false);


  //For navigation
  const Navigate=useNavigate();


  
  //function to handle Login onclick
  const loginfunc = (e) => {
    e.preventDefault();

    let emailarray = Email.split("");
    let passarray = password.split("");

    if (emailarray.length === 0) {
      setemptyemail(true);
    }

    if (passarray.length === 0) {
      setemptypassword(true);
    }

    if (emailarray.length > 0 && passarray.length > 0) {
      if (
        emailarray.includes("@") === false ||
        emailarray.includes(".") === false
      ) {
        setbool(true);
        return;
      } else {
        setbool(false);
        //here we are accepting all validations and suucessfully loging in
        Navigate("/home");

        return;
      }
    }

    return;
  };

  return (
    <>
      <div className="Logincomponent " style={{ scale: "90%" }}>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                marginTop: "-150px",
                backgroundColor: "#FF2E2E",
                width: "443px",
                height: "45px",
                borderRadius: "12px",
                color: "#FFFFFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                fontFamily: "prompt",
                fontWeight: "500",
                lineHeight: "21.17px"
              }}
            >
              hello
            </div>

            <div
              style={{
                height: "15px",
                width: "15px",
                backgroundColor: "#FF2E2E",
                transform: "rotate(45deg)",
                position: "absolute",
                top: "-40px"
              }}
            ></div>
          </div>

          <Row className="container LoginContainer">
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
              {bool ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <div
                    style={{
                      marginTop: "-150px",
                      backgroundColor: "#FF2E2E",
                      width: "443px",
                      height: "45px",
                      borderRadius: "12px",
                      color: "#FFFFFF",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "20px",
                      fontFamily: "prompt",
                      fontWeight: "500",
                      lineHeight: "21.17px"
                    }}
                  >
                    please enter a valid email id or password
                  </div>

                  <div
                    style={{
                      height: "15px",
                      width: "15px",
                      backgroundColor: "#FF2E2E",
                      transform: "rotate(45deg)",
                      position: "absolute",
                      top: "-40px"
                    }}
                  ></div>
                </div>
              ) : (
                <div></div>
              )}

              <div className="headingContainer">
                <h1 className="heading">Log In</h1>
              </div>
              <Col className="inputContainer" style={{height: "155px"}}>
                <Col className="inputForm">
                
                  <Input
                    className="inputAnt"
                    id="emailinput"
                    placeholder="Email"
                    value={Email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setbool(false);
                      setemptyemail(false);
                    }}
                    prefix={<MailOutlined />}
                  />
                  {emptyemail && <div style={{color:"red",position:"absolute",top:"8%" ,marginLeft:"5%"}}>Email can,t be empty!</div>}
                  
                </Col>
                
                <Col className="inputForm"  >
                  <Input.Password
                 
                    id="passinput"
                    className="inputAnt"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value);setemptypassword(false);}}
                    prefix={<KeyOutlined />}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                  {emptypassword && <div style={{color:"red",position:"absolute",top:"70%" ,marginLeft:"5%"}}>Password can,t be empty!</div>}
                </Col>
              </Col>

              <Button
                type="primary"
                onClick={loginfunc}
                style={{
                  Size: "14px",
                  fontFamily: "Prompt",
                  backgroundColor: "#FFB8B1",
                  fontWeight: "500",
                  borderRadius: "10px",
                  border: "0px",
                  width: "160px",
                  height: "40px",
                  color: "black",
                  top: "20px",
                  position: "relative"
                }}
              >
                Get Started
              </Button>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "80px"
                }}
              >
                <div
                  style={{
                    marginTop: "10px",
                    font: "Prompt",
                    fontWeight: "400"
                  }}
                >
                  Don’t have an account ?
                </div>
                <Link to="/createAccount" style={{ color: '#000AFF', font: 'Prompt', fontWeight: '500' }}>
            Create account.
          </Link>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};
