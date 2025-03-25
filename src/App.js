import { HashRouter  as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./componentes/layout/Header";
import Footer from "./componentes/layout/Footer";
import IniciarTarefas from "./componentes/layout/IniciarTarefas";
import AdicionarTarefas from "./componentes/pages/AdicionarTarefas";
import Home from "./componentes/layout/Home";

function App() {
  return (
    <Router>
      <Header />
      <Home></Home>
      <Routes>
      <Route 
      path="/IniciarTarefas" exact element={<IniciarTarefas />} />
      <Route 
        path="/" exact element={<AdicionarTarefas />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
