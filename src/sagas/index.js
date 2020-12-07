import { takeEvery, put, call, select } from "redux-saga/effects";
import axios from "axios";
import { LOAD_DATA, LOAD_MORE, putData, putMore, showError } from "../actions";

function fetchData(url) {
  return axios.get(url);
}

export function* loadDataWorker() {
  try{
    const data = yield call(
      fetchData.bind(
        this,
        "https://api.spacexdata.com/v3/launches?sort=launch_date_utc&order=desc&limit=6"
      )
    );
    yield put(putData(data));
  } catch(e) {
    yield put(showError());
  }
  
}

export function* loadMoreWorker() {
  const state = yield select();
  const page = state.launchesReducer.page;
  console.log(page)
  const data = yield call(
    fetchData.bind(
      this,
      `https://api.spacexdata.com/v3/launches?sort=launch_date_utc&order=desc&limit=6&offset=${page * 6}`
    )
  );
  yield put(putMore(data));
}

export function* loadMoreWatcher() {
  yield takeEvery(LOAD_MORE, loadMoreWorker);
}

export function* loadDataWatcher() {
  yield takeEvery(LOAD_DATA, loadDataWorker);
}
