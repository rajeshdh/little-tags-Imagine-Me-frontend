import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk';

export default createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ?
        window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(thunk))
        : applyMiddleware(thunk),
)