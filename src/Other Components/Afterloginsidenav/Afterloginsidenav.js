// our main component from where all home pages are linked
import { Layout } from "antd";
import Sider from "antd/lib/layout/Sider";
import "./Afterloginsidenav.css";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Footer, Content } = Layout;

export const Afterloginsidenav = (props) => {
  //using browxser location so that we can match it later with our ternary condition statements
  const location = useLocation();
  const path = location.pathname;
  console.log(location.pathname);
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "700px",
          position: "fixed",
          zIndex: "10",
          alignItems: "center",
          width: "20px"
        }}
      >
        <Sider
          collapsed={true}
          style={{
            backgroundColor: "#505C8B",
            top: "0px",
            height: "559px",
            marginLeft: "70px",
            borderRadius: "12px"
          }}
        >
          <div
            style={{
              width: "80px",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between"
            }}
          >
            {/* side nav bar for home page */}
            <Link to="/home">
              <div style={{ position: "relative", marginTop: "0px" }}>
                <div
                  className={path === "/home" ? "borderwhite" : ""}
                  style={{
                    width: "100%",
                    display: "flex",
                    height: "80px",
                    justifyContent: "center"
                  }}
                >
                  <img
                    style={{ width: "40px", zIndex: "10",scale:"110%" }}
                    src="/assets/SvgNav/VectorHome.svg"
                    alt="error"
                  />
                  {path === "/home" ? (
                    <div>
                      <img
                        style={{
                          width: "35px",
                          zIndex: "10",
                          position: "relative",
                          left: "30px",
                          marginLeft: "-20px",
                          width: "20px",
                          height: "70px"
                        }}
                        src="/assets/SvgNav/Vectorarrow.svg"
                        alt="error"
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Link>
            <div>
              {/* sidenavbar for information page */}
              <Link style={{ position: "relative" }} to="/Information">
                <div style={{ position: "relative", top: "100px" }}>
                  <div
                    className={path === "/Information" ? "borderwhite" : ""}
                    style={{
                      width: "100%",
                      display: "flex",
                      height: "80px",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      style={{
                        width: "33px",
                        zIndex: "10",
                        marginLeft: "8px"
                      }}
                      src="/assets/SvgNav/VectorList.svg"
                      alt="error"
                    />
                    {path === "/Information" ? (
                      <div>
                        <img
                          style={{
                            width: "35px",
                            zIndex: "10",
                            position: "relative",
                            left: "30px",
                            marginLeft: "-17px",
                            width: "17px",
                            height: "70px"
                          }}
                          src="/assets/SvgNav/Vectorarrow.svg"
                          alt="error"
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </Link>

              {/* sidenav bar for faQ PAGE */}
              <Link style={{ position: "relative", top: "295px" }} to="/Faq">
                <div
                  style={{
                    position: "relative",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                >
                  <div
                    className={path === "/Faq" ? "borderwhite" : ""}
                    style={{
                      width: "100%",
                      display: "flex",
                      height: "80px",
                      justifyContent: "center"
                    }}
                  >
                    <img
                      style={{
                        width: "25px",
                        zIndex: "10",
                        marginLeft: "12px"
                      }}
                      src="/assets/SvgNav/vectorquestionmark.svg"
                      alt="error"
                    />
                    {path === "/Faq" ? (
                      <div>
                        <img
                          style={{
                            width: "35px",
                            zIndex: "10",
                            position: "relative",
                            left: "30px",
                            marginLeft: "-17px",
                            width: "20px",
                            height: "70px"
                          }}
                          src="/assets/SvgNav/Vectorarrow.svg"
                          alt="error"
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Sider>
        <div
          classname="welcometext"
          style={{
            marginLeft: "29px",
            marginTop: "-530px",
            fontWeight: "500",
            fontSize: "30px",
            color: "#505C8B",
            fontFamily: ""
          }}
        >
          <p style={{ width: "28rem" }}>{props.text}</p>
        </div>

        {/* using ternary operator to apply differewnt avatar during myprofiler page */}
        {path === "/Myprofile" || path === "/Editprofile" ? (
          <div>
            {/* first statement */}

            <div
              style={{
                height: "10px",
                position: "relative",
                top: "-100px",
                right: "200px"
              }}
            >
              {path === "/Editprofile" ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <img src="/assets/images/Girlprofilepic.png" alt="error" />
                  <Link className="my-3" to="/Myprofile">
                    Edit avatar
                  </Link>
                </div>
              ) : (
                <img src="/assets/images/Girlprofilepic.png" alt="error" />
              )}
            </div>
          </div>
        ) : (
          <div>
            <div
              style={{
                height: "10px",
                position: "relative",
                top: "-310px",
                right: "-650px"
              }}
            >
              <div className="dropdown">
                <img
                  src="/assets/images/Girlprofilepic.png"
                  alt="error"
                  className="btn  dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link className="dropdown-item" to="/Myprofile">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <UserOutlined style={{ marginRight: "10px" }} />
                      Profile
                    </div>
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/login">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <LogoutOutlined style={{ marginRight: "10px" }} />
                      Log Out
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer style={{ backgroundColor: "#D9D9D9", paddingLeft: "90%",top:"688px",position:"relative"}}>
            2022 pluma
          </Footer>
    </>
  );
};
