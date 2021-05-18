import { actions } from './../features/user-list/constants';
import { sagaMiddleWare } from './enhancers/middlewares';
import { middlewares } from './enhancers';
import { createStore, compose } from 'redux';
import rootReducer from './reducers';
import rootSaga from './sagas';

export const configureStore = () => {
    const enhancers = compose(middlewares);
    const store = createStore(rootReducer, enhancers);
    sagaMiddleWare.run(rootSaga);
    return store;
}