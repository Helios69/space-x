import React from "react";
import { connect } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Launches from "./components/Launches/Launches";
import NotFoundScreen from "./components/NotFoundScreen/NotFoundScreen";

function App({ fetchingError }) {
  return (
    <>
      <Navbar />
      {fetchingError ? <NotFoundScreen /> : <Launches />}
    </>
  );
}

const mapStateToProps = ({ launchesReducer }) => ({
  fetchingError: launchesReducer.fetchingError,
});

export default connect(mapStateToProps, null)(App);
