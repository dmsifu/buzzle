import * as ReactDOMClient from 'react-dom/client';
import { store } from './app/store'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)