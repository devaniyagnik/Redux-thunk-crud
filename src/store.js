
import { createStore,applyMiddleware } from 'redux'
import crudReducer from './reducers/crudSlice'
import { composeWithDevTools as  compose} from 'redux-devtools-extension'
import thunk from "redux-thunk";

const store = createStore(crudReducer,compose(
    applyMiddleware(thunk)
) );

export default store;