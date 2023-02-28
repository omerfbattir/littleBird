import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/root/App'
import { Provider } from 'react-redux'
import configureStore from './redux/reduces/configureStore'

import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={configureStore()} >

    <App />
    </Provider>
)
