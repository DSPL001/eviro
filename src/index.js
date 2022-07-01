import ReactDOM from 'react-dom/client';
// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// project imports
import store from 'store';
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { SnackbarProvider } from 'notistack';
// style + assets
import 'assets/scss/style.scss';
// ==============================|| REACT DOM RENDER  ||============================== //
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SnackbarProvider>
    </Provider>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
