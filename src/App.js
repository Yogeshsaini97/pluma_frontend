import React from "react";
import { Login } from "./Components/Authentication/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Plumasidenav from "./Other Components/Plumasidenav";
import { Register } from "./Components/Authentication/Register/Register";
import { CreateAccount } from "./Components/Authentication/CreateAccount/CreateAccount";
import { Thankyou } from "./Components/Authentication/ThankYou/Thankyou";
import { Setpassword } from "./Components/Authentication/Setpassword/Setpassword";
import { Forgotpassword } from "./Components/Authentication/Forgotpassword/Forgotpassword";
import { Sentcode } from "./Components/Authentication/Sentcode/Sentcode";
import { TermsConditions } from "./Components/Authentication/TermsConditions/TermsConditions";
import { Mainhome } from "./Components/PagesAfterAuthentication/Mainhome/Mainhome";
import { Faq } from "./Components/PagesAfterAuthentication/Faq/Faq";
import { Information } from "./Components/PagesAfterAuthentication/Information/Information";
import { Myprofile } from "./Components/PagesAfterAuthentication/Myprofile/Myprofile";
import { Editprofile } from "./Components/PagesAfterAuthentication/Edit Profile/Editprofile";

//using routes with exact paths, later outlet and auth will be used for better accessibility,

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Plumasidenav />
        <Routes>
          <Route exact path="/Login" element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path="/Register" element={<Register />} />
        </Routes>
        <Routes>
          <Route exact path="/CreateAccount" element={<CreateAccount />} />
        </Routes>
        <Routes>
          <Route exact path="/thankyou" element={<Thankyou />} />
        </Routes>
        <Routes>
          <Route exact path="/Setpassword" element={<Setpassword />} />
        </Routes>
        <Routes>
          <Route exact path="/Forgotpassword" element={<Forgotpassword />} />
        </Routes>
        <Routes>
          <Route exact path="/Sentcode" element={<Sentcode />} />
        </Routes>
        <Routes>
          <Route exact path="/TermsConditions" element={<TermsConditions />} />
        </Routes>
        <Routes>
          <Route exact path="/Home" element={<Mainhome />} />
        </Routes>
        <Routes>
          <Route exact path="/Faq" element={<Faq />} />
        </Routes>
        <Routes>
          <Route exact path="/Information" element={<Information />} />
        </Routes>
        <Routes>
          <Route exact path="/Myprofile" element={<Myprofile/>} />
        </Routes>
        <Routes>
          <Route exact path="/Editprofile" element={<Editprofile/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
