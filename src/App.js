import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from "./components/Menu";
import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";
import Pnf from "./components/Pnf";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./AuthGuard/ProtectedRoute";
import { ToastContainer } from "react-toastify";


function App(params) {
  return (
    <BrowserRouter>
      <Menu/>
      <ToastContainer autoClose={4000} position={"top-right"}/>
      <Routes>
         <Route element={ <ProtectedRoute/> }>
            <Route path={`/`} element={ <Home/> }/>
            <Route path={`/create`} element={ <Create/> }/>
            <Route path={`update/:id`} element={ <Update/> }/>
         </Route>
        <Route path={`/login`} element={ <Login/> }/>
        <Route path={`/register`} element={ <Register/> }/>
        <Route path={`/*`} element={ <Pnf/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App