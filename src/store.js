import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import { loadDataWatcher, loadMoreWatcher } from './sagas';



const create = ()=> {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, compose(applyMiddleware(logger, sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
    sagaMiddleware.run(loadDataWatcher);
    sagaMiddleware.run(loadMoreWatcher);
    return store;
};

export default create; 