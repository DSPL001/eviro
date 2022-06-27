import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "reducers";
import { sessionService } from 'redux-react-session';


// ==============================|| REDUX - MAIN STORE ||============================== //
const middleware = [thunk];
const store = createStore(   
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)));
const persister = 'Free';
sessionService.initSessionService(store);

export { store, persister };
