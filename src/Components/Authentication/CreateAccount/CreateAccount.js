import { React, useState } from "react";
//import ant design elements
import { Checkbox, Col, Input, Row, Button} from "antd";
import "./CreateAccount.css";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined, MailOutlined, KeyOutlined } from "@ant-design/icons";
import Marketingsidenav from "../../../Other Components/Marketingside/Marketingsidenav";

export const CreateAccount = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bool, setbool] = useState(false);
  const [emptyName, setemptyName] = useState(false);
  const [emptyemail, setemptyemail] = useState(false);
  const [emptypassword, setemptypassword] = useState(false);
  const [checkbox, setcheckbox] = useState(false);

  //for navigation inside funtipn
  const Navigate = useNavigate();

  //function to handle create account onclick

  const loginfunc = (e) => {
    e.preventDefault();
    let namearray = Name.split("");
    let emailarray = Email.split("");
    let passarray = password.split("");

    if (emailarray.length === 0) {
      setemptyemail(true);
    }

    if (passarray.length === 0) {
      setemptypassword(true);
    }

    if (namearray.length === 0) {
      setemptyName(true);
    }

    // if(checkbox===false)
    // {

    //   return;
    // }

    if (emailarray.length > 0 && passarray.length > 0 && namearray.length > 0) {
      if (
        emailarray.includes("@") === false ||
        emailarray.includes(".") === false
      ) {
        setbool(true);
        return;
      } else {
        setbool(false);
        Navigate("/home");

        return;
      }
    }

    return;
  };

  return (
    <div className="registerealfirst">
      <div className="marketingGroup">
      
        <div>
          <Marketingsidenav />
        </div>
        <div>
          <Marketingsidenav />
        </div>
        <div>
          <Marketingsidenav />
        </div>
      </div>
      <div>
        <Row className="container registerealContainer">
          <div className="containerLogin createacc" style={{ height: "500px" }}>
            <img
              style={{
                position: "absolute",
                zIndex: "4",
                width: "170px",
                right: "-160px",
                top: "50px"
              }}
              src="/assets/images/GirlRegistr.png"
              alt="error"
            />
            <div className="backgroundBlue" />
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
            <div
              className="headingContainer"
              style={{ position: "relative", top: "-35px" }}
            >
              <h1 className="heading">Register</h1>
            </div>

            <Col
              className="inputContainer"
              tyle={{ position: "relative", top: "2px" }}
            >
              <Col className="inputForm" style={{ marginBottom: "0" }}>
                <Input
                  className="inputAnt"
                  placeholder="Full name"
                  prefix={<UserOutlined />}
                  onChange={(e) => {
                    setName(e.target.value);
                    setemptyName(false);
                  }}
                />
              </Col>
              {emptyName && (
                <div
                  style={{
                    color: "red",
                    position: "absolute",
                    top: "3%",
                    marginLeft: "5%"
                  }}
                >
                  Name can,t be empty!
                </div>
              )}

              <Col className="inputForm">
                <Input
                  className="inputAnt"
                  value={Email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setbool(false);
                    setemptyemail(false);
                  }}
                  placeholder="Email"
                  prefix={<MailOutlined />}
                />
              </Col>
              {emptyemail && (
                <div
                  style={{
                    color: "red",
                    position: "absolute",
                    top: "31%",
                    marginLeft: "5%"
                  }}
                >
                  Email can,t be empty!
                </div>
              )}
              <Col className="inputForm">
                <Input
                  className="inputAnt"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setemptypassword(false);
                  }}
                  placeholder="Password"
                  prefix={<KeyOutlined />}
                />
              </Col>
              {emptypassword && (
                <div
                  style={{
                    color: "red",
                    position: "absolute",
                    top: "59%",
                    marginLeft: "5%"
                  }}
                >
                  password can,t be empty!
                </div>
              )}
              <Col
                className="policyContainer"
                style={{ position: "relative", top: "-9%" }}
              >
                <Checkbox
                  onClick={(e) => {
                    e.target.checked ? setcheckbox(false) : setcheckbox(true);
                  }}
                  style={{ padding: "5px", fontFamily: "Poppins" }}
                />
                <span>I agree to the </span>
                <Link to="/TermsConditions" style={{ color: "#000AFF" }}>
                  Terms and conditions
                </Link>
                {/* {checkbox &&  <div style={{color:"red",position:"absolute",top:"63%",marginLeft:"5%"}}>Please accept the Terms&conditions!</div>} */}
              </Col>
            </Col>
            <div style={{ marginTop: "10%" }}>
              <Button
                type="primary"
                onClick={loginfunc}
                className="acceptButton"
              >
                Get Started
              </Button>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginBottom: "50px"
                }}
              >
                <div className="haveAccount">
                  <span>Already have a account ? </span>
                  <Link style={{ color: "#000AFF" }} to="/Login">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
};
