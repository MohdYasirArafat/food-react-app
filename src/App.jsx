import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/ErrorPage";
import ProtectedRoute from "./Components/ProtectedRoute";

import AuthProtectedRoute from "./Components/AuthProtectedRoute";

import SignUp from './Components/SignUp';
import Login from './Components/Login';

import Dashboard from "./AdminComponents/Dashboard";
import Read from "./AdminComponents/Read";
import Create from "./AdminComponents/Create";
import Update from "./AdminComponents/Update";
import Search from "./AdminComponents/Search";
import ErrorPage from "./pages/ErrorPage";


  const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          {/* <Route path="/" element={<Home />} /> */}
           {/* protected routes */}
          <Route
            path="/success"
            element={<ProtectedRoute element={<Success />} />}
          />
          <Route path='/' element={<AuthProtectedRoute/>}>
           <Route path='/' element={<Home/>}/>
           <Route path='/home' element={<Home/>}/>
           <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path="/read" element={<Read/>} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/search" element={<Search />} />
          </Route>
          
          
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
