import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Dashboard } from "./components/pages/Dashboard";
import { Sabha } from "./components/pages/Sabha";
import { Attendence } from "./components/pages/Attendence";
import { Login } from "./components/pages/Login";
import { Yuvak } from "./components/pages/Yuvak";
import { Report } from "./components/pages/Report";
import SignUpForm from "./components/pages/SignUpForm";
import { Password } from "./components/pages/Password";
import { Home } from "./components/pages/Home";
import { Navbar } from "./components/pages/Navbar";
import { ErrorPage } from "./components/pages/ErrorPage";
import { CreateUser } from "./components/pages/CreateUser";
import { HomePage } from "./components/pages/HomePage";
import { UpdateYuvak } from "./components/pages/UpdateYuvak";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sabha" element={<Sabha />} />
        <Route path="/yuvak" element={<Yuvak />} />
        <Route path="/report" element={<Report />} />
        <Route path="/attendence" element={<Attendence />} />
        <Route path="/signupform" element={<SignUpForm />} />
        <Route path="/password" element={<Password />} />
        <Route path="/home" element={<Home />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/error404" element={<ErrorPage />} />
        <Route path="/yuvak-create-user" element={<CreateUser />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/update-yuvak-page" element={<UpdateYuvak />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
