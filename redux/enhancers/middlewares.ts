import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';


export const sagaMiddleWare = createSagaMiddleware();

export default applyMiddleware(
    sagaMiddleWare
)