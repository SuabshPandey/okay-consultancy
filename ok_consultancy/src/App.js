import React from "react";
import Header from "./components/Header/Header";
import HomeRouter from "./components/router/HomeRouter";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";
function App() {
  return (
    <div className="App">
      <Header />
      <HomeRouter />
      <div className="container-fluid footer_bg">
        <hr className="ma_tb" />
        <Footer />
      </div>
      <Copyright />
    </div>
  );
}

export default App;
