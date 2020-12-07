import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadData, loadMore } from "../../actions";
import LaunchesList from "../LaunchesList/LaunchesList";

import styles from "./launches.module.scss";

const Launches = ({ loadData, loadMore, upcoming, history }) => {
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="container">
      <LaunchesList title="Upcoming" items={upcoming} />
      <LaunchesList title="History" items={history} />
      <button onClick={loadMore} className={styles.loadmore}>
        <svg viewBox="0 0 13 10">
          <path d="M1.66669 4C1.11335 4 0.666687 4.44667 0.666687 5C0.666687 5.55333 1.11335 6 1.66669 6C2.22002 6 2.66669 5.55333 2.66669 5C2.66669 4.44667 2.22002 4 1.66669 4ZM1.66669 0C1.11335 0 0.666687 0.446667 0.666687 1C0.666687 1.55333 1.11335 2 1.66669 2C2.22002 2 2.66669 1.55333 2.66669 1C2.66669 0.446667 2.22002 0 1.66669 0ZM1.66669 8C1.11335 8 0.666687 8.45333 0.666687 9C0.666687 9.54667 1.12002 10 1.66669 10C2.21335 10 2.66669 9.54667 2.66669 9C2.66669 8.45333 2.22002 8 1.66669 8ZM3.66669 9.66667H13V8.33333H3.66669V9.66667ZM3.66669 5.66667H13V4.33333H3.66669V5.66667ZM3.66669 0.333333V1.66667H13V0.333333H3.66669Z" />
        </svg>
        See more
      </button>
    </div>
  );
};

const mapStateToProps = ({ launchesReducer }) => ({
  history: launchesReducer.history,
  upcoming: launchesReducer.upcoming,
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadData()),
  loadMore: () => dispatch(loadMore())
});

export default connect(mapStateToProps, mapDispatchToProps)(Launches);
