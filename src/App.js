import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Launches from "./components/Launches/Launches";
import NotFoundScreen from "./components/NotFoundScreen/NotFoundScreen";

function App() {
  return (
    <>
      <Navbar />
      <Launches />
      {/* <NotFoundScreen /> */}
    </>
  );
}

export default App;
