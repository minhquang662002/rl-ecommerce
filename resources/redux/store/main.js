import { legacy_createStore as createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import mySaga from "../saga/saga"
import reducer from "../reducer/z"

const composeEnhances= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware= createSagaMiddleware()
const store= createStore(
    reducer, composeEnhances(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(mySaga)

export default store